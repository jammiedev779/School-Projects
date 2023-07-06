<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Apply;
use Illuminate\Http\Request;

class ApplyController extends Controller
{
    public function index()
    {
        return Apply::all();
    }
 
    public function show(Apply $apply)
    {
        return $apply;
    }
 
    public function store(Request $request)
    {
        $apply = Apply::create($request->all());
        return response()->json($apply, 201);
    }
 
    public function update(Request $request, Apply $apply)
    {
        $apply->update($request->all());
 
        return response()->json($apply, 200);
    }
 
    public function delete($user_id, $post_id)
    {
        $apply = Apply::where('user_id', '=', $user_id)->where('post_id', '=' , $post_id)->first();
        $apply->delete();
        return response()->json(null, 204);
    }

    public function getApplied($id){
        return Apply::where('user_id','=',$id)->get();
    }

    public function find($user_id, $post_id){
        $apply = Apply::where('user_id', '=', $user_id)->Where('post_id', '=', $post_id)->get();
        if($apply){
            return response()->json([
                'result' => 'found'
            ]);
        }else{
            return response()->json([
                'result' => 'not found'
            ]);
        }
    }
}
