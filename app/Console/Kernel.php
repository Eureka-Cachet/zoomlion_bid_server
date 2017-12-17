<?php

namespace clocking\Console;

use clocking\Console\Commands\CleanBackups;
use clocking\Console\Commands\DatabaseBackup;
use clocking\Console\Commands\DatabaseRestore;
use clocking\Console\Commands\ModuleAssignment;
use clocking\Console\Commands\ResetBackToBootstrapState;
use clocking\Console\Commands\SeedAll;
use clocking\Console\Commands\SeedCommunities;
use clocking\Console\Commands\SeedCountries;
use clocking\Console\Commands\SeedCountryIdentificationTypes;
use clocking\Console\Commands\SeedDistricts;
use clocking\Console\Commands\SeedIdentificationTypes;
use clocking\Console\Commands\SeedLinks;
use clocking\Console\Commands\SeedModules;
use clocking\Console\Commands\SeedOldBeneficiaries;
use clocking\Console\Commands\SeedOtherImages;
use clocking\Console\Commands\SeedRanks;
use clocking\Console\Commands\SeedRegions;
use clocking\Console\Commands\SeedRoles;
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
        DatabaseBackup::class, DatabaseRestore::class, SeedOtherImages::class, ResetBackToBootstrapState::class,
        SeedRegions::class, SeedDistricts::class, CleanBackups::class,
        SeedCommunities::class, SeedRanks::class, SeedCountries::class, SeedIdentificationTypes::class,
        SeedRoles::class, SeedModules::class, SeedOldBeneficiaries::class,
        SeedLinks::class, SeedAll::class, ModuleAssignment::class, SeedCountryIdentificationTypes::class
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