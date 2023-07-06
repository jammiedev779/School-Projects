<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();

        if (!$user->isAdmin()) {
            return response([
                'message' => 'Access denied. Only admin users are allowed.'
            ], 403);
        }

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }
}
