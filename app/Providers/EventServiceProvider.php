<?php

namespace clocking\Providers;

use clocking\Events\BackupFailed;
use clocking\Events\BackupRestoreFailed;
use clocking\Events\BackupRestoreWasSuccessful;
use clocking\Events\BackupWasSuccessful;
use clocking\Events\BeneficiaryAddingFailed;
use clocking\Events\BeneficiaryHasClocked;
use clocking\Events\CaptureBioData;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsDataWereGenerated;
use clocking\Events\FormsTemplateReady;
use clocking\Events\PushDataToClients;
use clocking\Events\SupervisorHasLoggedIn;
use clocking\Events\TestEvent;
use clocking\Listeners\BuildFormTemplate;
use clocking\Listeners\DispatchUpdatedDataJob;
use clocking\Listeners\NotifyBackupFailure;
use clocking\Listeners\NotifyBackupSuccess;
use clocking\Listeners\NotifyFormGeneratorForFailure;
use clocking\Listeners\NotifyGenerator;
use clocking\Listeners\NotifyRestoreFailure;
use clocking\Listeners\NotifyRestoreSuccess;
use clocking\Listeners\UpdateHistoryLogs;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        BackupWasSuccessful::class => [
            NotifyBackupSuccess::class,
        ],
        BackupFailed::class => [
            NotifyBackupFailure::class,
        ],
        BackupRestoreFailed::class => [
            NotifyRestoreFailure::class,
        ],
        BackupRestoreWasSuccessful::class => [
            NotifyRestoreSuccess::class,
        ],
        FormsDataWereGenerated::class => [
            BuildFormTemplate::class,
        ],
        FormsTemplateReady::class => [
            NotifyGenerator::class,
        ],
        FormsDataGenerationFailed::class => [
            NotifyFormGeneratorForFailure::class,
        ],
        BeneficiaryWasCreated::class => [
            DispatchUpdatedDataJob::class
        ],
        BeneficiaryAddingFailed::class => [],
        SupervisorHasLoggedIn::class => [
            UpdateHistoryLogs::class
        ],
        BeneficiaryHasClocked::class => [
            DispatchUpdatedDataJob::class
        ],
        PushDataToClients::class => []
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        //
    }
}
