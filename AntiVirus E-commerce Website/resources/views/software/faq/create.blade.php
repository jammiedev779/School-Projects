@extends('admin.layout')

@section('content')
<div class="container-fluid">
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2 justify-content-between">
            <div class="col-11">
                <h1>Create new FAQ</h1>
            </div>
        </div>
    </div>
</section>    

    @if(Session::has('faq_create'))
    <div class="alert alert-primary alert-dismissible">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Primary!</strong> {!! session('faq_create') !!}
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
            {!! Form::open(array('url'=>'antivirus/homepage/faq', 'files'=>'true')) !!}
            {!! Form::label('question', 'Question: ') !!}
            {!! Form::text('question', '',array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('answer', 'Answer: ') !!}
            {!! Form::textarea('answer', '',array('class'=>'form-control')) !!}
            <br>
            {!! Form::submit('Create',array('class'=> 'btn btn-primary')) !!}
            <div class="btn btn-secondary"><a class="text-decoration-none text-white" href="{{url('/antivirus/homepage/faq')}}">Back</a></div>
            {!! Form::close() !!}
        </div>
    </div>
</div>
@endsection