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

<body>
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
          <li class="nav-item mx-2 nav-active">
            <a href="{{ route('productpage') }}" class="nav-link">Products</a>
          </li>
          <li class="nav-item mx-2">
            <a href="{{ route('aboutpage') }}" class="nav-link">About Us</a>
          </li>
          <li class="nav-item mx-2">
            <a href="{{ route('contactpage') }}" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-icons d-none d-lg-flex">
        <!-- single icon -->
        <a href="{{ route('faqpage') }}"><div style="border-radius:100%" class="bg-secondary"><div class="navbar-icon mx-2"><i class="fas fa-question"></i></div></div></a>
        <!-- end of single icon -->
      </div>
    </nav>
    <!-- end of navbar -->
    <div class="banner-product d-flex pl-3 pl-lg-5 align-items-center text-center justify-content-center">
      <div>
        <h1 class=" text-capitalize display-4 text-yellow">
          Anti Virus
        </h1>
        <h1 class="text-capitalize display-4 font-weight-bold">
          Softwares
        </h1>
      </div>
    </div>
  </header>
  <!-- end of header section -->

  <!-- product section  -->
  <section id="products" class="products">
    <div class="container-fluid">
      <div class="row">
        <!-- product info -->
        <div class="col-10 mx-auto col-md-5 col-lg-3 text-capitalize my-3 px-5">
          <!-- products categories -->
          <div class="products-categories-title my-4">
            <h6 class="text-uppercase">
              shop by categories
            </h6>
            <div class="products-categories-underline"></div>
          </div>
          <!-- end of title -->
          <!-- single link -->
          <a href="{{ route('productpage') }}" class="products-category-link d-block">
            <p class="mb-0">
              All
            </p>
          </a>
          @foreach($categories as $category)
          <a href="{{ url('/productpage/search?keyword='.$category->type) }}" class="products-category-link d-block">
            <p class="mb-0">
              {{$category->type}}
            </p>
          </a>
          @endforeach
          <!-- end of single link -->
          <div class="products-categories-title my-4">
            <h6 class="text-uppercase">
              Search Products
            </h6>
            <div class="products-categories-underline"></div>
          </div>
          <!-- end of title -->
          <form action="{{ route('productsearch') }}" method="GET">
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn input-group-text form-icon" type="submit"><i class="fas fa-search"></i></button>
              </div>
              {{ Form::text('keyword',$keyword ?? '', array('placeholder'=>'Search', 'class'=>'form-control')) }}
            </div>
            <div class="mt-2">
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
          <!-- end of title -->
          <!-- end of products categories -->
        </div>
        <!-- end of product info -->
        <div class="col-10 mx-auto col-md-7 col-lg-9 my-3">
          @yield('content')
        </div>
      </div>
    </div>
  </section>
  <!-- end of product section  -->

  <!-- partners -->
  <section class="partners py-5">
    <div class="container">
      <div class="row">
        <!-- compnay carousel -->
        <div class="col-6 col-md-6 col-lg-4 mx-auto">
          <div id="partnerCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <!-- single item -->
              <div class="carousel-item active">
                <img src="{{ asset('official/img/company-logos/company-logo-1.jpg') }}" class="d-block w-100" style="height:10rem; object-fit:contain" alt="partner company" />
              </div>
              <!-- end single item -->
              <!-- single item -->
              <div class="carousel-item ">
                <img src=" {{ asset('official/img/company-logos/company-logo-2.jpg') }}" class="d-block w-100" style="height:10rem; object-fit:contain" alt="partner company" />
              </div>
              <!-- end single item -->
              <!-- single item -->
              <div class="carousel-item ">
                <img src="{{ asset('official/img/company-logos/company-logo-3.jpg') }}" class="d-block w-100" style="height:10rem; object-fit:contain" alt="partner company" />
              </div>
              <!-- end single item -->
              <!-- single item -->
              <div class="carousel-item ">
                <img src="{{ asset('official/img/company-logos/company-logo-4.jpg') }}" class="d-block w-100" style="height:10rem; object-fit:contain" alt="partner company" />
              </div>
              <!-- end single item -->
              <!-- single item -->
              <div class="carousel-item ">
                <img src="{{ asset('official/img/company-logos/company-logo-5.png') }}" class="d-block w-100" style="height:10rem; object-fit:contain" alt="partner company" />
              </div>
              <!-- end single item -->
              <!-- single item -->
              <div class="carousel-item">
                <img src="{{ asset('official/img/company-logos/company-logo-6.jpg') }}" class="d-block w-100" style="height:10rem; object-fit:contain" alt="partner company" />
              </div>
              <!-- end single item -->
            </div>
            <a href="#partnerCarousel" class="carousel-control-prev" role="button" data-slide="prev">
              <i class="fas fa-arrow-left"></i>
            </a>
            <a href="#partnerCarousel" class="carousel-control-next" role="button" data-slide="next">
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end of  partners -->

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