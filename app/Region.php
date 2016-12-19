<?php

namespace clocking;

use clocking\Model;

class Region extends Model
{
    protected $fillable = ['name', 'country_id', 'code'];

    public function country(){
        return $this->belongsTo(Country::class);
    }

    public function districts(){
        return $this->hasMany(District::class);
    }

    public function locations(){
        return $this->hasManyThrough(Location::class, District::class);
    }

    public function clocking()
    {
        return $this->hasManyThrough(Attendance::class, Beneficiary::class);
    }

    public function beneficiaries()
    {
        return $this->hasMany(Beneficiary::class, 'region_id');
    }

    public function forms()
    {
        return $this->hasManyThrough(Form::class, District::class, 'region_id', 'district_id', 'id');
    }
}
