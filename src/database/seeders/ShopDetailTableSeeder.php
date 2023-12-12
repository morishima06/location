<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ShopDetail;

class ShopDetailTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ShopDetail::create([
            'shop_id' => '1',
            'tel' => ' 03-6427-2560',
            'business_hours' => '月~金10:00~20:00,土日12:00~20:00',
            'regular_holiday' => '土',
            'sort_id' => '1',
        ]);
        ShopDetail::create([
            'shop_id' => '2',
            'tel' => ' 03-1434-2870',
            'business_hours' => '月~金11:00~20:00,土11:00~20:00',
            'regular_holiday' => '日',
            'sort_id' => '2',
        ]);
        ShopDetail::create([
            'shop_id' => '3',
            'tel' => ' 03-1289-2230',
            'business_hours' => '月~金9:00~20:00,土日10:00~20:00',
            'regular_holiday' => '火',
            'sort_id' => '1',
        ]);
        ShopDetail::create([
            'shop_id' => '4',
            'tel' => ' 03-6347-2230',
            'business_hours' => '月~金12:00~20:00,土日14:00~20:00',
            'regular_holiday' => '水',
            'sort_id' => '3',
        ]);
    }
}
