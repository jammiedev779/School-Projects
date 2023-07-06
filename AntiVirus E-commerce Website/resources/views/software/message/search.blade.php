@extends('admin.layout')

@section('content')
<section class="content-header">
    <div class="container position-fixed bg-secondary " style="z-index:1; height:70px; margin-top:-1rem; margin-left:-1rem">
        <div class="row justify-content-start p-3 ml-5">
            <div class="col-2">
                <h1>Message</h1>
            </div>
            <div class="col-6 d-flex">
                <form action="{{ route('message.search') }}" method="GET">
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
        <div class="h3">Message</div>
    </div>
    <table class="table table-bordered table-hover mt-3">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            @forelse($messages as $message)
            <tr data-widget="expandable-table" aria-expanded="false">
                <td>{{ $message->id }}</td>
                <td>{{ $message->name }}</td>
                <td>{{ $message->email }}</td>
                <td>{{ $message->created_at }}</td>
            </tr>
            <tr class="expandable-body">
                <td colspan="6">
                    <p>
                        <span class="text-bold">Subject: </span>
                        {{ $message->subject }}
                    </p>
                    <p>
                        <span class="text-bold">Message: </span>
                        {{ $message->message }}
                    </p>
                </td>
            </tr>
            @empty
            <div class="row">No results found.</div>
            @endforelse
        </tbody>
    </table>
</div>
@endsection