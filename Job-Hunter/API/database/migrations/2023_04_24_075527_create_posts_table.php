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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->biginteger('category_id')->unsigned();
            $table->biginteger('job_category_id')->unsigned();
            $table->biginteger('company_id')->unsigned();
            $table->boolean('is_active')->default(true);
            $table->string('job_name',255);
            $table->string('salary',255);
            $table->text('job_description');
            $table->text('role');
            $table->text('requirement');
            $table->text('benefit');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('job_category_id')->references('id')->on('job_categories');
            $table->foreign('company_id')->references('id')->on('companies');
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
        Schema::dropIfExists('posts');
    }
};
