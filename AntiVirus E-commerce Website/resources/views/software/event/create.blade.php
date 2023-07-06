@extends('admin.layout')

@section('content')
<div class="container-fluid">
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2 justify-content-between">
            <div class="col-11">
                <h1>Create new Event</h1>
            </div>
        </div>
    </div>
</section>    

    @if(Session::has('event_create'))
    <div class="alert alert-primary alert-dismissible">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Primary!</strong> {!! session('event_create') !!}
    </div>
    @endif
    @if (count($errors) > 0)
    <!-- Form Error List -->
    <div class="alert alert-danger">
        <strong>Something is Wrong</strong>
        <br><br>
        <ul>
            @foreach ($errors->all() as $error)
            <li>{!! $error !!}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <div class="card mb-4">
        <div class="card-body">
            {!! Form::open(['url' => 'antivirus/homepage/event']) !!}
            {!! Form::label('name', 'Name: ') !!}
            {!! Form::text('name', '',array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('start_date', 'Start Date: ') !!}
            {!! Form::date('start_date', '',array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('end_date', 'End Date: ') !!}
            {!! Form::date('end_date', '',array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('discount', 'Discount: ') !!}
            {!! Form::number('discount', '',array('class'=>'form-control')) !!}
            <br>
            {!! Form::submit('Create',array('class'=> 'btn btn-primary')) !!}
            <div class="btn btn-secondary"><a class="text-decoration-none text-white" href="{{url('/antivirus/homepage/edit')}}">Back</a></div>
            {!! Form::close() !!}
        </div>
    </div>
</div>
@endsection