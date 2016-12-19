<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 10:33 AM
 */

namespace Eureka\Helpers;


class ScheduleActivator
{
    private $filename;

    private $frequency;

    private $lines;

    private $lineNumber;

    private $line;

    const YEARLY_LINE = 34;

    const QUARTERLY_LINE = 33;

    const MONTHLY_LINE = 32;

    const WEEKLY_LINE = 31;

    const NIGHTLY_LINE = 30;

    /**
     * @param $frequency
     */
    public function __construct($frequency)
    {
        $this->filename = app_path().'/Console/Kernel.php';
        $this->frequency = $frequency;
    }

    /**
     * this activates the selected schedule
     */
    public function activate()
    {
        try{
            $this->setFileLines()
                ->setLineNumber()
                ->setLine()
                ->uncomment()
                ->save();
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     *  this deactivates the selected schedule
     */
    public function deactivate()
    {
        try{
            $this->setFileLines()
                ->setLineNumber()
                ->setLine()
                ->comment()
                ->save();
        }catch (\Exception $e){
            throw $e;
        }
    }









    /**
     * @return $this
     */
    private function setLineNumber()
    {
        $frequency = strtolower($this->frequency);
        $lineNumber = null;
        switch($frequency){
            case 'yearly':
                $lineNumber = self::YEARLY_LINE;
                break;
            case 'quarterly':
                $lineNumber = self::QUARTERLY_LINE;
                break;
            case 'monthly':
                $lineNumber = self::MONTHLY_LINE;
                break;
            case 'weekly':
                $lineNumber = self::WEEKLY_LINE;
                break;
            case 'nightly':
                $lineNumber = self::NIGHTLY_LINE;
                break;
        }
        $this->lineNumber = $lineNumber;
        return $this;
    }

    /**
     * @return $this
     */
    private function setLine()
    {
        $this->setLineNumber();
        $this->line = $this->lines[$this->lineNumber];
        return $this;
    }

    /**
     * this is comment the specified line
     * @return $this
     */
    private function comment()
    {
        if(! starts_with($this->line, '//') ){
            $this->line = '//'.$this->line;
            $this->lines[$this->lineNumber] = $this->line;
            return $this;
        }
        return $this;
    }

    /**
     * this is uncomment the specified line
     * @return $this
     */
    private function uncomment()
    {
        if( starts_with($this->line, '//') ){
            $this->line = substr($this->line, 2);
            $this->lines[$this->lineNumber] = $this->line;
            return $this;
        }
        return $this;
    }

    /**
     * this extract the file content to an array
     * @return $this
     */
    private function setFileLines()
    {
        $lines = file($this->filename, FILE_IGNORE_NEW_LINES);
        $this->lines = $lines;
        return $this;
    }

    /**
     * this saves the file
     */
    private function save()
    {
        file_put_contents($this->filename, implode("\n", $this->lines));
    }
}