<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
use App\Models\Product;
use App\Models\Event;
use App\Models\Faq;
use PhpParser\Node\Expr\FuncCall;

class PageController extends Controller
{
    public function official_page(){
        $categories = Category::all();
        $events = Event::all();
        $products = Product::orderBy('name')->paginate(8);
        return view('official.home')->with('categories', $categories)
             ->with('products', $products)->with('events', $events);
    }
    public function product_page(){
        $categories = Category::all();
        $events = Event::all();
        $products = Product::orderBy('name')->paginate(6);
        return view('official.product')->with('categories', $categories)
             ->with('products', $products)->with('events', $events);
    }
    public function product_detail_page($id){
        $categories = Category::all();
        $events = Event::all();
        $product = Product::find($id);
        return view('official.product_detail')->with('categories', $categories)
        ->with('product', $product)->with('events', $events);
    }
    public function search(Request $request){
        $keyword = !empty($request->input('keyword'))?$request->input('keyword'):"";
        $sortby = !empty($request->input('sort_by'))?$request->input('sort_by'):"";

        $categories = Category::all();
        $events = Event::all();

        if(strpos(strtolower($keyword), "event") !== false){
            $products = DB::table('products')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->join('events', 'products.event_id', '=', 'events.id')
                            ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                            ->whereNotNull('products.event_id')
                            ->orderBy('products.name')
                            ->paginate(6);
        }
        elseif($keyword != ""){
            if ($sortby == 'name') {
                $products = DB::table('products')->orderBy('name')
                    ->join('categories', 'products.category_id', '=', 'categories.id')
                    ->leftjoin('events', 'products.event_id', '=', 'events.id')
                    ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                    ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->paginate(6);
            } elseif ($sortby == 'newest') {
                $products = DB::table('products')->orderBy('created_at', 'Desc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->paginate(6);
            } elseif ($sortby == 'oldest') {
                $products = DB::table('products')->orderBy('created_at', 'Asc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->paginate(6);
            } elseif ($sortby == 'cheapest') {
                $products = DB::table('products')->orderBy('price', 'Asc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->paginate(6);
            } elseif ($sortby == 'expensive') {
                $products = DB::table('products')->orderBy('price', 'Desc')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->paginate(6);
            } else {
                $products = DB::table('products')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->leftjoin('events', 'products.event_id', '=', 'events.id')
                ->select('products.*', 'categories.type as category_type', 'events.name as event_name')
                ->where('products.name', 'like', '%' . $keyword . '%')
                    ->orwhere('products.price', 'like', '%' . $keyword . '%')
                    ->orWhere('events.name', 'like', '%' . $keyword . '%')
                    ->orWhere('categories.type', 'like', '%' . $keyword . '%')
                    ->paginate(6);
            }
        }
        else{
            if($sortby == 'name'){
                $products = DB::table('products')->orderBy('name')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->paginate(6);
            }
            elseif($sortby == 'newest'){
                $products = DB::table('products')->orderBy('created_at','Desc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->paginate(6);
            }
            elseif($sortby == 'oldest'){
                $products = DB::table('products')->orderBy('created_at','Asc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->paginate(6);
            }
            elseif($sortby == 'cheapest'){
                $products = DB::table('products')->orderBy('price','Asc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->paginate(6);
            }
            elseif($sortby == 'expensive'){
                $products = DB::table('products')->orderBy('price','Desc')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->paginate(6);
            }
            else{
                $products = DB::table('products')
                            ->join('categories', 'products.category_id', '=', 'categories.id')
                            ->select('products.*', 'categories.type as category_type')
                            ->paginate(6);
            }
        }

        $products->appends(['keyword' => $keyword,'sort_by' => $sortby]);
        return view('official.search')->with('products', $products)->with('categories', $categories)->with('events', $events)->with('keyword',$keyword)->with('sortby',$sortby);
    }

    public function aboutpage(){
        return view('official.layout.aboutpage');
    }
    public function contactpage(){
        return view('official.layout.contact');
    }
    public function faqpage(){
        $faqs = Faq::all();
        return view('official.layout.faq')->with('faqs',$faqs);
    }
    public function product_payment($id){
        $product = Product::find($id);
        return view('stripe')->with('product',$product);
    }
}
