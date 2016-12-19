<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BeneficiaryAddingFailed extends Event implements ShouldBroadcast, ShouldQueue
{
    use SerializesModels;
    /**
     * @var
     */
    private $message;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new event instance.
     *
     * @param $message
     * @param $channel
     */
    public function __construct($message, $channel)
    {
        $this->message = $message;
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
     * @return mixed
     */
    public function broadcastAS()
    {
        return "BeneficiaryAddingFailed";
    }

    /**
     * @return array
     */
    public function broadcastWith()
    {
        return [
            "data" => $this->message
        ];
    }
}
