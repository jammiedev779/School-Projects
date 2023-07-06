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
          <li class="nav-item mx-2">
            <a href="{{ route('productpage') }}" class="nav-link">Products</a>
          </li>
          <li class="nav-item mx-2 nav-active">
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
    <div class="banner-work d-flex pl-3 pl-lg-5 align-items-center text-center justify-content-center">
      <div>
        <h1 class=" text-capitalize display-4 text-yellow">
          Our
        </h1>
        <h1 class="text-capitalize display-4 font-weight-bold">
          Employees
        </h1>
      </div>
    </div>
  </header>
  <!-- end of header section -->

  <!-- body content -->

  <div class="container-fluid mt-5 p-5">
    <div class="row banner-emp">
      <div class="col-sm-10 d-flex">
        <div class="w-3 h-3 ">
          <img style="width:10rem; height:10rem" src="{{ asset('official/img/employee/emp2.png') }}" alt="Employee">
          <div class="text-bold text-center">Mr.John Wick</div>
        </div>
        <div class="w-5 h-5 mt-3 ml-3 text-justify">
          My name is John and I’m the manager of a software development team at a tech company. I’ve been working in the tech industry for over 10 years and I’ve had the opportunity to work on some really exciting projects during that time.
          As a manager, I’m responsible for leading my team and making sure that we’re all working towards the same goals. I believe that communication is key, so I always make sure that my team is aware of what’s going on and that they have the support they need to succeed. </div>
      </div>
    </div>
    <div class="row justify-content-end mt-2 bg-light">
      <div class="col-sm-7 d-flex">
        <div class="w-5 h-5 mt-3 ml-3 text-justify">
          Hi, I’m Sarah. I’m a dedicated and purpose-driven IT technician with a strong sense of support and loyalty to my work. I’m a curious and insightful individual who is always willing to learn and improve my work. I’m also an innovative and creative thinker who is always looking for new ways to solve problems. I’m a collaborative team player who is always ready to share my knowledge and work with others. </div>
      </div>
      <div class="w-3 h-3 text-bold text-center">
        <img style="width:10rem; height:10rem" src="{{ asset('official/img/employee/emp4.png') }}" alt="Employee">
        <div class="text-bold text-center">
          Mrs.Sarah Alibaba
        </div>
      </div>
    </div>
    <div class="row justify-content-start mt-2 banner-emp">
      <div class="col-sm-10 d-flex">
        <div class="w-3 h-3">
          <img style="width:10rem; height:10rem" src="{{ asset('official/img/employee/emp5.png') }}" alt="Employee">
          <div class="text-bold text-center">
            Ms.Emily Blonde
          </div>
        </div>
        <div class="w-5 h-5 mt-3 ml-3 text-justify">
          Hi, I’m Emily. I’m a trustworthy and empathetic manager who is always looking out for my team’s best interests. I’m a strong leader who is passionate about creating an inclusive and team-building work environment. I’m a visionary who is always looking for new ways to improve my team’s performance and productivity. I’m a resilient and persevering individual who is always willing to learn from adversity and take risks. </div>
      </div>
    </div>
    <div class="row justify-content-end mt-2">
      <div class="col-sm-7 d-flex">
        <div class="w-5 h-5 mt-3 ml-3 text-justify">
          Hi, I’m Michael. I’m a dependable and reliable IT technician with a strong sense of integrity and respect. I’m a team player who is always willing to share my knowledge and teach others. I’m also a humble and curious individual who is always looking for innovative ways to improve my work. I’m a natural leader who is always ready to praise and celebrate my team’s successes. </div>
      </div>
      <div class="w-3 h-3">
        <img style="width:10rem; height:10rem" src="{{ asset('official/img/employee/emp3.png') }}" alt="Employee">
        <div class="text-bold text-center">
          Mr.Michael Jackson
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9bJgdNIqoRw" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
    <!-- end of body content -->

    <!-- partners -->
    <section class="partners py-5 mt-3">
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