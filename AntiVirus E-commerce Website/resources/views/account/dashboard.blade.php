@extends('admin.layout')

@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Profile</h1>
            </div>
        </div>
    </div>
</section>

<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">

                <div class="card">
                    <div class="container">
                        @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>
                        @endif
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src="{{ asset('img/admin/'.$user->profile) }}" class="img-circle elevation-2" alt="User Image">
                            </div>
                            <div class="info">
                                <a href="/dashboard" class="d-block">{{$user->name}}</a>
                            </div>
                        </div>
                        <p>User ID: {{$user->id}}</p>
                        <p>User Name: {{$user->name}}</p>
                        <p>User Email: {{$user->email}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

@endsection