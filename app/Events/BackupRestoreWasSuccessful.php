<?php

namespace clocking\Events;

use clocking\DbBackup;
use clocking\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Support\Collection;

class BackupRestoreWasSuccessful extends Event implements ShouldBroadcast
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
     * @param Collection $backup
     * @param $channel
     */
    public function __construct(Collection $backup, $channel)
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
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'dump_name' => explode('.', $this->backup->get('name'))[0],
            'date_time' => $this->backup->get('date_time')
        ];
    }

    public function broadcastAs()
    {
        return "BackupRestoreWasSuccessful";
    }
}
