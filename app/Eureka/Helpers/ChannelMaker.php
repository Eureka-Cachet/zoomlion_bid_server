<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/9/2016
 * Time: 2:16 PM
 */

namespace Eureka\Helpers;


class ChannelMaker
{
    /**
     * @param $user
     * @return string
     */
    public static function makeFor($user)
    {
        return "staff_{$user->uuid}_channel";
    }

    /**
     * @param $uuid
     * @return string
     */
    public static function make($uuid)
    {
        return "staff_".$uuid.'_channel';
    }
}