<?php

namespace clocking\Providers;

use clocking\Beneficiary;
use clocking\Events\Event;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BeneficiaryWasCreated extends Event implements ShouldQueue, ShouldBroadcast
{
    use SerializesModels;
    /**
     * @var Beneficiary
     */
    private $beneficiary;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new event instance.
     *
     * @param Beneficiary $beneficiary
     * @param $channel
     */
    public function __construct(Beneficiary $beneficiary, $channel)
    {
        $this->beneficiary = $beneficiary;
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
     * @return string
     */
    public function broadcastAS()
    {
        return "BeneficiaryCreated";
    }

    /**
     * @return array
     */
    public function broadcastWith()
    {
        return [$this->beneficiary->full_name];
    }
}
