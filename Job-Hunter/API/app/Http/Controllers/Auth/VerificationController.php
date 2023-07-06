<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class VerificationController extends Controller
{
    public function verify($user_id, Request $request){
        if(!$request->hasValidSignature()){
            return response()->json(['message' => 'Link Expired'],401);
        }

        $user = User::findOrFail($user_id);
        
        if(!$user->hasVerifiedEmail()){
            $user->markEmailAsVerified();
        }else{
            return response()->json([
                'message' => 'You have already verify your email.'
            ],400);
        }
        return redirect('http://localhost:3000/');
    }
}