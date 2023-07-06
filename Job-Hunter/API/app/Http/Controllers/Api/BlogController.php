<?php

namespace App\Http\Controllers\API;

use Carbon\Carbon;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index()
    {
        
        $blogs = DB::table('blogs')
                ->join('tags','blogs.tag_id','=','tags.id')
                ->select('*')
                ->get();

        if($blogs){
            return response()->json([
                'blogs' => $blogs
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'Message' => 'Not Found',
            ],404);
        }
    }
 
    public function show( $id)
    {
        $blog = Blog::find($id);
        if($blog){
            return response($blog);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Not Found',
            ],404);
        }
    }
 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'article' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required',
            'author' => 'required|max:100',
            'tag_id' => 'required',
        ]);
        if($validator->failed()){
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ],422);
        }else{
            
            $image = $request->file('image'); 
            $imageName = time().'-'.$image->getClientOriginalName();
            $image->move(public_path('images/blogs/'), $imageName);

            $rowCreated = DB::table('blogs')->insertGetId([
                'title' => $request->input('title'),
                'author' => $request->input('author'),
                'article' => $request->input('article'),
                'tag_id' => $request->input('tag_id'),
                'image' => $imageName,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            if($rowCreated){
                return response()->json([
                     'status' => 200,
                     'message' => 'Successfully'
                ],200);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Failed'
               ],404);
            }
        }
        
 
    }
 
    public function update(Request $request,$id)
    {
        $blog = Blog::find($id);

            if($request->file('image') != ""){
                $image = $request->file('image'); 
                $imageName = Carbon::now().'-'.$image->getClientOriginalName();
                $image->move(public_path('images/blogs/'), $imageName);
                $blog->image = $imageName;
                $blog->title = $request->input('title');
                $blog->author = $request->input('author');
                $blog->article = $request->input('article');
                $blog->tag_id = $request->input('tag_id');
                $blog->updated_at = Carbon::now();
                $blog->save();
            }else{
                $blog->title = $request->input('title');
                $blog->author = $request->input('author');
                $blog->article = $request->input('article');
                $blog->tag_id = $request->input('tag_id');
                $blog->updated_at = Carbon::now();
                $blog->save();
            }
            
                return response()->json([
                     'status' => 200,
                     'message' => 'Successfully',
                ],200);
        
    }
 
    public function delete($id)
    {   
        $blog = Blog::find($id);
        $blog->delete();
        if($blog){
            return response()->json([
                'status' => 200,
                'message' => 'Delete Successfully'
           ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Delete Failed'
           ],404);
        }
    }
}
