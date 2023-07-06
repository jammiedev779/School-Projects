@extends('admin.layout')

@section('content')
<section class="content-header">
    <div class="container position-fixed bg-secondary" style="z-index:1; height:70px; margin-top:-1rem; margin-left:-1rem">
        <div class="row justify-content-around p-3">
            <div class="col-2">
                <h1>Softwares</h1>
            </div>
            <div class="col-4">
                <form action="{{ route('product.search') }}" method="GET">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button class="btn input-group-text form-icon" type="submit"><i class="fas fa-search"></i></button>
                        </div>
                        {{ Form::text('keyword',$keyword ?? '', array('placeholder'=>'Search', 'class'=>'form-control')) }}
                        {{ Form::select('sort_by', [
                            'default' => 'Sort By',
                            'name' => 'Name',
                            'newest' => 'Newest',
                            'oldest' => 'Oldest',
                            'cheapest' => 'Cheapest',
                            'expensive' => 'Most Expensive'
                        ]) }}
                    </div>
                </form>
            </div>
        <div class="dropdown col-2">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tables
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#category">Categories</a>
                <a class="dropdown-item" href="#event">Events</a>
                <a class="dropdown-item" href="#product">Products</a>
            </div>
        </div>
    </div>
    </div>
</section>
<div class="container container-sm mt-5">
    <div class="card-body" id="category">
        <div class="d-flex justify-content-between">
            <div class="h3">Category</div>
            <button class="btn btn-primary"><a href="{{ url('antivirus/homepage/category/create') }}">Create New</a></button>
        </div>
        <table class="table table-bordered text-nowrap mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                @foreach($categories as $category)
                <tr>
                    <td>{{$category->id}}</td>
                    <td>{{$category->type}}</td>
                    <td> <a href="{{ url('/antivirus/homepage/category/'.$category->id.'/edit') }}" class="btn btn-info text-light">Edit</a></td>
                    <td>
                        {!! Form::open(array('url'=>'/antivirus/homepage/category/'. $category->id, 'method'=>'DELETE')) !!}
                        {!! csrf_field() !!}
                        {!! method_field('DELETE') !!}
                        <button class="btn btn-danger delete">Delete</button>
                        {!! Form::close() !!}
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="card-body" id="event">
        <div class="d-flex justify-content-between">
            <div class="h3">Event</div>
            <button class="btn btn-primary"><a href="{{ url('antivirus/homepage/event/create') }}">Create New</a></button>
        </div>
        <table class="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Discount</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                @foreach($events as $event)
                <tr>
                    <td>{{$event->id}}</td>
                    <td>{{$event->name}}</td>
                    <td>{{$event->start_date}}</td>
                    <td>{{$event->end_date}}</td>
                    <td>{{$event->discount}}</td>
                    <td> <a href="{{ url('/antivirus/homepage/event/'.$event->id.'/edit') }}" class="btn btn-info text-light">Edit</a></td>
                    <td>
                        {!! Form::open(array('url'=>'/antivirus/homepage/event/'. $event->id, 'method'=>'DELETE')) !!}
                        {!! csrf_field() !!}
                        {!! method_field('DELETE') !!}
                        <button class="btn btn-danger delete">Delete</button>
                        {!! Form::close() !!}
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="card-body" id="product">
        <div class="d-flex justify-content-between">
            <div class="h3">Product</div>
            <button class="btn btn-primary"><a href="{{ url('antivirus/homepage/product/create') }}">Create New</a></button>
        </div>
        <table class="table table-bordered table-hover mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                <tr data-widget="expandable-table" aria-expanded="false">
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->category->type }}</td>
                    <td>{{Html::image('/img/product/'.$product->image, $product->name, array('width'=>'60'))}}</td>
                    <td>{{ $product->price }}</td>
                    <td>{{ $product->event_id }}</td>
                </tr>
                <tr class="expandable-body">
                    <td colspan="6">
                        <p>
                            {{ $product->description }}
                        </p>
                        <div class="d-flex">
                            <button class="btn btn-info edit"><a href="{{ url('/antivirus/homepage/product/'.$product->id.'/edit') }}">Edit</a></button>
                            {!! Form::open(array('url'=>'/antivirus/homepage/product/'. $product->id, 'method'=>'DELETE')) !!}
                            {!! csrf_field() !!}
                            {!! method_field('DELETE') !!}
                            <button class="btn btn-danger delete">Delete</button>
                            {!! Form::close() !!}
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>

@endsection