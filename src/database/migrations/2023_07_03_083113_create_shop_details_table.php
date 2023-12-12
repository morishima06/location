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
        Schema::create('shop_details', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('shop_id')->unsigned();
            $table->string('tel');
            $table->string('business_hours');
            $table->string('regular_holiday');
            $table->unsignedBigInteger('sort_id');

            $table->foreign('shop_id')
            ->references('id')
            ->on('shops')
            ->onDelete('cascade');


            $table->foreign('sort_id')
            ->references('id')
            ->on('shop_sorts')
            ->onDelete('cascade');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shop_details');
    }
};
