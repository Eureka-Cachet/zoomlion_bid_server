<div id="newModule" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">Module Assignment</h4>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <form @submit.prevent="saveModule" class="form-horizontal" data-collabel="3" data-alignlabel="left">
            <div class="form-group">
                <label class="control-label">Location</label>
                <div>
                    <select required class="selectpicker form-control" name="location_id" data-size="10" data-live-search="true">
                        
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">Module Type</label>
                <div>
                    <select required class="selectpicker form-control" name="department_id" data-size="6" data-live-search="true">
                        
                    </select>
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



<div id="beneficiaryClockingModal" class="container modal fade in" data-backdrop="static" data-keyboard="false">
    <div class="modal-header row">
        <div class="col-xs-4">
            <h4 class="modal-title" v-cloak>
                @{{ selectedBeneficiary.bid }} / @{{ selectedBeneficiary.full_name }}
            </h4>
        </div>
        <div class="col-xs-7 row">
            <div class="col-xs-1">
                <button class="btn btn-xs" data-toggle="tooltip" data-placement="left" title="Previous Week" @click="previousWeek"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
            </div>
            <div class="col-xs-10 text-center row">
                <div class="col-xs-6" v-cloak>From @{{clockRange.start | format}}</div>
                <div class="col-xs-6" v-cloak> to @{{clockRange.end | format}}</div>
            </div>
            <div class="col-xs-1">
                <button v-show="notCurrentWeek" class="btn btn-xs" data-toggle="tooltip" data-placement="left" title="Next Week" @click="nextWeek"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
            </div>
        </div>
        <div class="col-xs-1">
            <button type="button" @click="closeModal" class="close" aria-hidden="true"><i class="fa fa-times"></i></button>
        </div>
    </div>
    <!-- //modal-header-->
    <div class="modal-body">
        <table cellpadding="0" cellspacing="0" border="0" class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th colspan="6">Monday</th>
                    <th colspan="6">Tuesday</th>
                    <th colspan="6">Wenesday</th>
                    <th colspan="6">Thursday</th>
                    <th colspan="6">Friday</th>
                    <th colspan="6">Saturday</th>
                    <th colspan="6">Sunday</th>
                </tr>
            </thead>
            <tbody align="center">
                <tr v-cloak v-for="clock in clocks">
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span style="display: inline-block;" class='label label-success' v-cloak>@{{ clock.monday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.monday[1].time }}</span>
                        </div>
                    </td>
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span class='label label-success' v-cloak>@{{ clock.tuesday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.tuesday[1].time }}</span>
                        </div>
                    </td>
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span class='label label-success' v-cloak>@{{ clock.wednesday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.wednesday[1].time }}</span>
                        </div>
                    </td>
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span class='label label-success' v-cloak>@{{ clock.thursday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.thursday[1].time }}</span>
                        </div>
                    </td>
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span class='label label-success' v-cloak>@{{ clock.friday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.friday[1].time }}</span>
                        </div>
                    </td>
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span class='label label-success' v-cloak>@{{ clock.saturday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.saturday[1].time }}</span>
                        </div>
                    </td>
                    <td valign="middle" colspan="6" class="row">
                        <div class="col-xs-12">
                            <span class='label label-success' v-cloak>@{{ clock.sunday[0].time }}</span>
                        </div>
                        <div class="col-xs-12">
                            <span class='label label-danger' v-cloak>@{{ clock.sunday[1].time }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- //modal-body-->
</div>