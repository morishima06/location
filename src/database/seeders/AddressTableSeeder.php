<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Address;

class AddressTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Address::create([
            'shop_id' => '1',
            'zip_code' => '211-009',
            'state' => '東京都',
            'city' => '港区',
            'address' => '南青山５丁目１２−２４ シャトー東洋南青山',
            'area_id' => '1',
            'state_code' => '1',
            'nearest_station' => '東急東横線自由ヶ丘駅'
        ]);
        Address::create([
            'shop_id' => '2',
            'zip_code' => '211-023',
            'state' => '東京都',
            'city' => '新宿区',
            'address' => '新宿3-27-4',
            'area_id' => '1',
            'state_code' => '1',
            'nearest_station' => 'JR山手線新宿駅'

        ]);
        Address::create([
            'shop_id' => '3',
            'zip_code' => '220-0005',
            'state' => '神奈川県',
            'city' => '横浜市',
            'address' => ' 西区南幸２丁目１５−１３ 2F 202',
            'area_id' => '2',
            'state_code' => '2',
            'nearest_station' => '東急東横線横浜駅'

        ]);
        Address::create([
            'shop_id' => '4',
            'zip_code' => '211-1119',
            'state' => '東京都',
            'city' => '豊島区',
            'address' => '西池袋1-1-25 東武百貨店池袋店5F',
            'area_id' => '1',
            'state_code' => '1',
            'nearest_station' => 'JR池袋駅'

        ]);
        Address::create([
            'shop_id' => '5',
            'zip_code' => '211-0012',
            'state' => '東京都',
            'city' => '渋谷区',
            'address' => '道玄坂1丁目2-番3号 東急プラザ 2F',
            'area_id' => '1',
            'state_code' => '1',
            'nearest_station' => 'JR山手線渋谷駅'

        ]);

    }
}
