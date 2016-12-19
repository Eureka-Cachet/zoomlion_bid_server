<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBeneficiariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beneficiaries', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('uuid');
            $table->string('full_name')->nullable();
            $table->integer('gender')->nullable();
            $table->integer('module_id')->index()->unsigned()->nullable();
            $table->integer('region_id')->index()->unsigned()->nullable();
            $table->integer('district_id')->index()->unsigned()->nullable();
            $table->integer('location_id')->index()->unsigned()->nullable();
            $table->integer('form_id')->index()->unsigned()->nullable();
            $table->integer('rank_id')->index()->unsigned()->nullable();
            $table->timestamp('date_of_birth')->nullable();
            $table->timestamp('date_of_employment')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('address')->nullable();
            $table->string('account_number')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bank_branch')->nullable();
            $table->float('allowance')->nullable();
            $table->boolean('active')->default(true);
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
        Schema::drop('beneficiaries');
    }
}
