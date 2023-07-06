<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        return Contact::all();
    }
 
    public function show(Contact $contact)
    {
        return $contact;
    }
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|max:50',
            'email' => 'required|email',
            'phone' => 'required',
            'subject' => 'required',
            'message' => 'required'
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->message()
            ],422);
        }

        $contact = Contact::create($request->all());
        return response()->json($contact, 201);
    }
 
    public function update(Request $request, Contact $contact)
    {
        $contact->update($request->all());
 
        return response()->json($contact, 200);
    }
 
    public function delete(Contact $contact)
    {
        $contact->delete();
        return response()->json(null, 204);
    }
}
