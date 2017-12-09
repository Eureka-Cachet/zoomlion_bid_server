<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class TestEvent extends Event implements ShouldBroadcast, ShouldQueue
{
    use SerializesModels;
    /**
     * @var
     */
    private $data;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new event instance.
     *
     * @param $data
     * @param $channel
     */
    public function __construct($data, $channel)
    {
        $this->data = $data;
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

    public function broadcastAS()
    {
        return [
            "TestEvent"
        ];
    }

    public function broadcastWith()
    {
        return $this->data;
    }
}
