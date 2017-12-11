<?php

namespace clocking\Events;

use clocking\DbBackup;
use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BackupWasSuccessful extends Event implements ShouldBroadcast, ShouldQueue
{
    public $broadcastQueue = 'broadcast';

    use SerializesModels;
    /**
     * @var DbBackup
     */
    public $backup;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new event instance.
     *
     * @param $backup
     * @param $channel
     */
    public function __construct($backup, $channel)
    {
        $this->backup = $backup;
        $this->channel = $channel;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [
            $this->channel
        ];
    }

    /**
     * @return string
     */
    public function broadcastAs()
    {
        return "BackupWasSuccessful";
    }
}
