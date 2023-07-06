@extends('official.layout.product_layout')

@section('content')

    <div class="row">
        <div class="col-12 col-sm-6">
            <h3 class="d-inline-block d-sm-none">{{ $product->name }}</h3>
            <div class="col-12">
                <img src="{{ asset('img/product/'.$product->image) }}" class="product-image" alt="Product Image">
            </div>
        </div>
        <div class="col-12 col-sm-6">
            <h3 class="my-3">{{ $product->name }}</h3>
            <p>{{ $product->description }}</p>

            <hr>

            <div class="bg-warning py-2 px-3 mt-4">
           
                @if($product->category->type == "Premium" && is_null($product->event_id) == true)
                <h2 class="mb-0">
                    ${{ $product->price }} / Year
                </h2>
                @elseif(is_null($product->event_id) == false)
                <div class="d-flex">
                    <h2 class="mb-0">
                        ${{ $product->event_price }} / Year
                    </h2>
                    <u class="ml-5 text-bold">{{ $product->event->name }} {{ $product->event->discount }}% Off!</u>
                </div>
                @else
                <h2 class="mb-0">
                    Free
                </h2>
                @endif
                <h4 class="mt-0">
                    @if(is_null($product->event_id) == false)
                    <small>original price: $<s>{{ $product->price }}</s> / Year</small>
                    @endif
                </h4>
            </div>

            <div class="mt-4">
                <div class="btn btn-primary btn-lg btn-flat">
                @if($product->category->type == "Premium")
                    <a class="text-white" href="{{ url('/api/stripe/'.$product->id) }}" target="_blank">
                        <i class="fas fa-download mr-2"></i>
                        Buy Now
                    </a>          
                @else 
                     <a class="text-white" href="{{ $product->link }}" target="_blank">
                        <i class="fas fa-download mr-2"></i>
                        Download
                    </a>
                 @endif     
                </div>

                <div class="btn btn-default btn-lg btn-flat">
                    <a href="{{ route('productpage') }}">Back</a>
                </div>
            </div>
        </div>
    </div>
@endsection