<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FormsDataWereGenerated extends Event
{
    public $broadcastQueue = 'broadcast';

    use SerializesModels;
    /**
     * @var array
     */
    public $forms;
    /**
     * @var
     */
    public $generator;

    /**
     * Create a new event instance.
     *
     * @param array $forms
     * @param $generator
     */
    public function __construct(array $forms, $generator)
    {
        $this->forms = $forms;
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

        ];
    }
}
