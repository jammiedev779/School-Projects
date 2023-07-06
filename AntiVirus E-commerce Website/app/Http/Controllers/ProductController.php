<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use App\Models\Product;
use App\Models\Category;
use App\Models\Event;
use File;
use Validator;
use Session;
use Illuminate\Http\Request;

class ProductController extends Controller
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
        $events = Event::all();
        $products = Product::all();
        return view('software.product.index')->with('categories', $categories)
             ->with('products', $products)->with('events', $events)->with('user',$user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();
        $categories = array();
        foreach (Category::all() as $category) {
            $categories[$category->id] = $category->type;
        }
        $eventsArr = array();
        $eventsArr[0] = 'None';
        foreach (Event::all() as $event) {
            $eventsArr[$event->id] = $event->name;
        }
        $events = Event::all();
    	return view('software.product.create')->with('user', $user)->with('categories', $categories)->with('events', $events)->with('eventsArr', $eventsArr);
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
            'name' => 'required|max:100|min:1',
            'category_id' => 'required|integer',
			'image' => 'required|mimes:jpg,jpeg,png,gif',
			'description' => 'required|min:1',
			'price' => 'max:15',
            'link' => 'required|min:1',
        ]);
          
        if ($validator->fails()) {
            return redirect('/antivirus/homepage/product/create')
                ->withInput()
                ->withErrors($validator);
        }
    
        // Create The category
        $image = $request->file('image');
        $upload = 'img/product/';
        $filename = time().$image->getClientOriginalName();
        move_uploaded_file($image->getPathName(), $upload. $filename);

        $product = new Product();
        $product->name = $request->Input('name');
        $product->category_id = $request->Input('category_id');
        $product->description = $request->Input('description');
        $product->price = $request->Input('price');

        $event_name = $request->input('event_name');
        if($event_name != 0){
            $events = Event::all();
            foreach($events as $event){
                if($event->id == $event_name) {
                    $product->event_id = $event->id;
                    $product->event_price = (100 - $event->discount) * $product->price / 100;
                    break;
                }
            }
        }
        $product->image = $filename;
        $product->link = $request->Input('link');
        $product->save();
        Session::flash('product_create','Product is created');
		return redirect('/antivirus/homepage/product/create');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $user = Auth::user();
        // $product = Product::find($id);
        // return view('software.product.show')->with('product',$product)->with('user',$user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        $categories = array();
        foreach (Category::all() as $category) {
            $categories[$category->id] = $category->type;
        }
        $eventsArr = array();
        $eventsArr[0] = 'None';
        foreach (Event::all() as $event) {
            $eventsArr[$event->id] = $event->name;
        }
        $product = Product::findOrFail($id);
        return view('software.product.edit')->with('product', $product)->with('categories',$categories)
        ->with('eventsArr',$eventsArr)->with('user', $user);
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
			'name' => 'required|max:100|min:1',
            'category_id' => 'required|integer',
			'image' => 'mimes:jpg,jpeg,png,gif',
			'description' => 'required|min:1',
			'price' => 'max:15',
            'link' => 'required|min:1',
		]);

		if ($validator->fails()) {
			return redirect('/antivirus/homepage/product/'.$id.'/edit')
				->withInput()
				->withErrors($validator);
		}
        $product = Product::find($id);
		// Create The Post
		if($request->file('image') != ""){
            $image = $request->file('image');
            $upload = 'img/product/';
            $filename = time().$image->getClientOriginalName();
            move_uploaded_file($image->getPathName(), $upload . $filename);
		}

		$product->name = $request->Input('name');
        $product->category_id = $request->Input('category_id');
        $product->description = $request->Input('description');
        $product->price = $request->Input('price');
        
        $event_name = $request->Input('event_name');
        if($event_name != 0){
            $events = Event::all();
            foreach($events as $event){
                if($event->id == $event_name) {
                    $product->event_id = $event->id;
                    $product->event_price = (100 - $event->discount) * $product->price / 100;
                    break;
                }
            }
        }
        else{
            $product->event_id = null;
            $product->event_price = null;
        }
        

        if(isset($filename)){
		    $product->image = $filename;
		}
        $product->link = $request->Input('link');
		$product->save();

		Session::flash('product_update','Product is updated');
		return redirect('/antivirus/homepage/product/'.$product->id.'/edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
    	$image_path = 'img/product/'.$product->image;
    	File::delete($image_path);
    	$product->delete();
    	Session::flash('product_delete','Data is deleted.');
    	return redirect('/antivirus/homepage');
    }
}
