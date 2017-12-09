<!--region-->

<div id="newRegion" @submit.prevent="saveRegion" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Add Region</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Region Name</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-map-marker ico "></i>
                        <input v-model="newRegion.name" required type="text" class="form-control">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Region Code</label>
                <div>
                    <div class="input-icon right">
                        <input v-model="newRegion.code" required type="text" data-mask="99" class="form-control">
                    </div>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-save"></i>
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>
<div id="editRegion" @submit.prevent="updateRegion" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Edit Region</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Region Name</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-map-marker ico "></i>
                        <input v-model="editedRegion.name" value="bufferRegion.name" required type="text" class="form-control" name="name">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Region Code</label>
                <div>
                    <div class="input-icon right">
                        <input v-model="editedRegion.code" required type="text" data-mask="99" class="form-control">
                    </div>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-save"></i>
                        Update
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>

<!--district-->

<div id="newDistrict" @submit.prevent="saveDistrict" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Add District</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">District Name</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-map-marker ico "></i>
                        <input v-model="newDistrict.name" required type="text" class="form-control">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">District Code</label>
                <div class="input-group"> <span class="input-group-addon">@{{ selectedRegion.code }}</span>
                    <input v-model="newDistrict.code" type="text" class="form-control" data-mask="99">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Region</label>
                <div>
                    <p class="form-control-static">@{{ selectedRegion.name }}</p>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-save"></i>
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>
<div id="editDistrict" @submit.prevent="updateDistrict" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Edit District</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">District Name</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-map-marker ico "></i>
                        <input v-model="editedDistrict.name" value="editedDistrict.name" required type="text" class="form-control" name="name">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">District Code</label>
                <div class="input-group"> <span class="input-group-addon">@{{ selectedRegion.code }}</span>
                    <input v-model="editedDistrict.code" value="editedDistrict.code" type="text" class="form-control" data-mask="99">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Region</label>
                <div>
                    <p class="form-control-static">@{{ editedDistrictRegion.name }}</p>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-save"></i>
                        Update
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>


<!--location-->

<div id="newLocation" @submit.prevent="saveLocation" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Add Location</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Location Name</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-map-marker ico "></i>
                        <input v-model="newLocation.name" required type="text" class="form-control" name="name">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Location Code</label>
                <div class="input-group"> <span class="input-group-addon">@{{ selectedDistrict.code }}</span>
                    <input v-model="newLocation.code" type="text" class="form-control" data-mask="99">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Region</label>
                <div>
                    <p class="form-control-static">@{{ selectedDistrict.name }}</p>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-save"></i>
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>
<div id="editLocation" @submit.prevent="updateLocation" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Edit Location</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Location Name</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-map-marker ico "></i>
                        <input required v-model="editedLocation.name" type="text" class="form-control" name="name">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Location Code</label>
                <div class="input-group"> <span class="input-group-addon">@{{ selectedDistrict.code }}</span>
                    <input v-model="editedLocation.code" type="text" class="form-control" data-mask="99">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">District</label>
                <div>
                    <p class="form-control-static">@{{ editedLocationDistrict.name }}</p>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-save"></i>
                        Update
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>