<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\FaqController;
use App\Http\Controllers\API\JobCategoryController;
use App\Http\Controllers\API\UserInterestController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\UserSkillController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\ExperienceController;
use App\Http\Controllers\API\TagController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ApplyController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\Api\AuthCompanyController;
use App\Http\Controllers\Api\CompanyNotificationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\API\AppController;
use App\Http\Controllers\API\ContactController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// Company
Route::get('company', [CompanyController::class,'index']);
Route::get('company/{id}', [CompanyController::class,'show']);
Route::post('company', [CompanyController::class,'store']);
Route::put('company/{id}', [CompanyController::class,'update']);
Route::delete('company/{id}', [CompanyController::class,'delete']);

// Experience
Route::get('experience', [ExperienceController::class,'index']);
Route::post('experience', [ExperienceController::class,'store']);

// Category
Route::get('category', [CategoryController::class,'index']);
Route::get('category/{id}', [CategoryController::class,'show']);
Route::post('category', [CategoryController::class,'store']);
Route::put('category/{category}', [CategoryController::class,'update']);
Route::delete('category/{category}', [CategoryController::class,'delete']);

// Job Category
Route::get('apply', [ApplyController::class,'index']);
Route::get('apply/{id}', [ApplyController::class,'show']);
Route::post('apply', [ApplyController::class,'store']);
Route::put('apply/{id}', [ApplyController::class,'update']);
Route::delete('apply/{user_id}/{post_id}', [ApplyController::class,'delete']);
// Find apply Posts
Route::get('apply/{user_id}/{post_id}', [ApplyController::class, 'find']);
// Get user Applied post
Route::get('applied/{id}', [ApplyController::class, 'getApplied']);

// Following & Follower
Route::get('follow', [FollowController::class,'index']);
Route::get('follow/{follow}', [FollowController::class,'show']);
Route::post('follow', [FollowController::class,'store']);
Route::put('follow/{follow}', [FollowController::class,'update']);
Route::delete('follow/{follow}', [FollowController::class,'delete']);

// User Interest
Route::get('user_interest', [UserInterestController::class,'index']);
Route::get('user_interest/{user_interest}', [UserInterestController::class,'show']);
Route::post('user_interest', [UserInterestController::class,'store']);
Route::put('user_interest/{user_interest}', [UserInterestController::class,'update']);
Route::delete('user_interest/{user_interest}', [UserInterestController::class,'delete']);

// Post
Route::get('post', [PostController::class,'index']);
Route::get('post/{id}', [PostController::class,'show']);
Route::post('post', [PostController::class,'store']);
Route::put('post/{id}', [PostController::class,'update']);
Route::delete('post/{id}', [PostController::class,'delete']);
// Get user Posted Posts
Route::get('posted/{id}', [PostController::class, 'getPosted']);

// Skill
Route::get('skill', [SkillController::class,'index']);
Route::get('skill/{skill}', [SkillController::class,'show']);
Route::post('skill', [SkillController::class,'store']);
Route::put('skill/{skill}', [SkillController::class,'update']);
Route::delete('skill/{skill}', [SkillController::class,'delete']);

// User Skill
Route::get('user_skill', [UserSkillController::class,'index']);
Route::get('user_skill/{user_skill}', [UserSkillController::class,'show']);
Route::post('user_skill', [UserSkillController::class,'store']);
Route::put('user_skill/{user_skill}', [UserSkillController::class,'update']);
Route::delete('user_skill/{user_skill}', [UserSkillController::class,'delete']);

// FAQs 

Route::get('faq', [FaqController::class,'index']);
Route::post('faq', [FaqController::class,'ask']);
Route::put('faq/{id}', [FaqController::class,'answer']);

// Tags
Route::get('tags', [TagController::class,'index']);
Route::post('tags', [TagController::class,'store']);

// Blogs
Route::get('blog', [BlogController::class,'index']);
Route::get('blog/{id}', [BlogController::class,'show']);
Route::post('blog', [BlogController::class,'store']);
Route::post('blog/{id}', [BlogController::class,'update']);
Route::delete('blog/{id}', [BlogController::class,'delete']);

// Contact
Route::get('contact', [ContactController::class,'index']);
Route::get('contact/{id}', [ContactController::class,'show']);
Route::post('contact', [ContactController::class,'store']);
Route::put('contact/{id}', [ContactController::class,'update']);
Route::delete('contact/{id}', [ContactController::class,'delete']);

// Apply
Route::get('job_category', [JobCategoryController::class,'index']);
Route::get('job_category/{id}', [JobCategoryController::class,'show']);
Route::post('job_category', [JobCategoryController::class,'store']);
Route::put('job_category/{id}', [JobCategoryController::class,'update']);
Route::delete('job_category/{id}/delete', [JobCategoryController::class,'delete']);

// Company Notification
Route::get('companyNotification', [CompanyNotificationController::class,'index']);
Route::get('companyNotification/{companyNotification}', [CompanyNotificationController::class,'show']);
Route::post('companyNotification', [CompanyNotificationController::class,'store']);
Route::put('companyNotification/{id}', [CompanyNotificationController::class,'update']);
Route::delete('companyNotification/{post_id}/{user_id}', [CompanyNotificationController::class,'delete']);
// Get Company Notification 
Route::get('company/notification/{id}', [CompanyNotificationController::class, 'notification']);

// Login Logout & Register

Auth::routes([
    'verify' => true
]);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});
// User
Route::post('register', [AuthController::class,'register'])->name('register');
Route::post('login', [AuthController::class,'login'])->name('login');
// Company
Route::post('register/company', [AuthCompanyController::class,'register'])->name('register.company');
Route::post('login/company', [AuthCompanyController::class,'login'])->name('login.company');

Route::get('email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
Route::post('/forgot-password', [AuthController::class, 'forgotPassword'])->name('password.email');
Route::post('/reset-password', [ResetPasswordController::class, 'reset'])->name('password.update');
// Admin
Route::post('admin/login', [AdminController::class, 'login']);

// search
Route::get('search', [SearchController::class,'searchPost']);

// Get Home Dynamic data
Route::get('amount/user/post/company', [SearchController::class, 'getHomeData']);


// User
Route::get('users', [UserController::class,'index']);
Route::get('users/{id}', [UserController::class,'show']);
Route::post('users', [UserController::class,'store']);
Route::put('users/{id}', [UserController::class,'update']);
Route::delete('users/{id}/delete', [UserController::class,'delete']);

Route::post('users/profile/{id}',[UserController::class,'profileImage']);
Route::put('users/cv/{id}',[UserController::class,'uploadCV']);
Route::get('users/cv/download/{fileName}',[UserController::class,'downloadFile']);


Route::get('browse',[AppController::class, 'app']);
Route::get('adminData', [AppController::class, 'adminData']);
Route::get('data-current-month',[UserController::class,'getDataCurMon']);

// Route::middleware('admin')->group(function () {
//     Route::get('adminData', [AppController::class, 'adminData']);
// });