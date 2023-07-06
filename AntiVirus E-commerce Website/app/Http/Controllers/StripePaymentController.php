<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Stripe;
use App\Models\Category;
use App\Models\Event;
use App\Models\Product;

class StripePaymentController extends Controller
{
    public function stripe()
    {
        return view('stripe');
    }

    public function stripePost(Request $request)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        Stripe\Charge::create ([
                "amount" => 100 * 100,
                "currency" => "usd",
                "source" => $request->stripeToken,
                "description" => "Test payment from antivirus.com."
        ]);

        Session::flash('success', 'Payment successful!');
        $categories = Category::all();
        $events = Event::all();
        $products = Product::orderBy('name')->paginate(6);
        return view('official.product')->with('categories', $categories)
             ->with('products', $products)->with('events', $events);
    }
}
