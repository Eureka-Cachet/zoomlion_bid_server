<?php

namespace clocking\Jobs;

use clocking\Beneficiary;
use clocking\Events\BeneficiaryAddingFailed;
use clocking\Events\FingerprintsUpdated;
use clocking\Events\PushDataToClients;
use clocking\Fingerprint;
use clocking\Form;
use clocking\Providers\BeneficiaryWasCreated;
use Eureka\Helpers\ChannelMaker;
use Eureka\Helpers\CodeGenerator;
use Eureka\Transformers\Device\FingerprintCollectionTransformer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use League\Fractal\Manager;

class AddNewBeneficiary extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var Collection
     */
    private $data;
    /**
     * @var
     */
    private $uuid;
    /**
     * @var
     */
    private $updating;

    /**
     * Create a new job instance.
     *
     * @param Collection $data
     * @param $user_uuid
     * @param $updating
     */
    public function __construct(Collection $data, $user_uuid, $updating)
    {
        $this->data = $data;
        $this->uuid = $user_uuid;
        $this->updating = $updating;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try{
            $beneficiary = $this->get_beneficiary();
            $beneficiary->update($this->data->toArray());
            $this->save_fingers($beneficiary);
            if(!$this->updating){
                $this->save_form_image($beneficiary);
            }
            $this->save_picture($beneficiary);

            event(new FingerprintsUpdated($this->getAllFingerprints(), "FINGERPRINTS:UPDATED"));
            if($this->updating){
                event(new PushDataToClients($beneficiary->uuid, ChannelMaker::make($this->uuid), "BeneficiaryWasUpdated"));
            }else{
                event(new BeneficiaryWasCreated($beneficiary, ""));
                event(new PushDataToClients([], ChannelMaker::make($this->uuid), "BeneficiaryWasEnrolled"));
            }

        }catch (\Exception $e){
            var_dump($e->getTraceAsString());
            event(new BeneficiaryAddingFailed($e->getMessage(), $this->getChannel()));
        }
    }

    /**
     * @return string
     */
    private function getChannel()
    {
        return ChannelMaker::make($this->uuid);
    }

    /**
     * @param Beneficiary $beneficiary
     */
    private function save_fingers(Beneficiary $beneficiary)
    {
        $folder = "/app/beneficiaries/fingerprints/";

        $tr = $beneficiary->fingerprints->where("finger_type", "thumb_right")->first();
        $tr_path = $this->decode_and_save($tr->encoded, $this->make_filename($beneficiary, "thumb_right"), $folder);
        $tr->path = $tr_path;
        $tr->save();

        $tl = $beneficiary->fingerprints->where("finger_type" , "thumb_left")->first();
        $tl->path = $this->decode_and_save($tl->encoded, $this->make_filename($beneficiary, "thumb_left"), $folder);
        $tl->save();

        $ir = $beneficiary->fingerprints->where("finger_type", "index_right")->first();
        $ir->path = $this->decode_and_save($ir->encoded, $this->make_filename($beneficiary, "index_right"), $folder);
        $ir->save();

        $il = $beneficiary->fingerprints->where("finger_type", "index_left")->first();
        $il->path = $this->decode_and_save($il->encoded, $this->make_filename($beneficiary, "index_left"), $folder);
        $il->save();
    }

    /**
     * @param $b
     * @param $o
     * @return string
     */
    private function make_filename($b, $o){
        return $b->full_name . "_" . $b->bid . "_" . $o;
    }

    /**
     * @param $encoded
     * @param $filename
     * @param $folder
     * @return string
     */
    private function decode_and_save($encoded, $filename, $folder)
    {
        $full_path = $this->make_path($folder, $filename);
        $this->save_file($encoded, $full_path);
        return $full_path;
    }

    /**
     * @param $folder
     * @param $filename
     * @return string
     */
    private function make_path($folder, $filename)
    {
        return storage_path($folder) . $filename  . ".jpg";
    }

    /**
     * @param $encoded
     * @param $full_path
     * @return mixed
     */
    private function save_file($encoded, $full_path)
    {
        $decoded = base64_decode($encoded);
        file_put_contents($full_path, $decoded);
        return $full_path;
    }

    /**
     * @return array
     */
    private function getAllFingerprints()
    {
        $fingerprints = Fingerprint::all()->filter(function(Fingerprint $f){
            return !is_null($f->beneficiary);
        });
        $data = (new Manager())->createData(
            new \League\Fractal\Resource\Collection($fingerprints,
                new FingerprintCollectionTransformer(false)))
            ->toArray();
        return $data["data"];
    }

    /**
     * @param Beneficiary $beneficiary
     */
    private function save_picture(Beneficiary $beneficiary)
    {
        $folder = "/app/beneficiaries/pictures/";
        $filename = str_slug($beneficiary->full_name) . "_" . $beneficiary->bid;
        $encoded = $beneficiary->picture->encoded;
        $path = $this->decode_and_save($encoded, $filename, $folder);
        $beneficiary->picture()->update(["path" => $path]);
    }

    /**
     * @param Beneficiary $beneficiary
     */
    private function save_form_image(Beneficiary $beneficiary)
    {
        $folder = "/app/beneficiaries/forms/";
        $filename = str_slug($beneficiary->full_name) . "_" . $beneficiary->bid;
        $form = $beneficiary->form;
        $encoded = $form->encoded;
        $path = $this->decode_and_save($encoded, $filename, $folder);
        $form->update([
            "image" => $path,
            "enrolled" => true
        ]);
    }

    /**
     * @return Beneficiary
     */
    private function get_beneficiary()
    {
        return Beneficiary::where("uuid", $this->data->get("beneficiary_uuid"))
            ->first();
    }

    /**
     * @return array
     */
    private function get_total_beneficiaries()
    {
        return [
            "beneficiaries" => Beneficiary::count(),
        ];
    }
}
