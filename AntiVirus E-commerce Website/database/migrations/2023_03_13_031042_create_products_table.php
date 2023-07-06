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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name',255)->nullable();
            $table->string('image',255)->nullable();
            $table->text('description')->nullable();
            $table->decimal('price',10,2);
            $table->text('link')->nullable();
            $table->biginteger('category_id')->unsigned();
            $table->biginteger('event_id')->unsigned()->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('event_id')->references('id')->on('events');
            $table->decimal('event_price',10,2)->nullable();
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
        Schema::dropIfExists('products');
    }
};
