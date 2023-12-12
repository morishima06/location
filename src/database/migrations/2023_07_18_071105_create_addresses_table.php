<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->bigInteger('shop_id')->unsigned();
            $table->string('zip_code');
            $table->string('state');
            $table->string('state_code');
            $table->string('city');
            $table->string('address');
            $table->string('nearest_station');
            $table->bigInteger('area_id')->unsigned();
            
            $table->timestamps();
            
            //外部キー制約
            $table->foreign('shop_id')
            ->references('id')
            ->on('shops')
            ->onDelete('cascade');

            //外部キー制約
            $table->foreign('area_id')
            ->references('id')
            ->on('areas')
            ->onDelete('cascade');
            


        });

        

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
