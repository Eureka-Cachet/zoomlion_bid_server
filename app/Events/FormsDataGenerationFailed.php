<?php

namespace clocking\Events;

use clocking\Events\Event;
use Eureka\Helpers\ChannelMaker;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FormsDataGenerationFailed extends Event implements ShouldBroadcast, ShouldQueue
{
    use SerializesModels;
    /**
     * @var
     */
    private $generator;
    /**
     * @var
     */
    private $error;

    /**
     * Create a new event instance.
     * @param $generator
     * @param $error
     */
    public function __construct($generator, $error)
    {
        $this->generator = $generator;
        $this->error = $error;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [
            ChannelMaker::makeFor($this->generator)
        ];
    }

    public function broadcastAs()
    {
        return "FormsDataGenerationFailed";
    }

    public function broadcastWith()
    {
        return [
            'error' => $this->error
        ];
    }
}
