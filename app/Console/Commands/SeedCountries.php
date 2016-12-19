<?php

namespace clocking\Console\Commands;

use clocking\Country;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SeedCountries extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-countries';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to Seed Counties into the Database.';
    /**
     * @var Country
     */
    private $country;

    /**
     * Create a new command instance.
     *
     * @param Country $country
     */
    public function __construct(Country $country)
    {
        parent::__construct();
        $this->country = $country;
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
            $countries = $this->get_them();
            $this->seed($countries);
            $this->info("Countries Have been seeded successfully.");
        }catch (\Exception $e){
            $this->error("Error Occurred : " .+ $e->getMessage());
        }
    }

    private function get_them()
    {
        return [
            [
                'name' => 'Ghana'
            ]
        ];
    }

    private function wipe_store_first()
    {
        DB::table('countries')->truncate();
    }

    private function seed($countries)
    {
        foreach ($countries as $country) {
            $this->country->create($country);
        }

    }
}
