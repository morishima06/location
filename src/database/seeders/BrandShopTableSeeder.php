<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BrandShop;
use Illuminate\Support\Facades\DB;

class BrandShopTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('brand_shop')->insert([
            'shop_id' => '1',
            'brand_id' => '1',

        ]);
        DB::table('brand_shop')->insert([
            'shop_id' => '1',
            'brand_id' => '2',

        ]);
        DB::table('brand_shop')->insert([
            'shop_id' => '2',
            'brand_id' => '1',

        ]);
        DB::table('brand_shop')->insert([
            'shop_id' => '2',
            'brand_id' => '3',

        ]);
        DB::table('brand_shop')->insert([
            'shop_id' => '3',
            'brand_id' => '1',

        ]);
        DB::table('brand_shop')->insert([
            'shop_id' => '3',
            'brand_id' => '3',

        ]);


        
    }
}
