<?php

namespace clocking\Console\Commands;

use DB;
use Illuminate\Console\Command;

class ResetBackToBootstrapState extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sys:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset System Back db:seed-bootstrap state';

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
        DB::table("pictures")->truncate();
        DB::table("beneficiaries")->truncate();
        DB::table("forms")->truncate();
        DB::table("devices")->truncate();
        DB::table("attendances")->truncate();
        DB::table("device_histories")->truncate();
        DB::table("fingerprints")->truncate();
        DB::table("device_mappings")->truncate();
        DB::table("user_roles")->truncate();
        DB::table("activity_log")->truncate();

        $this->call("db:seed-roles");
    }
}
