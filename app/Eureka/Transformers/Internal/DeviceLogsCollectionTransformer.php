<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/3/16
 * Time: 11:57 AM
 */

namespace Eureka\Transformers\Internal;


use Carbon\Carbon;
use clocking\DeviceHistory;
use League\Fractal\TransformerAbstract;

class DeviceLogsCollectionTransformer extends TransformerAbstract
{
    public function transform(DeviceHistory $history)
    {
        return [
            "date" => $this->get_date($history),
            "connected_time" => $this->get_connect_time($history),
            "disconnected_time" => $this->get_disconnect_time($history)
        ];
    }

    /**
     * @param DeviceHistory $history
     * @return string
     */
    private function get_date(DeviceHistory $history)
    {
        return Carbon::parse($history->connected_time)->toDateString();
    }

    private function get_connect_time(DeviceHistory $history)
    {
        return Carbon::parse($history->connected_time)->toTimeString();
    }

    private function get_disconnect_time(DeviceHistory $history)
    {
        if(Carbon::parse($history->connected_time)->eq(Carbon::parse($history->disconnected_time)))
            return "Connected";
        return Carbon::parse($history->disconnected_time)->toTimeString();
    }
}