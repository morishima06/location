<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'zip_code', 'shop_id', 'zip_code', 'state', 'state_code', 'city', 'address', 'nearest_station', 'area_id'
    ];
    public function shops()
    {

        return $this->belongsTo('App\Models\Shop');
    }
    public function areas()
    {

        return $this->belongsTo('App\Models\Area');
    }
}
