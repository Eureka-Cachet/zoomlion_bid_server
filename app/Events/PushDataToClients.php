<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PushDataToClients extends Event implements ShouldQueue, ShouldBroadcast
{
    public $broadcastQueue = 'broadcast';

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
     * @var
     */
    private $event;

    /**
     * Create a new event instance.
     *
     * @param $data
     * @param $channel
     * @param $event
     */
    public function __construct($data, $channel, $event)
    {
        $this->data = $data;
        $this->channel = $channel;
        $this->event = $event;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [$this->channel];
    }

    /**
     * @return mixed
     */
    public function broadcastAs()
    {
        return $this->event;
    }

    /**
     * @return mixed
     */
    public function broadcastWith()
    {
        return [$this->data];
    }
}
