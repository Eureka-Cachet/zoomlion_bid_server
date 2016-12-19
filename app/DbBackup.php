<?php

namespace clocking;

use clocking\Model;

class DbBackup extends Model
{
    protected $fillable = ['uuid', 'path', 'name'];
}
