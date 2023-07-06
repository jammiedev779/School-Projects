<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Company;
use App\Models\Category;
use App\Models\JobCategory;
use App\Models\Contact;
use App\Models\Tag;
use App\Models\Blog;

class AppController extends Controller
{
    public function app(){
        $posts = DB::table('posts')
                    ->join('companies', 'posts.company_id', '=' , 'companies.id')
                    ->join('categories', 'posts.category_id' , '=' , 'categories.id')
                    ->join('job_categories', 'posts.job_category_id' , '=' , 'job_categories.id')
                    ->select('posts.*', 'companies.name', 'companies.location', 'companies.image', 'companies.website', 'categories.name as category_name', 'job_categories.job_name as job_category_name')
                    ->orderBy('posts.created_at')
                    ->get();
        return response()->json([
            'posts' => $posts
        ]);
    }

    public function adminData(){
        $users = User::orderBy('created_at')->get();;
        $companis = Company::orderBy('created_at')->get();;
        $categories = Category::all();
        $job_categories = JobCategory::all();
        $contacts = Contact::all();
        $tags = Tag::all();
        $blogs = Blog::with('tag')->get();

        return response()->json([
            'users' => $users,
            'companies' => $companis,
            'categories' => $categories,
            'job_categories' => $job_categories,
            'contacts' => $contacts,
            'tags' => $tags,
            'blogs' => $blogs,
        ]);
    }
}
