<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Models\Company;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'username' => $data['username'],
            'gender' => $data['gender'],
        ]);

        $user->sendEmailVerificationNotification([
            'accountType' => 'user'
        ]);
        
        //return "success";
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
{
    $credentials = $request->validated();
    
    // Check if the credentials match a user account
    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        $type = "user";
        return response(compact('user', 'token','type'));
    }
    
    // Check if the credentials match a company account
    $companyCredentials = [
        'email' => $credentials['email'],
        'password' => $credentials['password'],
    ];
    
    if (Auth::guard('company')->attempt($companyCredentials)) {
        $company = Auth::guard('company')->user();
        $token = $company->createToken('main')->plainTextToken;
        $type = "company";
        return response(compact('company', 'token', 'type'));
    }
    
    // Neither user nor company credentials matched
    return response([
        'message' => 'Provided email or password is incorrect'
    ], 422);
}


    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }

    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
                    ? response()->json(['message' => __($status)])
                    : response()->json(['error' => __($status)], 500);
    }

}
