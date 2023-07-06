<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;

use function PHPSTORM_META\map;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::all();
        if($experiences){
            return response()->json([
                'status' => 200,
                'experiences' => $experiences 
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'experiences' => 'Not Found'
            ],404);
        }
    }
 
    public function show($id)
    {
        $experience = Experience::find($id);
        if($experience){
            return response()->json([
                'status' => 200,
                'experiences' => $experience 
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'experiences' => 'Not Found'
            ],404);
        }
    }
 
    public function store(Request $request)
    {
        $experience = Experience::create($request->all());
        if($experience){
            return response()->json([
                'status' => 200,
                'message' => 'Create successfully'
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Create failed'
            ],404);
        }

    }
 
    public function update(Request $request, Experience $experience)
    {
        $experience->update($request->all());
 
        return response()->json($experience, 200);
    }
 
    public function delete(Experience $experience)
    {
        $experience->delete();
        return response()->json(null, 204);
    }
}
