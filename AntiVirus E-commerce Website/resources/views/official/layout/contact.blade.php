<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AntiVirus Project</title>
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <link rel="stylesheet" href="{{ asset('admin-lte/plugins/fontawesome-free/css/all.min.css') }}">

    <link rel="stylesheet" href="{{ asset('admin-lte/dist/css/adminlte.min.css?v=3.2.0') }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!-- fontawesome css -->
    <link rel="stylesheet" href="{{ asset('official/css/all.min.css') }}">
    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{ asset('official/css/bootstrap.min.css') }}">
    <!-- custom css -->
    <link rel="stylesheet" href="{{ asset('official/css/style.css') }}">
</head>

<body class="bg-secondary">
    <!-- header section -->
    <header id="header" class="header">
        <!-- navbar -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <a href="{{ route('mainpage') }}" class="navbar-brand">
                <img style="width:5rem; height:5rem;" src="{{ asset('official/img/antivirus.jpg') }}" alt="company logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item mx-2 ">
                        <a href="{{ route('mainpage') }}" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="{{ route('productpage') }}" class="nav-link">Products</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="{{ route('aboutpage') }}" class="nav-link">About Us</a>
                    </li>
                    <li class="nav-item mx-2 nav-active">
                        <a href="{{ route('contactpage') }}" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-icons d-none d-lg-flex">
                <!-- single icon -->
                <a href="{{ route('faqpage') }}">
                    <div style="border-radius:100%" class="bg-secondary">
                        <div class="navbar-icon mx-2"><i class="fas fa-question"></i></div>
                    </div>
                </a>
                <!-- end of single icon -->
            </div>
        </nav>
        <!-- end of navbar -->
        <!-- <div class="banner-work d-flex pl-3 pl-lg-5 align-items-center text-center justify-content-center">
      <div>
        <h1 class=" text-capitalize display-4 text-yellow">
          Our
        </h1>
        <h1 class="text-capitalize display-4 font-weight-bold">
          Employees
        </h1>
      </div>
    </div> -->
    </header>
    <!-- end of header section -->

    <!-- body content -->

    <div class="container-sm mt-5 p-5">
        <section class="content">

            @if(Session::has('message_create'))
            <div class="alert alert-primary alert-dismissible">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Primary!</strong> {!! session('message_create') !!}
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
            <!-- Default box -->
            <div class="card bg-white">
                <div class="card-body row">
                    <div class="col-5 text-center d-flex align-items-center justify-content-center">
                        <div class="">
                            <h2>Anti<strong>Virus</strong>.com</h2>
                            <p class="lead mb-5">We'd love to hear from<br>
                                You.
                            </p>
                        </div>
                    </div>
                    <div class="col-7">
                        <!-- <form action="{{ route('message.store') }}">
                            <div class="form-group">
                                <label for="inputName">Name</label>
                                <input name="name" type="text" id="inputName" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">E-Mail</label>
                                <input name="email" type="email" id="inputEmail" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="inputSubject">Subject</label>
                                <input name="subject" type="text" id="inputSubject" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="inputMessage">Message</label>
                                <textarea name="message" id="inputMessage" class="form-control" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" value="Send message">
                            </div>
                        </form> -->
                        {!! Form::open(['route' => 'message.store']) !!}
                        {!! Form::label('name', 'Name: ') !!}
                        {!! Form::text('name', '',array('class'=>'form-control')) !!}
                        <br>
                        {!! Form::label('email', 'E-mail: ') !!}
                        {!! Form::text('email', '',array('class'=>'form-control')) !!}
                        <br>
                        {!! Form::label('subject', 'Subject: ') !!}
                        {!! Form::text('subject', '',array('class'=>'form-control')) !!}
                        <br>
                        {!! Form::label('message', 'Message: ') !!}
                        {!! Form::textarea('message', '',array('class'=>'form-control','rows'=>4)) !!}
                        <br>
                        {!! Form::submit('Send Message',array('class'=> 'btn btn-primary')) !!}
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>

        </section>
    </div>
    <!-- end of body content -->



    <!-- skills section -->
    <section id="skills" class="skills py-5">
        <div class="container">
            <div class="row">
                <div class="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
                    <div class="skill-icon mr-3">
                        <i class="fas fa-ban"></i>
                    </div>
                    <div class="skill-text">
                        <h3 class="text-uppercase text-white">
                            tax free
                        </h3>
                    </div>
                </div>
                <div class="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
                    <div class="skill-icon mr-3">
                        <i class="fas fa-comment-dollar"></i>
                    </div>
                    <div class="skill-text">
                        <h3 class="text-uppercase text-white">
                            price promise
                        </h3>
                    </div>
                </div>
                <div class="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
                    <div class="skill-icon mr-3">
                        <i class="fas fa-award"></i>
                    </div>
                    <div class="skill-text">
                        <h3 class="text-uppercase text-white">
                            lifetime warranty
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of skills section -->

    <!-- footer section -->
    <footer class="footer py-5">
        <div class="container">
            <div class="row">
                <div class="col-10 mx-auto text-center">
                    <h1 class="text-uppercase font-weight-bold text-yellow d-inline-block footer-title">
                        Anti-Virus Software
                    </h1>
                    <!-- footer icons -->
                    <div class="footer-icons d-flex justify-content-center my-5">
                        <!-- single icon -->
                        <a href="" class="footer-icon mx-2">
                            <div class="fab fa-facebook"></div>
                        </a>
                        <!-- end of single icon -->
                        <!-- single icon -->
                        <a href="" class="footer-icon mx-2">
                            <div class="fab fa-twitter"></div>
                        </a>
                        <!-- end of single icon -->
                        <!-- single icon -->
                        <a href="" class="footer-icon mx-2">
                            <div class="fab fa-youtube"></div>
                        </a>
                        <!-- end of single icon -->
                        <!-- single icon -->
                        <a href="" class="footer-icon mx-2">
                            <div class="fab fa-google-plus"></div>
                        </a>
                        <!-- end of single icon -->
                        <!-- single icon -->
                        <a href="" class="footer-icon mx-2">
                            <div class="fab fa-instagram"></div>
                        </a>
                        <!-- end of single icon -->
                    </div>
                    <!-- footer icons -->
                    <p class="text-muted text-capitalize w-75 mx-auto text-center">
                        thanks for visitting our website. if you have anything to say to us please feel free to contact us via our official email.
                    </p>
                    <div class="footer-contact d-flex justify-content-around mt-5">
                        <!-- single contact -->
                        <div class="text-capitalize">
                            <span class="contact-icon mr-2">
                                <i class="fas fa-map"></i>
                            </span>
                            Cadt, Phnom Penh, Cambodia
                        </div>
                        <!-- end of single contact -->
                        <!-- single contact -->
                        <div class="text-capitalize">
                            <span class="contact-icon mr-2">
                                <i class="fas fa-phone"></i>
                            </span>
                            Phone : +855 9634 545 22
                        </div>
                        <!-- end of single contact -->
                        <!-- single contact -->
                        <div class="">
                            <span class="contact-icon mr-2">
                                <i class="fas fa-envelope"></i>
                            </span>
                            Email : donotsendemailme@gmail.com
                        </div>
                        <!-- end of single contact -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- jQuery -->
    <script src="{{ asset('official/js/jquery-3.4.1.min.js') }}"></script>
    <!-- Bootstrap js -->
    <script src="{{ asset('official/js/bootstrap.bundle.min.js') }}"></script>
    <!-- fontwesome js -->
    <script src="{{ asset('official/js/all.min.js') }}"></script>
    <!-- Custom js -->
    <script src="{{ asset('official/js/script.js') }}"></script>

    <script src="{{ asset('admin-lte/plugins/jquery/jquery.min.js') }}"></script>

    <script src="{{ asset('admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('admin-lte/dist/js/adminlte.min.js?v=3.2.0') }}"></script>

    <script src="{{ asset('admin-lte/dist/js/demo.js') }}"></script>
</body>

</html>