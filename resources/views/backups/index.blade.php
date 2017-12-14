@extends('partials._main_master')

@section('main-content')

    <div id="newBackup" data-backdrop="static" data-keyboard="false" class="modal fade">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
            <h4 class="modal-title">New Backup</h4>
        </div>
        <!-- //modal-header-->
        <div class="modal-body">
            <form  id="newBackup" @submit.prevent="run_backup" method="post" class="form-horizontal" data-collabel="3" data-alignlabel="left">
                {!! csrf_field() !!}
                <div class="form-group offset">
                    <div>
                        <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                            <i class="fa fa-cloud-download"></i>
                            Run Backup
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <!-- //modal-body-->
    </div>

    <div id="newSchedule" data-backdrop="static" data-keyboard="false" class="modal fade">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
            <h4 class="modal-title">New Schedule</h4>
        </div>
        <!-- //modal-header-->
        <div class="modal-body">
            <form class="form-horizontal" data-collabel="3" data-alignlabel="left" @submit.prevent="schedule">

                <div class="form-group">
                    <label class="control-label">Frequency</label>
                    <div>
                        <v-select
                            :value.sync="frequency"
                            :options="remainingFrequencies"
                            placeholder="choose frequency..."
                            label="frequency"
                        >
                        
                    </div>
                </div>

                <div class="form-group offset">
                    <div>
                        <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                            <i class="fa fa-clock-o"></i>
                            Schedule
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <!-- //modal-body-->
    </div>

    <div id="main">
        @include('partials._breadcrumb', ["active" => "Backups"])
        <!-- //breadcrumb-->

        <div id="content">

            <div class="row">
                <div class="col-xs-12 col-md-9">
                    <section class="panel" id="backups">
                        <header class="panel-heading row">
                            <div class="col-xs-6">
                                <h4>Backups </h4>
                            </div>
                            <div class="col-xs-3">
                                <div v-cloak class="col-md-6 label label-success" v-if="show_backing">
                                    <i class="fa fa-spinner fa-spin"></i>
                                    Running
                                </div>
                                <div v-cloak class="col-md-6 label label-warning" v-if="show_restoring">
                                    <i class="fa fa-refresh fa-spin"></i>
                                    Restoring
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="col-xs-12 text-right">
                                    <button v-cloak @click="clearBads" class="pull-right btn btn-xs"  v-if="show_bads">
                                        <i class="fa fa-times"></i>
                                        <span class="hidden-xs">Clear Bad</span>
                                    </button>
                                </div>
                                <div class="col-xs-12 text-right">
                                    <a v-cloak style="color: #29166f;" data-toggle="modal" href="#newBackup"  v-if="show_new_backup">
                                        <i class="fa fa-plus-square"></i>
                                        <span class="hidden-xs">New Backup</span>
                                    </a>
                                </div>
                            </div>
                        </header>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <vuetable
                                        api-url="{!! route('api.backups.all') !!}"
                                        pagination-path=""
                                        :fields="fields"
                                        :sort-order="sortOrder"
                                        table-class="table table-bordered table-striped table-hover"
                                        ascending-icon="glyphicon glyphicon-chevron-up"
                                        descending-icon="glyphicon glyphicon-chevron-down"
                                        pagination-class=""
                                        pagination-info-class=""
                                        pagination-component-class=""
                                        pagination-component="vuetable-pagination-bootstrap"
                                        :item-actions="itemActions"
                                        :append-params="moreParams"
                                        ></vuetable>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-xs-12 col-md-3">
                    <section class="panel">
                        <header class="panel-heading row">
                            <div class="col-xs-10">
                                <h4>Backups Schedules</h4>
                            </div>
                            <div class="col-xs-2" v-show="show_new_schedule">
                                <a style="color: #29166f;" data-toggle="modal" href="#newSchedule" class="pull-right">
                                    <i class="fa fa-plus-square"></i>
                                </a>
                            </div>
                        </header>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table cellpadding="0" cellspacing="0" border="0"
                                       class="table table-striped table-hover" data-provide="data-table" id="schedules">
                                    <thead>
                                    <tr>
                                        <th>Frequency</th>
                                        <th width="30%">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody align="center">
                                    <tr v-for="schedule in schedules">
                                        <td valign="middle">
                                            <span class="label label-danger" v-cloak>@{{ schedule.frequency }}</span>
                                        </td>
                                        <td>
                                            <span class="tooltip-area">
                                                <a @click="delete_schedule(schedule)"  class="btn btn-default btn-sm" title="Delete"><i class="fa fa-trash-o"></i></a>
                                            </span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <template id="vuetable-pagination-bootstrap-template">
        <nav>
            <ul class="pagination">
                <li class="@{{isOnFirstPage ? disabledClass : ''}}">
                    <a @click="loadPage('prev')"><i class="glyphicon glyphicon-chevron-left"></i></a>
                </li>
                <template v-for="n in totalPage">
                    <li class="@{{isCurrentPage(n+1) ? ' active' : ''}}">
                        <a @click="loadPage(n+1)"> @{{ n+1 }}</a>
                    </li>
                </template>
                <li class="@{{isOnLastPage ? disabledClass : ''}}">
                    <a @click="loadPage('next')"><i class="glyphicon glyphicon-chevron-right"></i></a>
                </li>
            </ul>
        </nav>
    </template>

