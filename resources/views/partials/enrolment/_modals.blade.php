<div id="bidModal" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Enter Form BID</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <div class="form-group">
                <label class="control-label">BID</label>
                <div>
                    <div class="input-group"> <span class="input-group-addon">ZGH</span>
                        <input v-model="bid" required type="text" data-mask="9999999" class="form-control">
                    </div>
                    <span style="color: #29166f;" class="help-block"><i class="fa fa-info"></i> Just the numeric part of the BID</span>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="checkBid" class="btn btn-theme btn-block">
                        <i class="fa fa-external-link"></i>
                        start
                    </button>
                </div>
            </div>
    </div>
    <!-- //modal-body-->
</div>


<div id="capturingModal" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>-->
        <h4 class="modal-title">Capturing ....</h4>
    </div>
    <!-- //modal-header-->

    <div class="modal-footer">
        <button @click="cancelCapture" class="btn btn-theme btn-block">
            <i class="fa fa-times"></i>
            cancel
        </button>
    </div>
    <!-- //modal-body-->
</div>


<div id="reviewingModal" class="modal fade container in" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>-->
        <h4 class="modal-title" v-show="reviewingBioData">Reviewing ....</h4>
    </div>
    <!-- //modal-header-->

    <div class="modal-body">

        <div class="row text-center">
            <div class="col-md-4">
                <div class="row">
                    Right Thumb
                </div>
                <div class="row">
                    <img style="border: 1px solid #6f7b8a" width="150" :src="thumbRight.uri" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    Right Index
                </div>
                <div class="row">
                    <img style="border: 1px solid #6f7b8a" width="150" :src="indexRight.uri" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    Portrait
                </div>
                <div class="row">
                    <img style="border: 1px solid #6f7b8a" width="200" :src="portrait.uri" />
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-4 text-center">
                <div class="row">
                    Left Thumb
                </div>
                <div class="row">
                    <img style="border: 1px solid #6f7b8a" width="150" :src="thumbLeft.uri" />
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="row">
                    Left Index
                </div>
                <div class="row">
                    <img style="border: 1px solid #6f7b8a" width="150" :src="indexLeft.uri" />
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="row">
                    Form
                </div>
                <div class="row">
                    <img style="border: 1px solid #6f7b8a" width="200" :src="form.uri" />
                </div>
            </div>
        </div>

    </div>

    <div class="modal-footer">
        <div class="row">
            <div class="col-md-6">
                <button @click="acceptBio" class="btn btn-success btn-block">
                    Ok
                </button>
            </div>
            <div class="col-md-6">


                <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="captureBioData" class="btn btn-theme btn-block" v-if="bioDataReady">
                    Capture New
                </button>
                <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="editBio" class="btn btn-theme btn-block" v-show="reviewingBioData">
                    <i class="fa fa-pencil"></i>
                    Edit
                </button>
            </div>
        </div>

    </div>
    <!-- //modal-body-->
</div>

<div id="savingModal" class="modal fade container in" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <h4 class="modal-title">saving ....</h4>
    </div>
</div>