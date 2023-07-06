@extends('admin.layout')

@section('content')

<!-- <section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2 justify-content-between">
            <div class="col-11">
                <h1>Softwares</h1>
            </div>
            <div class="col">
                <a href="/antivirus/homepage" class="btn btn-secondary text-light">Back</a>
            </div>
        </div>
    </div>
</section>
<div class="container container-sm">
    <div class="card-body table-responsive" style="height: 300px;">
        <div class="d-flex justify-content-between">
            <div class="h3">Category</div>
            <button class="btn btn-primary"><a href="{{ url('antivirus/homepage/category/create') }}">Create New</a></button>
        </div>
        <table class="table table-bordered table-head-fixed text-nowrap mt-3">
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
    <div class="card-body table-responsive" style="height: 300px;">
        <div class="d-flex justify-content-between">
            <div class="h3">Event</div>
            <button class="btn btn-primary"><a href="{{ url('antivirus/homepage/event/create') }}">Create New</a></button>
        </div>
        <table class="table table-bordered table-head-fixed text-nowrap mt-3">
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
    <div class="card-body">
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
</div> -->
<div class="content-wrapper mt-5 p-5">
            <div class="h3 text-center">Tables</div>
            <div class="container-sm" style="width:20rem; height:20rem">
                    <button type="button" class="btn btn-block btn-outline-dark btn-lg"><a href="{{ url('/antivirus/homepage/category') }}">Categories</a></button>
                    <button type="button" class="btn btn-block btn-outline-dark btn-lg"><a href="{{ url('/antivirus/homepage/product') }}">Products</a></button>
                    <button type="button" class="btn btn-block btn-outline-dark btn-lg"><a href="{{ url('/antivirus/homepage/event') }}">Events</a></button>
                    <button type="button" class="btn btn-block btn-outline-dark btn-lg"><a href="{{ url('/antivirus/homepage/faq') }}">FAQ</a></button>
                    <button type="button" class="btn btn-block btn-outline-dark btn-lg"><a href="{{ url('/antivirus/homepage/contact') }}">Messages</a></button>
            </div>

        </div>
@endsection