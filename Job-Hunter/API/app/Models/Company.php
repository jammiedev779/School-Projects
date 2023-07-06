<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail as MustVerifyEmailContract;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Company extends Authenticatable implements MustVerifyEmailContract
{
    use HasApiTokens, HasFactory, Notifiable, MustVerifyEmail;

    protected $table = 'companies';
    protected $fillable = [
        'name',
        'location', 
        'website', 
        'image',
        'manager',
        'email',
        'password',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
