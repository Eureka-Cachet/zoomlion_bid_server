<?php

namespace clocking;

use clocking\Model;

class Module extends Model
{
    protected $fillable = ['location_id', 'leader_id', 'department_id', 'code'];

    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function beneficiaries()
    {
        return $this->hasMany(Beneficiary::class, 'module_id');
    }

    public function leader()
    {
        return $this->belongsTo(Beneficiary::class, 'leader_id');
    }

    public function staff()
    {
        return $this->hasMany(Beneficiary::class, 'module_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function forms()
    {
        return $this->hasMany(Form::class, 'module_id');
    }
}
