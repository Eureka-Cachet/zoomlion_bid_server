<?php

namespace clocking;

use clocking\Model;

class Location extends Model
{
    protected $fillable = ['name', 'district_id', 'code'];

    public function country(){
        return $this->region->country();
    }

    public function modules()
    {
        return $this->hasMany(Module::class);
    }

    public function region(){
        return $this->district->region();
    }

    public function district(){
        return $this->belongsTo(District::class);
    }

//    public function departments(){
//        return $this->belongsToMany(Department::class);
//    }

    public function beneficiaries()
    {
        return $this->hasManyThrough(Beneficiary::class, Module::class);
    }

    public function forms()
    {
        return $this->hasManyThrough(Form::class, Module::class, 'location_id', 'module_id', 'id');
    }
}
