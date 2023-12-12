<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'area_code'
    ];

    public function addresses()
    {
        return $this->hasMany('App\Models\Address');
    }
}
