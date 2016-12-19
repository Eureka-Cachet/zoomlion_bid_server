<?php

namespace clocking;

use clocking\Model;

class DeviceHistory extends Model
{
    protected $fillable = ['device_id', 'connected_time', 'disconnected_time', 'uuid'];

    public function device()
    {
        return $this->belongsTo(Device::class, 'device_id');
    }
}
