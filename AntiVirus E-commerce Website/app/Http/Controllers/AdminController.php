<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use Validator;

class AdminController extends Controller
{
    public function loginForm(){

        return view('account.login');
    }

    public function loginPost(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        $remember = $request->has('remember') ? true : false;
        // config/session.php set 'expire_on_close' => true,
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials, $remember)) {
            return redirect('/dashboard')->withSuccess('You have Successfully loggedin');
        }
        return redirect("/login")->withErrors('You have entered invalid credentials!');
    }
    public function dashboard()
    {
        if(Auth::check()){
            $user = Auth::user();
            return view('account.dashboard')->with('user',$user);
        }
        return redirect("/login")->withErrors('You do not have access!');
    }
    public function logout() {
        Session::flush();
        Auth::logout();
        return redirect('/login')->withSuccess('You have successfully loged out!');
    }

    public function home() {
        $user = Auth::user();
        return view('software.list')->with('user',$user);
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return view('account.edit')->with('user', $user);
    }

    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
			'name' => 'required|max:20|min:3',
			'email' => 'required|max:20|min:3',
			'profile' => 'mimes:jpg,jpeg,png,gif',
		]);

		if ($validator->fails()) {
			return redirect('account/'.$id.'/edit')
				->withInput()
				->withErrors($validator);
		}
        $user = User::find($id);
		// Create The Post
		if($request->file('profile') != ""){
            $profile = $request->file('profile');
            $upload = 'img/admin/';
            $filename = time().$profile->getClientOriginalName();
            move_uploaded_file($profile->getPathName(), $upload . $filename);
		}
		
		$user->name = $request->Input('name');
		$user->email = $request->Input('email');
		if(isset($filename)){
		    $user->profile = $filename;
		}
        
		$user->save();

		Session::flash('user_update','Your info. has been save.');
		return redirect('account/'.$user->id.'/edit');
    }
}
