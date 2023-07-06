@extends('admin.layout')

@section('content')
<div class="container-fluid">
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2 justify-content-between">
            <div class="col-11">
                <h1>Edit Product</h1>
            </div>
        </div>
    </div>
</section>    

    @if(Session::has('product_update'))
    <div class="alert alert-primary alert-dismissible">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Primary!</strong> {!! session('product_update') !!}
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
        {!! Form::model($product , array('route' => array('product.update', $product->id), 'method'=>'PUT','files'=>'true')) !!}
            {!! Form::label('name', 'Name: ') !!}
            {!! Form::text('name', null,array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('category_id', 'Category:') !!}
            {!! Form::select('category_id',$categories,null ,array('class'=>'form-control', 'style' => 'width:20%;')) !!}
            <br><br>
            {!! Form::label('image', 'Image:') !!}
            {!! Form::file('image', array('class'=>'form-control', 'style' => 'width:25%;')) !!}
            <br>
            {!! Form::label('description', 'Description: ') !!}
            {!! Form::textarea('description',null,array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('price', 'Price: ') !!}
            {!! Form::text('price',null,array('class'=>'form-control')) !!}
            <br>
            {!! Form::label('link', 'Link: ') !!}
            {!! Form::text('link',null,array('class'=>'form-control')) !!}
            <br>
            <hr>
            <div class="h4">Extra</div>
            {!! Form::label('event_name', 'Event:') !!}
            {{ Form::select('event_name',$eventsArr,null, ['class' => 'form-control', 'style' => 'width: 20%;', 'id' => 'event-select']) }}
            <br>
            {!! Form::submit('update',array('class'=> 'btn btn-primary')) !!}
            <div class="btn btn-secondary"><a class="text-decoration-none text-white" href="{{url('/antivirus/homepage/edit')}}">Back</a></div>
            {!! Form::close() !!}
        </div>
    </div>
</div>
@endsection