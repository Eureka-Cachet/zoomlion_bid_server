<?php

namespace clocking\Console\Commands;

use clocking\Department;
use clocking\Rank;
use Illuminate\Console\Command;

class SeedLinks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-links';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Seed Relations between models';
    /**
     * @var Rank
     */
    private $rank;
    /**
     * @var Department
     */
    private $department;

    /**
     * Create a new command instance.
     *
     * @param Rank $rank
     * @param Department $department
     */
    public function __construct(Rank $rank, Department $department)
    {
        parent::__construct();
        $this->rank = $rank;
        $this->department = $department;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->create_relations();
    }

    private function create_relations()
    {
        $this->department->find(1)->ranks()->attach([1,2,3]);
        $this->department->find(2)->ranks()->attach([1,4]);
        $this->department->find(3)->ranks()->attach([5,6]);
        $this->department->find(4)->ranks()->attach([5,6]);
        $this->department->find(5)->ranks()->attach([7,5,8]);
        $this->department->find(6)->ranks()->attach([5,9]);
    }
}
