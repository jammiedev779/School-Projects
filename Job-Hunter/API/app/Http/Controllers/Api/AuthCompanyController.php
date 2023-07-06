<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\LoginRequest;
use App\Http\Requests\Company\RegisterRequest;
use App\Models\Company;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Password;

class AuthCompanyController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\Company $company */

        $image = $request->file('image'); 
        $imageName = time().'-'.$image->getClientOriginalName();
        $image->move(public_path('images/company/'), $imageName);

        $company = Company::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'image' => $imageName,
            'location' => $data['location'],
            'website' => $data['website'],
            'manager' => $data['manager'],
        ]);


        // $company->sendEmailVerificationNotification();
        $token = $company->createToken('main')->plainTextToken;
        return response(compact('company', 'token'));
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
