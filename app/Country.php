<?php

namespace clocking;

use clocking\Model;

class Country extends Model
{
    protected $fillable = ['name'];

    public function regions(){
        return $this->hasMany(Region::class);
    }

    public function districts(){
        return $this->hasManyThrough(District::class, Region::class);
    }

    public function beneficiaries()
    {
        return $this->hasManyThrough(
            Beneficiary::class,
            Region::class,
            "country_id",
            "region_id",
            "id"
        );
    }

    public function forms()
    {
        return $this->hasManyThrough(
            Form::class,
            Region::class,
            'country_id',
            'region_id',
            'id');
    }
}
