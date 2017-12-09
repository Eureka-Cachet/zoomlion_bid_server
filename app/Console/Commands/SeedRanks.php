<?php

namespace clocking\Console\Commands;

use clocking\Rank;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SeedRanks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-ranks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Seed The System Ranks Into the Database.';
    /**
     * @var Rank
     */
    private $rank;

    /**
     * Create a new command instance.
     *
     * @param Rank $rank
     */
    public function __construct(Rank $rank)
    {
        parent::__construct();
        $this->rank = $rank;
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
            $ranks = $this->get_them();
            $this->seed($ranks);
            $this->info('Ranks Table Seeded Successfully !');
        }catch (\Exception $e){
            $this->error('Error Occurred : ' . $e->getMessage());
        }
    }

    private function wipe_table_first()
    {
        DB::table('ranks')->truncate();
    }

    private function get_them()
    {
        return [
            [
                'name' => 'TEAM LEADER',
                'code' => strtoupper(str_random(3)).'01'
            ],
            [
                'name' => 'SWEEPER',
                'code' => strtoupper(str_random(3)).'02'
            ],
            [
                'name' => 'RIDER',
                'code' => strtoupper(str_random(3)).'03'
            ],
            [
                'name' => 'GUARD',
                'code' => strtoupper(str_random(3)).'04'
            ],[
                'name' => 'GANG LEADER',
                'code' => strtoupper(str_random(3)).'05'
            ],[
                'name' => 'BRIGADE',
                'code' => strtoupper(str_random(3)).'06'
            ],[
                'name' => 'SUPERVISOR',
                'code' => strtoupper(str_random(3)).'07'
            ],[
                'name' => 'PLANTER',
                'code' => strtoupper(str_random(3)).'08'
            ],
            [
                'name' => 'SPRAYER',
                'code' => strtoupper(str_random(3)).'09'
            ],
        ];
    }

    private function seed($ranks)
    {
        foreach($ranks as $rank){
            $this->rank->create($rank);
        }
    }
}
