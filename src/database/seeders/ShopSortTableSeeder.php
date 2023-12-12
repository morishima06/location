<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ShopSort;

class ShopSortTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ShopSort::create([
            'id'=>'1',
            'name' => 'セレクトショップ',
        ]);
        ShopSort::create([
            'id'=>'2',
            'name' => 'ブランドショップ',
        ]);
        ShopSort::create([
            'id'=>'3',
            'name' => '百貨店',
        ]);
        
    }
}
