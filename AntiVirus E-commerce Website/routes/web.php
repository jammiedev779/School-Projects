<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PageController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth'], function () {
    Route::redirect('/antivirus','/antivirus/homepage')->name('antivirus');
    //App
    Route::get('/antivirus/homepage',[AppController::class,'index'])->name('homepage');
    Route::redirect('/antivirus/homepage/edit','/antivirus/homepage');
    //Category
    Route::resource('/antivirus/homepage/category',CategoryController::class);
    //Product
    Route::resource('/antivirus/homepage/product',ProductController::class);
    Route::get('/antivirus/homepage/search_product',[AppController::class,'search_product'])->name('product.search');
    //Event
    Route::resource('/antivirus/homepage/event',EventController::class);
    //Message
    Route::resource('/antivirus/homepage/message',MessageController::class);
    Route::redirect('/antivirus/homepage/message/create','/contact');
    Route::get('/antivirus/homepage/search_message',[AppController::class,'search_message'])->name('message.search');
    //FAQ
    Route::resource('/antivirus/homepage/faq',FaqController::class);
    Route::get('/antivirus/homepage/search_faq',[AppController::class,'search_faq'])->name('faq.search');
    
});


Route::redirect('_','/login')->name('login');
Route::get('/login', [AdminController::class, 'loginForm'])->name('admin.login.form');
Route::post('/login', [AdminController::class, 'loginPost'])->name('admin.login.post');
Route::get('/dashboard', [AdminController::class,'dashboard'])->name('admin.dashboard');
Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout');
Route::get('/account/{userId}/edit', [AdminController::class, 'edit'])->name('user.edit');
Route::put('/account/{userId}', [AdminController::class, 'update'])->name('user.update');

Route::redirect('/','/mainpage');
Route::get('/mainpage',[PageController::class,'official_page'])->name('mainpage');
Route::get('/productpage',[PageController::class,'product_page'])->name('productpage');
Route::get('/productpage/detail/{id}',[PageController::class,'product_detail_page'])->name('product_detailpage');
Route::get('/productpage/search',[PageController::class,'search'])->name('productsearch');
Route::get('/aboutpage',[PageController::class,'aboutpage'])->name('aboutpage');
Route::get('/contact',[PageController::class,'contactpage'])->name('contactpage');
Route::get('/faq',[PageController::class,'faqpage'])->name('faqpage');

Route::get('/api/stripe/{id}',[PageController::class,'product_payment'])->name('pay_product');

