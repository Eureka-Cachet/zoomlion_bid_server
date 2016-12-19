<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/13/2016
 * Time: 9:00 PM
 */

namespace clocking;


use Illuminate\Database\Eloquent\Model as Modell;
use Watson\Rememberable\Rememberable;

abstract class Model extends Modell
{
    use Rememberable;
}