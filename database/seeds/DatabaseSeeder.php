<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    protected $to_truncate = ['ranks', 'departments'];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->to_truncate as $table){
            DB::table($table)->truncate();
        }
         $this->call(Role::class);
//         $this->call(Country::class);
//         $this->call(Region::class);
//         $this->call(District::class);
//         $this->call(Location::class);
        $this->call(Department::class);
        $this->call(Rank::class);
    }
}
