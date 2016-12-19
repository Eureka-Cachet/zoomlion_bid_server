<?php

namespace clocking\Events;

use clocking\DbBackup;
use clocking\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BackupRestoreFailed extends Event implements ShouldBroadcast
{
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
     * @param DbBackup $backup
     * @param $channel
     */
    public function __construct(DbBackup $backup = null, $channel)
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
        return [];
    }

    public function broadcastWith()
    {
        return [
            $this->channel
        ];
    }

    public function broadcastAs()
    {
        return "BackupRestoreFailed";
    }
}
