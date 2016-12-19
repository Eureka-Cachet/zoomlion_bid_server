<?php

namespace clocking\Console\Commands;

use clocking\Identification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SeedCountryIdentificationTypes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-country-id-types';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to seed Ghana id types';
    /**
     * @var Identification
     */
    private $identification;

    /**
     * Create a new command instance.
     *
     * @param Identification $identification
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
            $this->wipe_table_first();
            $ids = $this->get_them();
            $this->seed($ids);
            $this->info('Identification Table Seeded Successfully !');
        }catch (\Exception $e){
            $this->error('Error Occurred : ' . $e->getMessage());
        }
    }

    private function get_them()
    {
        return [
            [
                'type' => 'N H I S',
            ],
            [
                'type' => 'NATIONAL ID',
            ],
            [
                'type' => 'DRIVING LICENSE',
            ],
            [
                'type' => 'PASSPORT',
            ],
            [
                'type' => 'VOTER ID',
            ]
        ];
    }

    private function wipe_table_first()
    {
        DB::table('identifications')->truncate();
    }

    private function seed($ids)
    {
        foreach($ids as $id){
            $this->identification->create($id);
        }
    }
}
