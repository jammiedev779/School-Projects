<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\Event;
use Validator;
use Session;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $events = Event::all();
        return view('software.event.index')->with('events',$events)->with('user', $user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();
    	return view('software.event.create')->with('user', $user);
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
			'start_date' => 'required|max:255|min:1',
            'end_date' => 'required|max:255|min:1',
            'discount' => 'required|max:15|min:1',
        ]);
          
        if ($validator->fails()) {
            return redirect('/antivirus/homepage/event/create')
                ->withInput()
                ->withErrors($validator);
        }
    
        // Create The event

        $event = new Event();
        $event->name = $request->Input('name');
        $event->start_date = $request->Input('start_date');
        $event->end_date = $request->Input('end_date');
        $event->discount = $request->Input('discount');
        $event->save();
        Session::flash('event_create','Event is Created');
		return redirect('/antivirus/homepage/event/create');
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
        $event = Event::findOrFail($id);
        return view('software.event.edit')->with('event', $event)->with('user', $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
			'name' => 'required|max:100|min:1',
			'start_date' => 'required|max:255|min:1',
            'end_date' => 'required|max:255|min:1',
            'discount' => 'required|max:15|min:1',
		]);

		if ($validator->fails()) {
			return redirect('/antivirus/homepage/event/'.$id.'/edit')
				->withInput()
				->withErrors($validator);
		}
        $event = Event::find($id);
		// Create The Post

		$event->name = $request->Input('name');
        $event->start_date = $request->Input('start_date');
        $event->end_date = $request->Input('end_date');
        $event->discount = $request->Input('discount');
		$event->save();

		Session::flash('event_update','event is updated');
		return redirect('/antivirus/homepage/event/'.$event->id.'/edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = event::find($id);
    	$event->delete();
    	Session::flash('event_delete','event is deleted.');
    	return redirect('/antivirus/homepage/edit');
    }
}
