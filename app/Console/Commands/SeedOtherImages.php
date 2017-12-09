<?php

namespace clocking\Console\Commands;

use clocking\SysImages;
use Illuminate\Console\Command;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;

class SeedOtherImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-sys-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to convert system images to base64 data type';
    /**
     * @var SysImages
     */
    private $sysImages;

    /**
     * Create a new command instance.
     *
     * @param SysImages $sysImages
     */
    public function __construct(SysImages $sysImages)
    {
        parent::__construct();
        $this->sysImages = $sysImages;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $folder = $this->get_images_folder();
            $files = $this->get_files($folder);
            collect($files)->map(function($file) use ($folder){
                return [
                    'name' => explode(".", $file)[0],
                    'path' => "{$folder}/{$file}"
                ];
            })->each(function($file){
                SysImages::create([
                    'name' => $file["name"],
                    'encoded' => base64_encode(file_get_contents($file['path']))
                ]);
            });
            $this->info("system images added successfully");
        } catch (\Exception $e){
            $this->error($e->getMessage());
        }
    }

    /**
     * @return string
     */
    private function get_images_folder()
    {
        $folder_name = base_path('sysImages');
        if(!is_dir($folder_name)) throw new FileNotFoundException($folder_name);
        return $folder_name;
    }

    /**
     * @param $folder
     * @return array
     */
    private function get_files($folder)
    {
        return array_slice(scandir($folder), 2);
    }
}
