<?php

namespace App\Models;
use App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    protected $table = 'tags';
    protected $fillable = [
        'tag'
    ];
    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }

}
