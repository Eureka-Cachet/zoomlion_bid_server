<?php

namespace clocking;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Watson\Rememberable\Rememberable;

class User extends Authenticatable
{
    use Rememberable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'password', 'full_name', 'password_updated', 'date_of_birth', 'api_token', 'assistant',
        'role_id', 'region_id', 'uuid', 'location_id', 'district_id', 'region_id', 'active', 'pin', 'device_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles(){
        return $this->belongsToMany(Role::class, 'user_roles', 'user_id', 'role_id');
    }

    public function location(){
        return $this->belongsTo(Location::class, 'location_id');
    }

    public function region()
    {
        return $this->belongsTo(Region::class, 'region_id');
    }

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function device()
    {
        return $this->belongsTo(Device::class, 'device_id');
    }
}
