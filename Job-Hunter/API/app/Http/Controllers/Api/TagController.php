<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index()
    {   
        $tags = Tag::all();
        if($tags){
            return response($tags);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No tags'
            ],404);
        }
    }
 
    public function show(Tag $tag)
    {
        return $tag;
    }
 
    public function store(Request $request)
    {
        $tag = Tag::create($request->all());
 
        return response()->json($tag, 201);
    }
 
    public function update(Request $request, Tag $tag)
    {
        $tag->update($request->all());
 
        return response()->json($tag, 200);
    }
 
    public function delete(Tag $tag)
    {
        $tag->delete();
        return response()->json(null, 204);
    }
}
