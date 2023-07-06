@extends('official.layout.product_layout')

@section('content')

<div class="row justify-content-end pr-5">
    <span class="text-bold">Result for: </span> <a href="{{ url('/productpage/search?keyword='.$keyword) }}">{{$keyword}}</a>
    <span class="text-bold ml-2">Sort by:</span><div>{{$sortby}}</div>
</div>
<div class="row">
    @forelse($products as $product)
    <div class="col-sm-4">
        <div class="card mt-5" style="width: 15rem; height:20rem">
            <div><a href="{{ url('/productpage/detail/'.$product->id) }}"> <img style="height:10rem !important; object-fit:contain;" class="card-img-top" src="{{ asset('img/product/'.$product->image)}} " alt="image"></a></div>
            <div class="card-body">
                <p class="card-text text-bold h5">{{ $product->name }}</p>
                @if($product->category_type == "Premium" && is_null($product->event_id) == true)
                <p class="card-text"><span class="text-danger text-bold">{{ $product->category_type }}</span> ${{ $product->price }}/Year</p>
                @elseif(is_null($product->event_id) == false)
                <p class="card-text"><span class="text-danger text-bold">{{ $product->category_type }}</span> ${{ $product->event_price }}<sup class="text-bold">$<s>{{ $product->price }}</s></sup>/Year</p>
                @else
                <p class="card-text"><span class="text-success text-bold">{{ $product->category_type }}</span></p>
                @endif
                <a href="{{ url('/productpage/detail/'.$product->id) }}" class="btn btn-warning text-light">Detail</a>
            </div>
        </div>
    </div>
    @empty
    <div class="col-sm-4">No results found</div>
    @endforelse
</div>
<div class="d-flex justify-content-end pr-5">
    {!! $products->links() !!}
</div>


@endsection