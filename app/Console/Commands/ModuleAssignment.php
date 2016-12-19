<?php

namespace clocking\Console\Commands;

use clocking\Department;
use clocking\Location;
use Eureka\Repositories\ModuleRepository;
use Illuminate\Console\Command;

class ModuleAssignment extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sys:assign-module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to Assign Locations to Modules';
    /**
     * @var ModuleRepository
     */
    private $moduleRepository;

    /**
     * Create a new command instance.
     *
     * @param ModuleRepository $moduleRepository
     */
    public function __construct(ModuleRepository $moduleRepository)
    {
        parent::__construct();
        $this->moduleRepository = $moduleRepository;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            Location::all()->each(function($location){
                Department::all()->each(function($department) use($location){
                    $this->assign($location->id, $department->id);
                });
            });
            $this->info("Modules Assigned to Locations Successfully.");
        }catch (\Exception $e){
            $this->error("Error Occurred : " . $e->getMessage());
        }
    }

    private function assign($location_id, $department_id)
    {
        $payload = [
            'department_id' => $department_id,
            'location_id' => $location_id
        ];
        $this->moduleRepository->add_new_module($payload);
    }
}
