@extends('admin.layout_login')

@section('content')

<!-- @if(Session::has('success'))
<div class="alert alert-success"><em>{!! session('success') !!}</em>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button>
</div>
@endif
@if(Session::has('errors'))
<div class="alert alert-danger"><em>{!! $errors->first() !!}</em>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button>
</div>
@endif
@if(Session::has('message'))
<div class="alert alert-success"><em>{!! session('message') !!}</em>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button>
</div>
@endif -->
<div class="hold-transition login-page">
    <div class="login-box">
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Log In</p>

                <form action="{{ route('admin.login.post') }}" method="POST">
                    @csrf
                    <div class="input-group mb-3">
                        <input type="email" name="email" class="form-control" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    @if ($errors->has('email'))
                    <div class="text-danger" style="margin-top: -10px">{{ $errors->first('email') }}</div>
                    @endif
                    <div class="input-group mb-3">
                        <input type="password" name="password" class="form-control" placeholder="Password" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    @if ($errors->has('password'))
                    <div class="text-danger" style="margin-top: -10px">{{ $errors->first('password') }}</div>
                    @endif
                    @if(Session::has('errors'))
                    <div class="text-danger" style="margin-top: -10px"><em>{!! $errors->first() !!}</em></div>
                    @endif
                    @if(Session::has('message'))
                    <div class="text-success" style="margin-top: -10px"><em>{!! session('message') !!}</em></div>
                    @endif
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember" name="remember" value="1">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Log In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</div>

<!-- <form action="{{ route('admin.login.post') }}" method="POST">
    @csrf
    <div class="form-group row">
        <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
        <div class="col-md-6">
            <input type="text" id="email_address" class="form-control" name="email" required autofocus>
            @if ($errors->has('email'))
            <span class="text-danger">{{ $errors->first('email') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group row">
        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
        <div class="col-md-6">
            <input type="password" id="password" class="form-control" name="password" required>
            @if ($errors->has('password'))
            <span class="text-danger">{{ $errors->first('password') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group row">
        <div class="col-md-6 offset-md-4">
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember" value="1"> Remember Me
                </label>
            </div>
        </div>
    </div>

    <div class="col-md-6 offset-md-4">
        <button type="submit" class="btn btn-primary">
            Login
        </button>
    </div>
</form> -->
@endsection