<?php

namespace clocking\Console\Commands;

use Illuminate\Console\Command;

class SeedAll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-bootstrap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Bootstrap The System Database.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $this->call('db:seed-roles');
            $this->call('db:seed-countries');
            $this->call('db:seed-regions');
            $this->call('db:seed-districts');
            $this->call('db:seed-communities');
            $this->call('db:seed-modules');
            $this->call('db:seed-ranks');
            $this->call('db:seed-links');
            $this->call('db:seed-sys-images');
            $this->call('db:seed-id-types');
            $this->info('App Database has been bootstrapped Successfully.');
        }catch (\Exception $e){
            $this->error("Error Occurred : " . $e->getMessage());
        }
    }
}
