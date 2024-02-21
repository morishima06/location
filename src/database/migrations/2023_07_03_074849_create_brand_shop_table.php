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
        Schema::create('brand_shop', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('shop_id')->unsigned()->constrained()->cascadeOnDelete();;
            $table->bigInteger('brand_id')->unsigned()->constrained()->cascadeOnDelete();;
            //外部キー制約
            $table->foreign('shop_id')
                ->references('id')
                ->on('shops')
                ->onDelete('cascade');
            $table->foreign('brand_id')
                ->references('id')
                ->on('brands')
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
        Schema::dropIfExists('brand_shop');
    }
};
