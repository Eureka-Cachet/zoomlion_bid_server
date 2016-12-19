<?php

namespace clocking\Events;

use clocking\Events\Event;
use Eureka\Helpers\ChannelMaker;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FormsTemplateReady extends Event implements ShouldBroadcast, ShouldQueue
{
    use SerializesModels;
    /**
     * @var
     */
    public $link;
    /**
     * @var
     */
    public $generator;

    /**
     * Create a new event instance.
     * @param $link
     * @param $generator
     */
    public function __construct($link, $generator)
    {
        $this->link = $link;
        $this->generator = $generator;
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

    public function broadcastWith()
    {
        return [
            'link' => $this->link
        ];
    }

    public function broadcastAs()
    {
        return "FormsTemplateReady";
    }
}
