<?php

namespace App\Http\Controllers\API;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }
 
    public function show( $id)
    {
        $posts = DB::table('posts')
                ->join('companies', 'posts.company_id', '=', 'companies.id')
                ->join('categories', 'posts.category_id', '=', 'categories.id')
                ->join('job_categories', 'posts.job_category_id', '=', 'job_categories.id')
                ->select('posts.*', 'companies.name', 'companies.location', 'companies.image', 'companies.website', 'categories.name as category_name', 'job_categories.job_name as job_category_name')
                ->where('posts.company_id', '=', $id)
                ->orderBy('posts.id')
                ->get();
        
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'category_id' => 'required',
            'job_category_id' => 'required',
            'company_id' => 'required',
            'post_name' => 'required',
            'salary' => 'required',
            'job_description' => 'required',
            'role' => 'required',
            'requirement' => 'required',
            'benefit' => 'required',
            'hour' => 'required',
            'experience' => 'required',
            'expire_at' => 'date'
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'erorrs' => $validator->messages()
            ],422);
        }else{

            // insert data into table
            DB::table('posts')->insert([
                'category_id' => $request->input('category_id'),
                'job_category_id' => $request->input('job_category_id'),
                'company_id' => $request->input('company_id'),
                'post_name' => $request->input('post_name'),
                'salary' => $request->input('salary'),
                'job_description' => $request->input('job_description'),
                'role' => $request->input('role'),
                'requirement' => $request->input('requirement'),
                'benefit' => $request->input('benefit'),
                'hour' => $request->input('hour'),
                'experience' => $request->input('experience'),
                'expire_at' => $request->input('expire_at'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),    
            ]);
        }
        return response()->json([
                    'message' => 'Post successfully'
                ],201);
    }
 
    public function update(Request $request, $id)
    {      
            $rowUpdated = DB::table('posts')->where('id',$id)->update([
                'category_id' => $request->input('category_id'),
                'job_category_id' => $request->input('job_category_id'),
                'post_name' => $request->input('post_name'),
                'salary' => $request->input('salary'),
                'job_description' => $request->input('job_description'),
                'role' => $request->input('role'),
                'requirement' => $request->input('requirement'),
                'benefit' => $request->input('benefit'),
                'hour' => $request->input('hour'),
                'experience' => $request->input('experience'),
                'expire_at' => $request->input('expire_at'),
                'updated_at' => Carbon::now(),      
                    ]);

            if($rowUpdated > 0){
                return response()->json([
                    'status' => 200,
                    'message' => 'Updated successfully'
                ],200);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Updated failed'
                ],404);
            }
    }
 
    public function delete($id)
    {
        $post = Post::find($id);
        if($post){
            $post->delete();
            return response()->json([
                'status' => '200',
                'message' => 'Delete Successfully'
            ],200);
        }else{
            return response()->json([
                'status' => '404',
                'message' => 'Delete fail'
            ]);
        }
    }

    public function getPosted($id){
        $posted = DB::table('posts')
                ->join('companies', 'posts.company_id', '=', 'companies.id')
                ->join('categories', 'posts.category_id', '=', 'categories.id')
                ->join('job_categories', 'posts.job_category_id', '=', 'job_categories.id')
                ->select('posts.*', 'companies.name', 'companies.location', 'companies.image', 'companies.website', 'categories.name as category_name', 'job_categories.job_name as job_category_name')
                ->where('posts.company_id', '=', $id)
                ->orderBy('posts.id')
                ->get();

        return response()->json([
            'posted' => $posted
        ]);
    }
}
