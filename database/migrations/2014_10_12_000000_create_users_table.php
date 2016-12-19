<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uuid');
            $table->string('full_name');
            $table->timestamp('date_of_birth')->nullable();
            $table->string('username')->unique();
            $table->string('password');
            $table->boolean('password_updated')->default(false);
            $table->integer('role_id')->nullable()->index()->unsigned();
            $table->integer('region_id')->nullable()->index()->unsigned();
            $table->integer('location_id')->nullable()->index()->unsigned();
            $table->integer('district_id')->nullable()->index()->unsigned();
            $table->boolean('active')->default(true);
            $table->rememberToken();
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
        Schema::drop('users');
    }
}
