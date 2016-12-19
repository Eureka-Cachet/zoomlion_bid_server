<?php

namespace clocking;

class Beneficiary extends Model
{
    protected $fillable = ['form_id', 'uuid', 'full_name', 'date_of_birth', 'bid', 'surname', 'forenames',
        'gender', 'phone_number', 'address', 'module_id', 'rank_id', 'account_number', 'location_id',
    'bank_name', 'bank_branch', 'date_of_employment', 'allowance', 'active', 'region_id', 'district_id',
        'identification_id', 'identification_number', 'valid'];

    public function form(){
        return $this->belongsTo(Form::class, 'form_id');
    }

    public function fingerprints(){
        return $this->hasMany(Fingerprint::class, 'beneficiary_id');
    }

    public function module(){
        return $this->belongsTo(Module::class);
    }

    public function region()
    {
        return $this->belongsTo(Region::class, 'region_id');
    }

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }

    public function my_module()
    {
        return $this->hasOne(Module::class, 'leader_id');
    }

    public function picture(){
        return $this->hasOne(Picture::class, 'beneficiary_id');
    }

    public function rank(){
        return $this->belongsTo(Rank::class, 'rank_id');
    }

    public function attendances(){
        return $this->hasMany(Attendance::class, 'beneficiary_id');
    }

    public function identification()
    {
        return $this->belongsTo(Identification::class, 'identification_id');
    }
}
