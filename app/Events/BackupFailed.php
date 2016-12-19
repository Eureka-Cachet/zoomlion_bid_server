<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BackupFailed extends Event implements ShouldBroadcast
{
    use SerializesModels;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new event instance.
     * @param $channel
     */
    public function __construct($channel)
    {
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
    public function broadcastAS()
    {
        return "BackupFailed";
    }
}
