<div id="newDevice" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Add New Device</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form id="newUserForm" @submit.prevent="addDevice" class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Device ID</label>
                <div>
                    <div class="input-icon right"> <i class="fa fa-mobile-phone ico "></i>
                        <input data-mask="999999999999999" v-model="newDevice.code" required type="text" class="form-control" name="device_id">
                        <!--<span class="help-block">A block of <a href="#">help text.</a> <i class="fa fa-info"></i></span>-->
                    </div>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-plus"></i>
                        Add
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>

<div id="mapDevice" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Map Device</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form id="newUserForm" @submit.prevent="mapDevice" class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Device</label>
                <div>
                    <v-select
                        :value.sync="device"
                        :options="devices"
                        placeholder="select device"
                        label="code"
                    >
                    </v-select>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Supervisor</label>
                <div>
                    <v-select
                        :value.sync="supervisor"
                        :options="supervisors"
                        placeholder="select supervisor"
                        label="full_name"
                    >
                    </v-select>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-flag"></i>
                        Map
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>


<div id="newAssistant" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Map Device</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form @submit.prevent="mapDeviceAssistance" class="form-horizontal" data-collabel="3" data-alignlabel="left">
            
            <div class="form-group">
                <label class="control-label">Device</label>
                <div>
                    <p class="form-control-static">@{{selectedDevice.code}}</p>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Supervisor</label>
                <div>
                    <v-select
                        :value.sync="supervisor"
                        :options="selectedDevice.free_assistants"
                        placeholder="select supervisor"
                        label="full_name"
                    >
                    </v-select>
                </div>
            </div>

            <div class="form-group offset">
                <div>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                        <i class="fa fa-flag"></i>
                        Map
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- //modal-body-->
</div>

<div id="assistantsModal" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <a style="color: #29166f;" data-toggle="modal" href="#newAssistant">
            <i class="fa fa-user"></i>
            New Assistant
        </a>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th width="30%">Action</th>
                </tr>
            </thead>
            <tbody align="center">
                <tr v-for="assistant in selectedDevice.assistants">
                    <td valign="middle">@{{ assistant.full_name }}</td>
                    <td>
                        <span class="tooltip-area">
                            <a @click="loadUserPage(assistant.full_name)" class="btn btn-default btn-sm" title="view"><i class="fa fa-eye"></i></a>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- //modal-body-->
</div>