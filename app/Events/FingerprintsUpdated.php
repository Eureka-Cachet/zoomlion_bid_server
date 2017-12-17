<?php

namespace clocking\Events;

use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FingerprintsUpdated extends Event implements ShouldQueue, ShouldBroadcast
{
    public $broadcastQueue = 'broadcast';

    use SerializesModels;
    /**
     * @var
     */
    private $fingerprints;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new event instance.
     *
     * @param $fingerprints
     * @param $channel
     */
    public function __construct($fingerprints, $channel)
    {
        $this->fingerprints = $fingerprints;
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

    public function broadcastAs()
    {
        return "UPDATED";
    }

    public function broadcastWith()
    {
        return ["items" => $this->fingerprints];
    }
}
