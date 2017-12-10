<?php

namespace clocking;

use clocking\Model;

class Device extends Model
{
    protected $fillable = ['code', 'connected', 'active'];

    public function supervisor(){
        return $this->hasOne(User::class, 'device_id');
    }

    public function clocks()
    {
        return $this->hasMany(Attendance::class, 'device_id');
    }

    public function logs()
    {
        return $this->hasMany(DeviceHistory::class, 'device_id');
    }
}
