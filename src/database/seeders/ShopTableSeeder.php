<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Shop;


class ShopTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Shop::create([
            'id' => '1',
            'name' => 'NIKE 青山',
        ]);
        Shop::create([
            'id' => '2',
            'name' => 'ADIDAS新宿',

        ]);
        Shop::create([
            'id' => '3',
            'name' => '横浜ビブレ',
        ]);
        Shop::create([
            'id' => '4',
            'name' => 'LACOSTE 東武百貨店池袋店',
        ]);
        Shop::create([
            'id' => '5',
            'name' => 'BEAMS 渋谷',
        ]);

    }
}
