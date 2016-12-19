<?php

use Illuminate\Database\Seeder;

class Country extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Country::class, 1)->create();
    }
}
