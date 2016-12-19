<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/9/2016
 * Time: 12:29 PM
 */

namespace Eureka\Helpers;


use Cryptomute\Cryptomute;
use Jenssegers\Optimus\Optimus;
use Webpatser\Uuid\Uuid;

class CodeGenerator
{
    private $optimus;

    private $cryptomute;

    const CIPHER = 'aes-128-cbc';
    const BASE_KEY = '0123456789zxcvbn';
    const NUMBER_OF_ROUNDS = 7;

    /**
     * CodeGenerator constructor.
     */
    public function __construct()
    {
        $this->cryptomute = new Cryptomute(self::CIPHER, self::BASE_KEY, self::NUMBER_OF_ROUNDS);
        $this->cryptomute = $this->cryptomute->setValueRange(0, 9999999);
    }

    /**
     * @param int $number   increment
     * @param int $n        number of characters
     * @return string       code to return
     */
    public static function make($number, $n = 7)
    {
        return str_pad((int) $number, $n, "0", STR_PAD_LEFT);
    }

    private function getPass(){
        return '4e70Lt5Nv9jnDExaXltduQUdzU5YcGJWgcxpnJpq';
    }

    private function getIV(){
        return 'Q7bEOykpb3NewI83';
    }

    /**
     * @return int
     */
    public static function random()
    {
        return mt_rand(1000000000, 9999999999);
    }

    /**
     * function to obf the raw serial id
     * @param $r_id
     * @return int
     */
    public function encode($r_id){
        return $this->cryptomute->encrypt((string) $r_id, 10, true, $this->getPass(), $this->getIV());
    }

    /**
     * function to deobf safe id into raw one
     * @param $s_id
     * @return int
     */
    public function decode($s_id){
        return $this->cryptomute->decrypt((string) $s_id, 10, true, $this->getPass(), $this->getIV());
    }

    /**
     * @return string
     */
    public static function uuid(){
        return Uuid::generate(4)->__toString();
    }

    public static function array_utf8_encode($dat)
    {
        if (is_string($dat))
            return utf8_encode($dat);
        if (!is_array($dat))
            return $dat;
        $ret = array();
        foreach ($dat as $i => $d)
            $ret[$i] = self::array_utf8_encode($d);
        return $ret;
    }

    /**
     * @param $classname
     * @return string
     */
    public static function format_class_name($classname)
    {
        if ($pos = strrpos($classname, '\\')) return substr($classname, $pos + 1);
        return $pos;
    }
}