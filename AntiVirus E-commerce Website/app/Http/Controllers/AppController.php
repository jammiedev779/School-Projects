<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\Event;
use App\Models\Faq;
use App\Models\Message;
use Validator;
use Session;

class AppController extends Controller
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
        return view('software.list')->with('categories', $categories)
             ->with('products', $products)->with('events', $events)->with('user', $user);
    }

    public function search_product(Request $request){
        $user = Auth::user();
        $keyword = !empty($request->input('keyword'))?$request->input('keyword'):"";
        $sortby = !empty($request->input('sort_by'))?$request->input('sort_by'):"";

        if(strpos(strtolower($keyword), "event") != false){
            $products = DB::table('products')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->join('events', 'products.event_id', '=', 'events.id')
                            ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                            ->whereNotNull('products.event_id')
                            ->orderBy('products.name')
                            ->get();
        } elseif ($keyword != "") {
            if ($sortby == 'name') {
                $products = DB::table('products')->orderBy('name')
                    ->join('categories', 'products.category_id', '=', 'categories.id')
                    ->leftjoin('events', 'products.event_id', '=', 'events.id')
                    ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                    ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->get();
            } elseif ($sortby == 'newest') {
                $products = DB::table('products')->orderBy('created_at', 'Desc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->get();
            } elseif ($sortby == 'oldest') {
                $products = DB::table('products')->orderBy('created_at', 'Asc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->get();
            } elseif ($sortby == 'cheapest') {
                $products = DB::table('products')->orderBy('price', 'Asc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->get();
            } elseif ($sortby == 'expensive') {
                $products = DB::table('products')->orderBy('price', 'Desc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->get();
            } else {
                $products = DB::table('products')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->get();
            }
        }
        else{
            if($sortby == 'name'){
                $products = DB::table('products')->orderBy('name')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->get();
            }
            elseif($sortby == 'newest'){
                $products = DB::table('products')->orderBy('created_at','Desc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->get();
            }
            elseif($sortby == 'oldest'){
                $products = DB::table('products')->orderBy('created_at','Asc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->get();
            }
            elseif($sortby == 'cheapest'){
                $products = DB::table('products')->orderBy('price','Asc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->get();
            }
            elseif($sortby == 'expensive'){
                $products = DB::table('products')->orderBy('price','Desc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->get();
            }
            else{
                $products = DB::table('products')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->get();
            }
        }

        $categories = Category::where('type','like','%'.$keyword.'%')->get();
        $events = Event::where('name','like','%'.$keyword.'%')->get();
        if($sortby == 'name'){
            $categories = Category::where('type','like','%'.$keyword.'%')->orderBy('type')->get();
            $events = Event::where('name','like','%'.$keyword.'%')->orderBy('name')->get();
            if($categories->count() == 0) $categories = Category::orderBy('type')->get();
            if($events->count() == 0) $events = Event::orderBy('name')->get(); 
        }
        elseif($sortby == 'newest'){
            $categories = Category::where('type','like','%'.$keyword.'%')->orderBy('created_at','Desc')->get();
            $events = Event::where('name','like','%'.$keyword.'%')->orderBy('created_at','Desc')->get();
            if($categories->count() == 0) $categories = Category::orderBy('created_at','Desc')->get();
            if($events->count() == 0) $events = Event::orderBy('created_at','Desc')->get(); 
        }
        elseif($sortby == 'oldest'){
            $categories = Category::where('type','like','%'.$keyword.'%')->orderBy('created_at','Asc')->get();
            $events = Event::where('name','like','%'.$keyword.'%')->orderBy('created_at','Asc')->get();
            if($categories->count() == 0) $categories = Category::orderBy('created_at','Asc')->get();
            if($events->count() == 0) $events = Event::orderBy('created_at','Asc')->get(); 
        }
        else{
            if($categories->count() == 0) $categories = Category::all();
            if($events->count() == 0) $events = Event::all(); 
        }
        
        return view('software.product.search')->with('user',$user)->with('products', $products)->with('categories', $categories)->with('events', $events)->with('keyword',$keyword);
    }

    public function search_message(Request $request){
        $user = Auth::user();
        $keyword = !empty($request->input('keyword'))?$request->input('keyword'):"";
        $sortby = !empty($request->input('sort_by'))?$request->input('sort_by'):"";

        if ($keyword != "") {
            if ($sortby == 'name') {
                $messages = Message::where('name','like','%'.$keyword.'%')
                                    ->orWhere('email','like','%'.$keyword.'%')
                                    ->orderBy('name')->get();
            } elseif ($sortby == 'newest') {
                $messages = Message::where('name','like','%'.$keyword.'%')
                                    ->orWhere('email','like','%'.$keyword.'%')
                                    ->orderBy('created_at','Desc')->get();
            } elseif ($sortby == 'oldest') {
                $messages = Message::where('name','like','%'.$keyword.'%')
                                    ->orWhere('email','like','%'.$keyword.'%')
                                    ->orderBy('created_at','Asc')->get();
            } else {
                $messages = Message::where('name','like','%'.$keyword.'%')
                                    ->orWhere('email','like','%'.$keyword.'%')
                                    ->get();
            }
        }
        else{
            if ($sortby == 'name') {
                $messages = Message::orderBy('name')->get();
            } elseif ($sortby == 'newest') {
                $messages = Message::orderBy('created_at','Desc')->get();
            } elseif ($sortby == 'oldest') {
                $messages = Message::orderBy('created_at','Asc')->get();
            } else {
                $messages = Message::all();
            }
        }
        return view('software.message.search')->with('user',$user)->with('messages', $messages);
    }

    public function search_faq(Request $request){
        $user = Auth::user();
        $keyword = !empty($request->input('keyword'))?$request->input('keyword'):"";
        $sortby = !empty($request->input('sort_by'))?$request->input('sort_by'):"";

        if ($keyword != "") {
            if ($sortby == 'name') {
                $faqs = Faq::where('question','like','%'.$keyword.'%')
                                    ->orWhere('answer','like','%'.$keyword.'%')
                                    ->orderBy('question')->get();
            } elseif ($sortby == 'newest') {
                $faqs = Faq::where('question','like','%'.$keyword.'%')
                                    ->orWhere('answer','like','%'.$keyword.'%')
                                    ->orderBy('created_at','Desc')->get();
            } elseif ($sortby == 'oldest') {
                $faqs = Faq::where('question','like','%'.$keyword.'%')
                                    ->orWhere('answer','like','%'.$keyword.'%')
                                    ->orderBy('created_at','Asc')->get();
            } else {
                $faqs = Faq::where('question','like','%'.$keyword.'%')
                                    ->orWhere('answer','like','%'.$keyword.'%')
                                    ->get();
            }
        }
        else{
            if ($sortby == 'name') {
                $faqs = Faq::orderBy('question')->get();
            } elseif ($sortby == 'newest') {
                $faqs = Faq::orderBy('created_at','Desc')->get();
            } elseif ($sortby == 'oldest') {
                $faqs = Faq::orderBy('created_at','Asc')->get();
            } else {
                $faqs = Faq::all();
            }
        }
        return view('software.faq.search')->with('user',$user)->with('faqs', $faqs);
    }
}
