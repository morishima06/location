<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandShop extends Model
{
    use HasFactory;
    protected $fillable = ['shop_id','brand_id'];

}
