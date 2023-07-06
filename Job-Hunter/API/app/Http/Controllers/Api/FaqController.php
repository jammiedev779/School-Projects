<?php

namespace App\Http\Controllers\API;

use App\Models\FAQ;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class FaqController extends Controller
{
    public function index(){
        $questions = FAQ::all();
        if($questions){
            return response()->json([
                'status' => 200,
                'questions' => $questions
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No questions'            
            ],404);
        }
    }

    public function ask(Request $request){
        $validator = Validator::make($request->all(),[
            'question' => 'required|min:10',
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->message()
            ],422);
        }else{
            $questions = FAQ::create($request->all());
            if($questions){
                return response()->json([
                    'status' => 200,
                    'message' => 'Successfully'
                ],200);
            }else{
                return response()->json([
                    'status' => 422,
                    'message' => 'Failed'
                ],422);
            }
        }
    }


    public function answer(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'answer' => 'required|min:10',
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->message()
            ],422);
        }else{
            $questions = FAQ::find($id);
            $questions->update($request->all());
            if($questions){
                return response()->json([
                    'status' => 200,
                    'message' => 'Successfully'
                ],200);
            }else{
                return response()->json([
                    'status' => 422,
                    'message' => 'Failed'
                ],422);
            }
        }

    }
}
