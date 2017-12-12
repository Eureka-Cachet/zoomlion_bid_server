<?php

namespace clocking\Console\Commands;

use clocking\Identification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SeedIdentificationTypes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-identification-types';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to seed Ghana Identification types into the system';
    /**
     * @var Identification
     */
    private $identification;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Identification $identification)
    {
        parent::__construct();
        $this->identification = $identification;
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
            $id_types = $this->get_them();
            $this->seed($id_types);
            $this->info("ID Types Seeded Successfully.");
        }catch (\Exception $e){
            $this->error('Error Occurred : ' . $e->getMessage());
        }
    }

    private function wipe_the_table()
    {
        DB::table('identifications')->truncate();
    }

    private function get_them()
    {
        return [
            ["type" => "GHANA CARD (National ID)"],
            ["type" => "VOTERS ID"],
            ["type" => "HEALTH INSURANCE"],
            ["type" => "DRIVERS LICENSE"],
            ["type" => "SSNIT CARD"],
            ["type" => "PASSPORT"]
        ];
    }

    private function seed($id_types)
    {
        foreach ($id_types as $id_type){
            $this->identification->create($id_type);
        }
    }

}