@endsection

@section('scripts')
    <script src="{!! elixir('js/vue-select.js') !!}"></script>

    <script type="text/javascript">

        Vue.component('v-select', VueSelect.VueSelect);

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin text-danger",
            maxSize     : "50px"
        };

        var host = window.location.host;
        var socket = io.connect('https://' + host + ':6001');

        var $backupsPanel = $('#backups');

        var $new_backup = $("#newBackup");
        var $new_schedule = $("#newSchedule");

        var tableColumns = [
            {
                title: 'Name',
                name: 'name',
                dataClass: 'text-center',
                callback: 'formatName'
            },
            {
                title: 'Date & Time',
                name: 'date_time',
                dataClass: 'text-center'
            },
            {
                title: 'Health',
                name: 'timestamp',
                dataClass: 'text-center',
                callback: 'getHealth'
            },
            {
                title: 'Actions',
                name: '__actions',
                dataClass: 'text-center'
            }
        ];

        Vue.component('vuetable-pagination-bootstrap', {
            template: '#vuetable-pagination-bootstrap-template',
            // mixins: [paginationMixin],
            methods: {
                loadPage: function(page) {
                    this.$dispatch('vuetable-pagination:change-page', page)
                }
            }
        });

        var freqs = [
                'Nightly',
                'Weekly',
                'Monthly',
                'Quarterly',
                'Yearly'
        ];

        new Vue({
            el: '#main-content',
            computed: {
                remainingFrequencies: function(){
                    var values = _.difference(this.frequencies, _.map(this.schedules, 'frequency'));
                    this.$set('show_new_schedule', !_.isEmpty(values));
                    console.log(values);
                    return values;
                }
            },
            data: {
                show_new_schedule: false,
                show_bads: false,
                frequency: '',
                schedules: [],
                schedules_to_show: [],
                frequencies: freqs,
                show_new_backup: true,
                show_restoring: false,
                show_backing: false,
                searchFor: '',
                fields: tableColumns,
                sortOrder: [{
                    field: 'timestamp',
                    direction: 'asc'
                }],
                paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                itemActions: [
                    { name: 'restore', icon: 'fa fa-refresh', class: 'btn btn-xs'},
                    { name: 'download', icon: 'fa fa-cloud-download', class: 'btn btn-xs' },
                    { name: 'delete', icon: 'fa fa-trash-o', class: 'btn btn-xs' }
                ],
                moreParams: [],
                dumps: [],
                badDumps: []
            },
            methods: {
                getHealth: function(value){
                    if (value == null) return 'N/A';
                    if(moment(value).add(1, 'days').isSame(new Date(), 'day')){
                        return "<span class='label label-danger'>Bad</span>";
                    }else{
                        return "<span class='label label-success'>Good</span>";
                    }
                },
                clearBads: function(){
                    if(_.isEmpty(this.badDumps)){
                        $.alert("Not Bad Dumps Available");
                    }
                    $.confirm({
                        title: "Are You Sure?",
                        confirm: function(){
                            var url = "{!! route('api.backups.delete_multiple') !!}";
                            var data = new FormData;
                            data.append('dumps', this.badDumps);
                            data.append('_token', "{!! csrf_token() !!}");
                            this.$http.post(url, data).then(function(res){
                                if(res.data.success){
                                    this.notify("Bad Dumps Were Removed.", 'success', true);
                                    this.resetFilter();
                                    return false;
                                }
                                this.notify("Could Not Clear The Dumps.", 'danger', true);
                            }, function(res){
                                this.notify("Could Not Clear The Dumps.", 'danger', true);
                            })
                        }.bind(this)
                    });
                },
                setBadDumps: function(dumps){
                    var badDumps = _.filter(dumps, function(dump){
                        return moment(dump.date_time).add(1, 'days').isSame(new Date(), 'day')
                    });
                    this.$set('show_bads', !_.isEmpty(badDumps));
                    this.$set('badDumps', _.map(badDumps, 'name'));
                },
                formatName: function(value){
                    return value.split('.')[0];
                },
                delete_dump: function(data){
                    var key = data.name.split('.')[0];
                    $.confirm({
                        title: 'Are You Sure?',
                        content: 'This Will Delete ' + key + ' Dump',
                        confirm: function(){
                        var url = 'internal-api/backups/' + key;
                        var form_data = new FormData;
                        form_data.append('_token', "{{ csrf_token() }}");
                            this.$http.post(url, form_data).then(
                                    function(response){
                                        console.log(response.data);
                                        if(response.data.success){
                                            this.resetFilter();
                                            this.notify(key + ' deleted successfully', 'success');
                                        }else{
                                            this.notify(key + ' could not be deleted.', 'danger');
                                        }
                                    }, function(response){
                                        this.notify(key + ' could not be deleted.', 'danger');
                                    });
                        }.bind(this),
                        confirmButton: 'Delete',
                        cancelButton: 'Later',
                        confirmButtonClass: 'btn-danger',
                        cancelButtonClass: 'btn-success'
                    });
                },
                run_backup: function(){
                    this.disallow_backup();
                    $new_backup.modal('hide');
                    url = "{{ route('api.backups.new') }}";
                    this.$http.post(url, {'_token': "{{ csrf_token() }}"}).then(function(response){
                        if(response.data.success){
                            this.notify('Database Backup started', 'success');
                            $new_backup.modal('hide');
                        }else{
                            this.notify('Database Backup Failed', 'danger', true);
                            this.allow_backup();
                            $new_backup.modal('show');
                        }
                    }, function(response){
                        this.notify('Database Backup Failed', 'danger', true);
                        this.allow_backup();
                        $new_backup.modal('show');
                    });
                },
                restore_backup: function(data){
                    var key = data.name.split('.')[0];
                    $.confirm({
                        title: 'Are You Sure?',
                        content: 'This Will Restore ' + key + ' Dump',
                        confirm: function(){
                            this.disallow_restore();
                            url = "internal-api/backups/" + key + "/restore";
                            this.$http.post(url, {'_token': "{{ csrf_token() }}"}).then(function(response){
                                if(response.data.success){
                                    this.notify('Database Restoration started', 'warning');
                                    $new_backup.modal('hide');
                                }else{
                                    this.allow_restore();
                                    this.notify('Database Restoration Failed', 'danger', true);
                                }
                            }, function(response){
                                this.allow_restore();
                                this.notify('Database Restoration Failed', 'danger', true);
                            });
                        }.bind(this),
                        confirmButton: 'Restore',
                        cancelButton: 'Later',
                        confirmButtonClass: 'btn-warning',
                        cancelButtonClass: 'btn-success'
                    });
                },
                download_dump: function(data){
                    var url = "{!! route('pdf.download') !!}" + "?filename=" + data.name + "&type=backup";
                    window.location.href = url;

                    console.log(data, url);
                },
                schedule: function(){
                    $new_schedule.LoadingOverlay('show', loadingOptions);
                    var url = 'internal-api/schedules/';
                    var frequency = this.frequency.trim();
                    if(frequency){
                        var data = new FormData;
                        data.append('frequency', frequency);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$http.post(url, data).then(
                                function(response){
                                    if(response.data.success){
                                        var schedule = response.data.schedule;
                                        $new_schedule.modal('hide');
                                        this.notify(schedule.frequency + ' Activated !', 'success');
                                        this.schedules.push(schedule);
                                        $new_schedule.LoadingOverlay('hide', true);
                                    }else{
                                        $new_schedule.LoadingOverlay('hide');
                                        this.notify(frequency + ' Schedule Could Not Activate.', 'danger', true);
                                    }
                                },
                                function(response){
                                    $new_schedule.LoadingOverlay('hide');
                                    this.notify('error', 'danger', true);
                                }
                        );
                    }
                },
                set_schedules: function(){
                    url = "{{ route('api.schedules.all') }}";
                    this.$http.get(url).then(function(response){
                                this.schedules = JSON.parse(response.data);
                            },
                            function(error){console.log(error)});
                },
                delete_schedule: function(schedule){
                    $.confirm({
                        title: 'Are You Sure?',
                        content: false,
                        confirm: function(){
                            var url = "internal-api/schedules/delete";
                            var data = new FormData;
                            data.append('_token', "{{ csrf_token() }}");
                            data.append('frequency', schedule.frequency);
                            data.append('schedule_key', schedule.schedule_key);
                            this.$http.post(url, data).then(function(response){
                                if(response.data.success){
                                    this.notify('Deactivated Successfully', 'success');
                                    this.schedules.$remove(schedule);
                                }else{
                                    this.notify('Error! Couldn\'t Deactivate schedule.', 'danger');
                                }
                            }, function(response){
                                this.notify('Error! Couldn\'t delete schedule.', 'danger');
                            });
                        }.bind(this),
                        confirmButton: 'Deactivate',
                        cancelButton: 'Cancel',
                        confirmButtonClass: 'btn-danger',
                        cancelButtonClass: 'btn-success'
                    });
                },
                notify: function(message, status, sticky){
                    var stick = sticky ? sticky : false;
                    $.notific8(message,
                            { sticky:stick,
                                horizontalEdge:"top",
                                theme:status })},
                setFilter: function() {
                    this.moreParams = [
                        'filter=' + this.searchFor
                    ];
                    this.$nextTick(function() {
                        this.$broadcast('vuetable:refresh')
                    });
                },
                resetFilter: function() {
                    this.searchFor = '';
                    this.setFilter();
                },
                allow_backup: function(){
                    this.show_new_backup = true;
                    this.show_backing = false;
                    $backupsPanel.LoadingOverlay('hide', true);
                },
                disallow_backup: function(){
                    this.show_new_backup = false;
                    this.show_backing = true;
                    $backupsPanel.LoadingOverlay('show', loadingOptions);
                },
                allow_restore: function(){
                    this.show_restoring = false;
                    this.show_new_backup = true;
                    $backupsPanel.LoadingOverlay('hide', true);
                },
                disallow_restore: function(){
                    this.show_restoring = true;
                    this.show_new_backup = false;
                    $backupsPanel.LoadingOverlay('show', loadingOptions);
                }
            },
            ready: function(){
                this.set_schedules();

                var channel_prefix = 'staff_'+"{{auth()->user()->uuid}}";
                socket.on(channel_prefix + '_channel:BackupWasSuccessful',
                        function(data){
                            console.log(data);
                            this.resetFilter();
                            var msg = "Backup was Successful";
                            this.allow_backup();
                            this.notify(msg, 'success');

                }.bind(this));

                socket.on(channel_prefix + '_channel:BackupFailed',
                        function(data){
                            var msg = "Backup Operation Failed";
                            this.allow_backup();
                            this.notify(msg, 'danger', true);
                }.bind(this));

                socket.on(channel_prefix + '_channel:BackupRestoreFailed',
                        function(data){
                            var msg = "Backup Restoration Failed";
                            this.allow_restore();
                            this.notify(msg, 'danger', true);
                }.bind(this));

                socket.on(channel_prefix + '_channel:BackupRestoreWasSuccessful',
                        function(data){
                            var msg = "Backup Was Successful Restored Back To <strong>"
                                    + data.date_time + "</strong> State.";
                            this.allow_restore();
                            this.notify(msg, 'success', true);
                }.bind(this));
            },
            events: {
                'vuetable:action': function(action, data){
                    switch (action){
                        case "restore":
                            this.restore_backup(data);
                            break;
                        case "delete":
                            this.delete_dump(data);
                            break;
                        case "download":
                            this.download_dump(data);
                            break;
                    }
                },
                'vuetable:load-success': function(res){
                    this.$set('dumps', res.data.data);
                    this.setBadDumps(res.data.data);
                }
            }
        });
    </script>
@endsection