<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;

class SearchController extends Controller
{
    public function searchPost(Request $request){


        $posts = DB::table('posts')
                    ->join('companies', 'posts.company_id', '=' , 'companies.id')
                    ->join('categories', 'posts.category_id' , '=' , 'categories.id')
                    ->join('job_categories', 'posts.job_category_id' , '=' , 'job_categories.id')
                    ->select('posts.*', 'companies.name', 'companies.location', 'companies.image', 'companies.website', 'categories.name as category_name', 'job_categories.job_name as job_category_name')
                    ->orderBy('posts.id')
                    ->get();
        
        if($posts){
            return response($posts);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Not Found',
            ],404);
        }
        
    }

    public function getHomeData(){
        $numUsers = User::all()->count();
        $numPosts = Post::all()->count();
        $numCompanies = Company::all()->count();
        return response()->json([
            'numUsers' => $numUsers,
            'numPosts' => $numPosts,
            'numCompanies' => $numCompanies
        ]);
    }

}
