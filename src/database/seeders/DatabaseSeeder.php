<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        // $this->call(ShopTableSeeder::class);
        // $this->call(BrandTableSeeder::class);
        // $this->call(ShopSortTableSeeder::class);
        // $this->call(ShopDetailTableSeeder::class);
        // $this->call(AreaTableSeeder::class);

        $this->call(AddressTableSeeder::class);


        $this->call(BrandShopTableSeeder::class);



        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
