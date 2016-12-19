<?php

namespace clocking\Console\Commands;

use clocking\Region;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SeedRegions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-regions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Seed Ghana Regions Into The Database.';
    /**
     * @var Region
     */
    private $region;

    /**
     * Create a new command instance.
     * @param Region $region
     */
    public function __construct(Region $region)
    {
        parent::__construct();
        $this->region = $region;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $this->wipe_store_first();
            $regions = $this->get_them();
            $this->seed($regions);
            $this->info("Regions Table Seeded Successfully !");
        }catch (\Exception $e){
            $this->error("Error Occurred ! " . $e->getMessage());
        }
    }

    /**
     * @return array
     */
    private function get_them()
    {
        return [
            array("code"=> "01","name"=>"WESTERN","country_id"=>1),
            array("code"=>"02","name"=>"CENTRAL","country_id"=>1),
            array("code"=>"03","name"=>"GREATER ACCRA","country_id"=>1),
            array("code"=>"04","name"=>"VOLTA","country_id"=>1),
            array("code"=>"05","name"=>"EASTERN","country_id"=>1),
            array("code"=>"06","name"=>"ASHANTI","country_id"=>1),
            array("code"=>"07","name"=>"BRONG AHAFO","country_id"=>1),
            array("code"=>"08","name"=>"NORTHERN","country_id"=>1),
            array("code"=>"09","name"=>"UPPER EAST","country_id"=>1),
            array("code"=>"10","name"=>"UPPER WEST","country_id"=>1)
        ];
    }

    /**
     * this removes everything from the table
     */
    private function wipe_store_first()
    {
        DB::table('regions')->truncate();
    }

    /**
     * @param $regions
     */
    private function seed($regions)
    {
        foreach ($regions as $region) {
            $this->region->create($region);
        }

    }
}
