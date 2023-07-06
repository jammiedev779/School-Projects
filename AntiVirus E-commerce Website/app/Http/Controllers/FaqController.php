<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Faq;
use Session;
use Validator;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $faqs = Faq::all();
        return view('software.faq.index')->with('faqs',$faqs)->with('user',$user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();
    	return view('software.faq.create')->with('user', $user);
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
			'question' => 'required|min:1',
            'answer' => 'required|min:1',
        ]);
          
        if ($validator->fails()) {
            return redirect('/antivirus/homepage/faq/create')
                ->withInput()
                ->withErrors($validator);
        }
    
        // Create The category

        $faq = new Faq();
        $faq->question = $request->Input('question');
        $faq->answer = $request->Input('answer');
        $faq->save();
        Session::flash('faq_create','faq is created');
		return redirect('/antivirus/homepage/faq/create');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
        $faq = Faq::find($id);
    	return view('software.faq.edit')->with('user', $user)->with('faq',$faq);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
			'question' => 'required|min:1',
            'answer' => 'required|min:1',
		]);

		if ($validator->fails()) {
			return redirect('/antivirus/homepage/faq/'.$id.'/edit')
				->withInput()
				->withErrors($validator);
		}
        $product = Product::find($id);
		// Create The Post
		$faq = new Faq();
        $faq->question = $request->Input('question');
        $faq->answer = $request->Input('answer');
        $faq->save();
		Session::flash('faq_update','faq is updated');
		return redirect('/antivirus/homepage/faq/'.$faq->id.'/edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $faq = Faq::find($id);
    	$faq->delete();
    	Session::flash('faq_delete','Data is deleted.');
    	return redirect('/antivirus/homepage/faq');
    }
}
