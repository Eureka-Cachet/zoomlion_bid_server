<?php

namespace clocking;

use clocking\Model;

class Role extends Model
{
    protected $table = 'roles';

    protected $fillable = ['name'];

    public function users(){
        return $this->belongsToMany(User::class, 'user_roles');
    }
}
