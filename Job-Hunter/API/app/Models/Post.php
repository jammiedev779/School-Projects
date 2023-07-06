<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\JobCategory;
use App\Models\Company;

class Post extends Model
{
    use HasFactory;
    protected $table = 'posts';
    protected $fillable = [
        'category_id',
        'job_category_id',
        'company_id',
        'is_active',
        'job_name',
        'salary',
        'job_description',
        'role',
        'requirement',
        'benefit',
        'hour',
        'experience',
        'expire_at'
    ];
    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function job_category() {
        return $this->belongsTo(JobCategory::class);
    }
    public function company() {
        return $this->belongsTo(Company::class);
    }
}
