<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SupervisorHasLoggedIn extends Event implements ShouldQueue
{
    use SerializesModels;
    /**
     * @var
     */
    public $supervisor_id;

    /**
     * Create a new event instance.
     *
     * @param $supervisor_id
     */
    public function __construct($supervisor_id)
    {
        //
        $this->supervisor_id = $supervisor_id;
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
}
