<?php

namespace clocking\Console;

use clocking\Console\Commands\DatabaseRestore;
use clocking\Console\Commands\SeedIdentificationTypes;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\DatabaseBackup::class, DatabaseRestore::class, Commands\SeedOtherImages::class,
        Commands\SeedRegions::class, Commands\SeedDistricts::class, Commands\CleanBackups::class,
        Commands\SeedCommunities::class, Commands\SeedRanks::class, Commands\SeedCountries::class, SeedIdentificationTypes::class,
        Commands\SeedRoles::class, Commands\SeedModules::class, Commands\SeedOldBeneficiaries::class,
        Commands\SeedLinks::class, Commands\SeedAll::class, Commands\ModuleAssignment::class, Commands\SeedCountryIdentificationTypes::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
         $schedule->command('sys:db_backup')->daily();
         $schedule->command('sys:db_backup')->weekly();
         $schedule->command('sys:db_backup')->monthly();
         $schedule->command('sys:db_backup')->quarterly();
         $schedule->command('sys:db_backup')->yearly();


        $schedule->command('sys:clean-backups')->quarterly();
    }
}