<?php

namespace clocking\Console\Commands;

use clocking\Department;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SeedModules extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-modules';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Seed The System Modules Into the Database.';
    /**
     * @var Department
     */
    private $department;

    /**
     * Create a new command instance.
     *
     * @param Department $department
     */
    public function __construct(Department $department)
    {
        parent::__construct();
        $this->department = $department;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $this->wipe_table_first();
            $departments = $this->get_them();
            $this->seed($departments);
            $this->info('Departments Table Seeded Successfully !');
        }catch (\Exception $e){
            $this->error("Error Occurred " . $e->getMessage());
        }
    }

    private function wipe_table_first()
    {
        DB::table('departments')->truncate();
    }

    private function get_them()
    {
        return [
            [
                'name' => 'YEA',
                'code' => '01'
            ],
            [
                'name' => 'SANI GUARD',
                'code' => '02'
            ],
            [
                'name' => 'ECO BRIGADE',
                'code' => '03'
            ],
            [
                'name' => 'VOLTA LAKE',
                'code' => '04'
            ],
            [
                'name' => 'AFFORESTATION',
                'code' => '05'
            ],
            [
                'name' => 'NAMCOP',
                'code' => '06'
            ]
        ];
    }

    private function seed($departments)
    {
        foreach($departments as $department){
            $this->department->create($department);
        }
    }
}
