<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sort_id',
    ];

    public function brands()
    {
        return $this->belongsToMany('App\Models\Brand');
    }
    public function adresses()
    {
        return $this->hasOne('App\Models\Address');
    }
    public function shop_details()
    {
        return $this->hasOne('App\Models\ShopDetail');
    }
}
