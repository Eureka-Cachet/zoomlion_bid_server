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
                'name' => 'SWEEPERS',
                'code' => strtoupper(str_random(3)).'02'
            ],
            [
                'name' => 'RIDERS',
                'code' => strtoupper(str_random(3)).'03'
            ],
            [
                'name' => 'GUARDS',
                'code' => strtoupper(str_random(3)).'04'
            ],[
                'name' => 'GANG LEADER',
                'code' => strtoupper(str_random(3)).'05'
            ],[
                'name' => 'BRIGADERS',
                'code' => strtoupper(str_random(3)).'06'
            ],[
                'name' => 'SUPERVISORS',
                'code' => strtoupper(str_random(3)).'07'
            ],[
                'name' => 'PLANTERS',
                'code' => strtoupper(str_random(3)).'08'
            ],
            [
                'name' => 'SPRAYERS',
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
