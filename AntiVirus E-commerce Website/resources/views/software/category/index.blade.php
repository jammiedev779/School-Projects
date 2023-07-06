@extends('admin.layout')

@section('content')
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
@endsection