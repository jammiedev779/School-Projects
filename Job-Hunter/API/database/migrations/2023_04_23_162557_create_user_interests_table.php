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
        Schema::create('user_interests', function (Blueprint $table) {
            $table->id();
            $table->biginteger('job_category_id')->unsigned();
            $table->biginteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('job_category_id')->references('id')->on('job_categories');
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
        Schema::dropIfExists('user_interests');
    }
};
