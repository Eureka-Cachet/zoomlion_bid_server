<?php

use Illuminate\Database\Seeder;

class Role extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Role::class, 4)->create();
    }
}
