<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\Category;
use Validator;
use Session;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $categories = Category::all();
        return view('software.category.index')->with('categories',$categories)->with('user',$user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();
    	return view('software.category.create')->with('user', $user);
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
            'type' => 'required|max:100|min:1',
        ]);
          
        if ($validator->fails()) {
            return redirect('/antivirus/homepage/category/create')
                ->withInput()
                ->withErrors($validator);
        }
    
        // Create The category
        $category = new Category();
        $category->type = $request->type;
        $category->save();
        Session::flash('category_create','New category is created.');
        return redirect('/antivirus/homepage/category/create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        $category = Category::findOrFail($id);
        return view('software.category.edit')->with('category', $category)->with('user', $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
			'type' => 'required|max:100|min:1',
		]);

		if ($validator->fails()) {
			return redirect('/antivirus/homepage/category/'.$id.'/edit')
				->withInput()
				->withErrors($validator);
		}
        $category = Category::find($id);
		// Create The Post
		
		$category->type = $request->Input('type');
		$category->save();

		Session::flash('category_update','Category is updated');
		return redirect('/antivirus/homepage/category/'.$category->id.'/edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
    	$category->delete();
    	Session::flash('category_delete','Category is deleted.');
    	return redirect('/antivirus/homepage/edit');
    }
}
