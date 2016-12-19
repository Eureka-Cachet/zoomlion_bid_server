<?php

namespace clocking\Console\Commands;

use clocking\Role;
use clocking\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Webpatser\Uuid\Uuid;

class SeedRoles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-roles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Seed System Users Roles Into the database.';
    /**
     * @var Role
     */
    private $role;

    /**
     * Create a new command instance.
     *
     * @param Role $role
     */
    public function __construct(Role $role)
    {
        parent::__construct();
        $this->role = $role;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $this->wipe_the_table();
            $roles = $this->get_them();
            $this->seed($roles);
            $this->makeSysAdmin();
            $this->info("Roles Seeded Successfully.");
        }catch (\Exception $e){
            $this->error('Error Occurred : ' . $e->getMessage());
        }
    }

    private function wipe_the_table()
    {
        DB::table('roles')->truncate();
        User::where('role_id', 1)->first()->delete();
    }

    /**
     * @return array
     */
    private function get_them()
    {
        return [
            [
                'name' => 'SYSADMIN'
            ],[
                'name' => 'OPERATION'
            ],[
                'name' => 'AUDIT'
            ],[
                'name' => 'ACCOUNT'
            ],[
                'name' => 'IT'
            ],[
                'name' => 'SUPERVISOR'
            ],[
                'name' => 'TEAM LEADER'
            ],[
                'name' => 'MANAGEMENT'
            ]
        ];
    }

    /**
     * @param $roles
     */
    private function seed($roles)
    {
        foreach($roles as $role){
            $this->role->create($role);
        }
    }

    /**
     * Just Creating a development admin user
     */
    private function makeSysAdmin()
    {
        User::create([
            'username' => 'admin',
            'region_id' => '3',
            'uuid' => Uuid::generate(4),
            'password' => bcrypt('admin'),
            'role_id' => 1,
            'full_name' => 'System Administrator',
            'date_of_birth' => Carbon::now()
        ]);
    }
}
