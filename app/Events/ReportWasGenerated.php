<?php

namespace clocking\Events;

use clocking\Events\Event;
use Eureka\Helpers\ChannelMaker;
use Illuminate\Foundation\Auth\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ReportWasGenerated extends Event implements ShouldBroadcast
{
    public $broadcastQueue = 'broadcast';

    use SerializesModels;
    /**
     * @var
     */
    private $file_name;
    /**
     * @var
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @param $file_name
     * @param $user
     */
    public function __construct($file_name, User $user)
    {
        $this->file_name = $file_name;
        $this->user = $user;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [
            ChannelMaker::makeFor($this->user)
        ];
    }

    /**
     * @return string
     */
    public function broadcastAs()
    {
        return "ReportWasGenerated";
    }

    /**
     * @return array
     */
    public function broadcastWith()
    {
        return [
            "file_name" => $this->file_name
        ];
    }
}
