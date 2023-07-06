<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    public function showResetForm(Request $request, $token = null)
    {
        return redirect('http://localhost:3000/reset_password?token=' . $token . '&email=' . urlencode($request->email));

    }

    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            $redirectUrl = '/login?status=password_reset';
            return response()->json([
                'message' => __('Password reset successfully'),
                'redirect' => $redirectUrl,
            ], 200);
        } else {
            return response()->json([
                'message' => __('Unable to reset password'),
            ], 400);
        }
    }
}
