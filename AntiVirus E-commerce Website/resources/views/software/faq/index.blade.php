@extends('admin.layout')

@section('content')
<section class="content-header">
    <div class="container position-fixed bg-secondary " style="z-index:1; height:70px; margin-top:-1rem; margin-left:-1rem">
        <div class="row justify-content-start p-3 ml-5">
            <div class="col-2">
                <h1>FAQ</h1>
            </div>
            <div class="col-6 d-flex">
                <form action="{{ route('faq.search') }}" method="GET">
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
                        ]) }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<div class="card-body mt-5">
    <div class="d-flex justify-content-between">
        <div class="h3">FAQ</div>
        <button class="btn btn-primary"><a href="{{ url('antivirus/homepage/faq/create') }}">Create New</a></button>
    </div>
    <table class="table table-bordered table-hover mt-3">
        <thead>
            <tr>
                <th>ID</th>
                <th>Question</th>
            </tr>
        </thead>
        <tbody>
            @foreach($faqs as $faq)
            <tr data-widget="expandable-table" aria-expanded="false">
                <td>{{ $faq->id }}</td>
                <td>{{ $faq->question }}</td>
            </tr>
            <tr class="expandable-body">
                <td colspan="6">
                    <p>
                        {{ $faq->answer }}
                    </p>
                    <div class="d-flex">
                        <button class="btn btn-info edit"><a href="{{ url('/antivirus/homepage/faq/'.$faq->id.'/edit') }}">Edit</a></button>
                        {!! Form::open(array('url'=>'/antivirus/homepage/faq/'. $faq->id, 'method'=>'DELETE')) !!}
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
@endsection