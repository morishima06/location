<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'shop_id',
        'tel',
        'business_hours',
        'regular_holiday',
        'sort_id',

    ];

    public function shop_sort()
    {

        return $this->belongsTo('App\Models\ShopSort');
    }

    public function shops()
    {

        return $this->belongsTo('App\Models\Shop');
    }
}
