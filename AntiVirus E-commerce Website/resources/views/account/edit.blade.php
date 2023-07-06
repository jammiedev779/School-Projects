@extends('admin.layout')

@section('content')
<div class="container-fluid">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Manage Account</h1>
                </div>
            </div>
        </div>
    </section>
    <div class="card mb-4">
        <div class="card-body">
            @if(Session::has('user_update'))
            <div class="alert alert-primary alert-dismissible">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Primary!</strong> {!! session('user_update') !!}
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
            {!! Form::model($user , array('route' => array('user.update', $user->id), 'method'=>'PUT','files'=>'true')) !!}

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="{{ asset('img/admin/'.$user->profile) }}" class="img-circle elevation-2" alt="User Image">
                </div>
            </div>
            {!! Form::label('profile', 'Change Profile:') !!}
            {!! Form::file('profile', array('class'=>'form-control')) !!}

            {!! Form::label('name', 'Name:') !!}
            {!! Form::text('name',null, array('class'=>'form-control')) !!}

            {!! Form::label('email', 'Email:') !!}
            {!! Form::text('email',null, array('class'=>'form-control')) !!}

            <br>
            {!! Form::submit('Save', array('class'=>'btn btn-primary')) !!}
            {!! Form::close() !!}
        </div>
    </div>
</div>

@endsection