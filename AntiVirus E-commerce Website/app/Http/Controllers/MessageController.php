<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Message;
use Illuminate\Http\Request;
use Session;
use Validator;
use Mail;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $messages = Message::all();
        return view('software.message.index')->with('messages',$messages)->with('user',$user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100|min:1',
            'email' => 'required|max:100|min:1',
            'subject' => 'required|max:255|min:1',
            'message' => 'required|min:1',
        ]);
          
        if ($validator->fails()) {
            return redirect('/contact')
                ->withInput()
                ->withErrors($validator);
        }
    
        // Create The category
        $message = new Message();
        $message->name = $request->name;
        $message->email = $request->email;
        $message->subject = $request->subject;
        $message->message = $request->message;
        $message->save();

        Mail::send('software.message.mail', array(
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'subject' => $request->get('subject'),
            'user_query'  => $request->get('message'),
        ), function($message) use ($request){
            $message->from($request->get('email'));
            $message->to('vinunsombath6512@gmail.com', 'Admin')->subject($request->get('subject'));
        });

        Session::flash('message_create','Your message has been sent.');
        return redirect('/contact');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

