<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CaptureBioData extends Event implements ShouldBroadcast, ShouldQueue
{
    public $broadcastQueue = 'broadcast';

    use SerializesModels;
    /**
     * @var
     */
    private $channel;
    /**
     * @var
     */
    private $bid;

    /**
     * Create a new event instance.
     *
     * @param $channel
     * @param $bid
     */
    public function __construct($channel, $bid)
    {
        $this->channel = $channel;
        $this->bid = $bid;
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
        return "CaptureBioData";
    }

    /**
     * @return array
     */
    public function broadcastWith()
    {
        return [
            "bid" => $this->bid
        ];
    }
}
