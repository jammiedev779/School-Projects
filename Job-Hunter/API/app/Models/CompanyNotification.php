<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Company;
use App\Models\User;
use App\Models\Post;

class CompanyNotification extends Model
{
    use HasFactory;
    protected $table = 'company_notification';
    protected $fillable = [
        'company_id','user_id','post_id','seen','title','body'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function company() {
        return $this->belongsTo(Company::class);
    }
    public function post() {
        return $this->belongsTo(Post::class);
    }
}
