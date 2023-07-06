@extends('official.layout.official_layout')

@section('content')
<div class="container container-sm">

    <div class="row">
        @foreach($products as $product)
        <div class="col-sm-3">
            <div class="card" style="width: 15rem; height:20rem">
                <div><a href="{{ url('/productpage/detail/'.$product->id) }}"> <img style="height:10rem !important; object-fit:contain;" class="card-img-top" src="{{ asset('img/product/'.$product->image)}} " alt="image"></a></div>
                <div class="card-body">
                    <p class="card-text text-bold h5">{{ $product->name }}</p>
                    @if($product->category->type == "Premium" && is_null($product->event_id) == true)
                    <p class="card-text"><span class="text-danger text-bold">{{ $product->category->type }}</span> ${{ $product->price }}/Year</p>
                    @elseif(is_null($product->event_id) == false)
                    <p class="card-text"><span class="text-danger text-bold">{{ $product->category->type }}</span> ${{ $product->event_price }}<sup class="text-bold">$<s>{{ $product->price }}</s></sup>/Year</p>
                    @else
                    <p class="card-text"><span class="text-success text-bold">{{ $product->category->type }}</span></p>
                    @endif
                    <a href="{{ url('/productpage/detail/'.$product->id) }}" class="btn btn-warning text-light">Detail</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>

</div>

@endsection