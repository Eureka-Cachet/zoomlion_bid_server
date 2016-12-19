<?php

use Illuminate\Database\Seeder;

class Rank extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Rank::class, 6)->create();
    }
}
