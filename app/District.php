<?php

namespace clocking;

use clocking\Model;

class District extends Model
{
    protected $fillable = ['name', 'region_id', 'code'];

    public function country(){
        return $this->region->country();
    }

    public function region(){
        return $this->belongsTo(Region::class);
    }

    public function locations(){
        return $this->hasMany(Location::class);
    }

    public function departments(){
        return $this->hasManyThrough(Department::class, Location::class);
    }

    public function beneficiaries()
    {
        return $this->hasMany(Beneficiary::class, 'district_id');
    }

    public function forms()
    {
        return $this->hasManyThrough(Form::class, Location::class, 'district_id', 'location_id', 'id');
    }

    public function users()
    {
        return $this->hasMany(User::class, 'district_id');
    }
}
