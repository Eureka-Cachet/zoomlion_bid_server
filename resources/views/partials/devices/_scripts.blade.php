<script src="{!! elixir('js/vue-select.js') !!}"></script>

<script type="text/javascript">

    $(function(){

        Vue.component('v-select', VueSelect.VueSelect);

        var host = window.location.host;
        var socket = io.connect('https://' + host + ':6001', {secure: true});

        var $mapDevice = $('#mapDevice'),
                $newDevice = $('#newDevice'),
                $mapDeviceAssistance = $('#mapDeviceAssistance'),
                $assistantsModal = $('#assistantsModal'),
                $devicesTable = $('#devices'),
                $deviceHistoryTable = $('#deviceHistory'),
                $supervisor = $('select[name="user_id"]');


        var deviceFields = [
                    {
                        title: 'Device ID',
                        name: 'code',
                        dataClass: 'text-center'
                    },
                    {
                        title: 'Supervisor',
                        name: 'supervisor.full_name',
                        dataClass: 'text-center',
                        callback: 'formatName'
                    },
                    {
                        title: 'Assistant(s)',
                        name: 'total_assistants',
                        dataClass: 'text-center'
                    },
                    {
                        title: 'District',
                        name: 'district.name',
                        dataClass: 'text-center'
                    },
                    {
                        title: 'Status',
                        name: 'code',
                        dataClass: 'text-center',
                        callback: 'formatStatus'
                    },
                    {
                        title: 'Actions',
                        name: '__actions',
                        dataClass: 'text-center'
                    }],
                deviceHistoryFields = [
                        {
                            title: 'Date',
                            name: 'date',
                            dataClass: 'text-center',
                            callback: 'formatDate'
                        },
                        {
                            title: 'Connected Time',
                            name: 'connected_time',
                            dataClass: 'text-center'
                        },
                        {
                            title: 'Disconnected Time',
                            name: 'disconnected_time',
                            dataClass: 'text-center'
                        }
                ],
                deviceActions = [
                    { name: 'view-device', label: 'v', icon: 'fa fa-eye', class: 'btn btn-xs' },
                    { name: 'view-supervisor', label: 's', icon: 'fa fa-user', class: 'btn btn-xs' },
                    { name: 'view-assistants', label: 'a', icon: 'fa fa-users', class: 'btn btn-xs' },
                ],
                deviceHistoryActions = [
                    { name: 'view-device', label: 'v', icon: 'fa fa-eye', class: 'btn btn-xs' },
                    { name: 'delete-device', label: 'd', icon: 'fa fa-trash-o', class: 'btn btn-xs' },
                ],

                paginationInfoTemplate = '???? {from} ??? {to} ?????????? {total} ??????',

                sortOrder = [{field: 'id',direction: 'asc'}];

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin",
            maxSize: "20"
        };

        var mixins = {
            methods: {
                notify: function(message, status, sticky){
                    var stick = sticky ? sticky : false;
                    $.notific8(message,
                            { sticky: stick,
                                horizontalEdge: "top",
                                theme: status}
                    )},
                formatDate: function(value, fmt) {
                    if (value == null) return '';
                    fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt;
                    return moment(value, 'YYYY-MM-DD').format(fmt);
                },
                formatStatus: function(code){
                    console.log('code -> ', code);
                    var found = _.filter(this.onlineDevices, {"deviceId": code});
                    console.log('found -> ', found);
                    if(!_.isEmpty(found)){
                        return "<span class='label label-success'>Online</span>";
                    }else{
                        return "<span class='label label-danger'>Offline</span>"
                    }
                },
                formatName: function(name){
                    return _.upperCase(name);
                },
                loadUserPage: function(uuid){
                    var url = 'users/' + uuid;
                    setTimeout( "window.location.href='"+ url + "'", 100 );
                },

                reloadTable: function(){
                    this.$nextTick(function() {
                        this.$broadcast('vuetable:reload')
                    });
                }
            }
        };


        Vue.component('vuetable-pagination-bootstrap', {
            template: '#vuetable-pagination-bootstrap-template',
            // mixins: [paginationMixin],
            methods: {
                loadPage: function(page) {
                    this.$dispatch('vuetable-pagination:change-page', page)
                }
            }
        });


        Vue.component('device-table', {
            template: "#deviceTable",
            mixins: [mixins],
            data: function(){
                return {
                    searchFor: '',
                    sortOrder: sortOrder,
                    fields: deviceFields,
                    actions: deviceActions,
                    moreParams: [],
                    paginationInfoTemplate: paginationInfoTemplate,
                    devices: [],
                    onlineDevices: []
                }
            },
            computed: {},
            methods: {
                setFilter: function() {
                    console.log(this.searchFor);
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
                reloadTable: function(){
                    this.$nextTick(function() {
                        this.$broadcast('vuetable:reload')
                    });
                },
                mapDeviceAssistance: function(device){
                    $mapDevice.LoadingOverlay('show', loadingOptions);
                    console.log(device);
                },
                deleteDevice: function(device){
                    $.confirm({
                        title: "Are You Sure?",
                        content: false,
                        confirm: function(){
                            var url = 'internal-api/devices/'+device.id;
                            var token = {'_token': "{!! csrf_token() !!}"};
                            this.$http.delete(url, token).then(function(res){
                                if(res.data.success){
                                    this.notify(device.code + " successfully deleted.", 'success');
                                    this.reloadTable();
                                    return false;
                                }
                                this.notify(device.code + " could not be deleted.", 'danger');
                            }, function(res){
                                this.notify(device.code + " could not be deleted.", 'danger');
                            })
                        }.bind(this),
                        confirmButton: 'delete'
                    });
                },
                showAssistants: function(device){
                    console.log('show assistants');
                    this.$dispatch('show:assistants', device.assistants);
                }
            },
            events: {
                'vuetable:action': function(action, device){
                    if(action == 'view-device'){
                        this.$dispatch('device:changed', device);
                    }else if(action == 'delete-device'){
                        this.deleteDevice(device);
                    }else if(action == 'view-supervisor'){
                        this.loadUserPage(device.supervisor.uuid);
                    }else if(action == 'view-assistants'){
                        this.showAssistants(device);
                    }
                },
                'vuetable:load-success': function(res){
                    console.log(res.data.data);
                    this.$set('devices', res.data.data);
                    this.$dispatch('devices:loaded', res.data.data);
                    if(!_.isEmpty(this.devices)){
                        this.$dispatch('device:changed', this.devices[0]);
                    }
                    
                },
                'map:new-device': function(device){
                    this.mapDevice(device);
                },
                'devices:online': function(devices){
                    console.log('from vuetable for devices  -> ', devices);
                    this.onlineDevices = devices;
                },
                'devices:reload': function(){
                    this.reloadTable();
                }
            }
        });


        Vue.component('device-history-table', {
            template: "#deviceHistoryTable",
            mixins: [mixins],
            data: function(){
                return {
                    sortOrder: [{field: 'id',direction: 'desc'}],
                    selectedDevice: {},
                    fields: deviceHistoryFields,
                    params: [],
                    historyActions: deviceActions,
                    paginationInfoTemplate: paginationInfoTemplate,
                    logs: []
                }
            },
            computed: {
                logsUrl: function(){
                    if(_.isEmpty(this.selectedDevice)) return '';
                    var url = 'internal-api/devices/'+this.selectedDevice.id;
                    this.reloadTable();
                    return url;
                }
            },
            methods: {

            },
            events: {
                'vuetable:action': function(action, data){},
                'vuetable:load-success': function(res){
                    this.$set('logs', res.data);
                },
                'vuetable:loading': function(){
                    $deviceHistoryTable.LoadingOverlay('show', loadingOptions);
                },
                'vuetable:loaded': function(){
                    $deviceHistoryTable.LoadingOverlay('hide');
                },
                'device:load-history': function(device){
                    this.$set('selectedDevice', device);
                    this.reloadTable();
                }
            }
        });


        new Vue({
            el: "#main-content",
            mixins: [mixins],
            data: {
                status: {
                    name: '',
                    style: ''
                },
                newMap: true,
                newDevice: {
                    code: ''
                },
                selectedDevice: {
                    code: ''
                },
                supervisor: '',
                supervisors: [],
                devices: [],
                device: '',
                assistants: [],
                connectedDevices: []
            },
            computed: {
                supervisorName: function(){
                    if(_.isEmpty(this.selectedDevice) || !this.selectedDevice.supervisor) return '';
                    return _.upperCase(this.selectedDevice.supervisor.full_name)
                },
                // status: function(){
                //     if(_.isEmpty(this.selectedDevice)) return;
                //     if(this.selectedDevice.login){
                //         this.status = {
                //             style: 'label label-success',
                //             name: 'Online'
                //         }
                //     }else{
                //         this.status = {
                //             style: 'label label-danger',
                //             name: 'Offline'
                //         }
                //     }
                // }
            },
            methods: {
                mapDevice: function(){
                    
                    var id = this.device.id;
                    var user_id = this.supervisor.id;
                    if(id && user_id){
                        $mapDevice.LoadingOverlay('show', loadingOptions);
                        var url = 'internal-api/devices/' + id + '?action=map';
                        var device = {
                            device_id: id,
                            user_id: user_id,
                            "_token": "{!! csrf_token() !!}"
                        };

                        this.$http.put(url, device).then(function(res){
                            $mapDevice.LoadingOverlay('hide', true);
                            this.$broadcast('devices:reload', device);
                            $mapDevice.modal('hide');
                            return this.notify("Device Mapped", "success", false);
                            // if(res.status === 200){
                            //     $newDevice.modal('hide');
                            //     // reload table
                            // }
                            console.log(res);
                            this.notify("Operation Failed", "danger", true);
                        }, function(error){
                            $mapDevice.LoadingOverlay('hide', true);
                            console.log(error)
                            this.notify("Operation Failed", "danger", true);
                        })
                    }
                },
                fetchSupervisors: function(){
                    var url = 'internal-api/users?role=supervisor&status=free';
                    this.$http.get(url).then(
                        function(res){
                            this.$set('supervisors', res.data);
                            // console.log('sup', res.data);
                        }, 
                        function(error){
                            console.log('error', error);
                        });
                },
                fetchAssistants: function(supervisor){
                    var url = 'internal-api/users?role=supervisor&status=free&under=' + supervisor.id;
                    this.$http.get(url).then(
                        function(res){
                            this.$set('assistants', res.data);
                            // console.log('sup', res.data);
                        },
                        function(error){
                            console.log('error', error);
                        });
                },
                addDevice: function(){
                    $newDevice.LoadingOverlay('show', loadingOptions);
                    var url = 'internal-api/devices';
                    if(!_.trim(this.newDevice.code, "_- ").length === 15) return console.log('current -> ', this.newDevice.code);
                    var data = new FormData;
                    data.append("code", this.newDevice.code);
                    data.append("_token", "{!! csrf_token() !!}");

                    this.$http.post(url, data).then(function(res){
                        $newDevice.LoadingOverlay('hide', true);
                        if(res.status === 200){
                            $newDevice.modal('hide');
                            this.devices.push(res.data);
                            return this.notify("Device Added", "success", false);
                        }
                        console.log(res);
                        this.notify("Operation Failed", "danger", true);
                    }, function(error){
                        $newDevice.LoadingOverlay('hide', true);
                        console.log(error)
                        this.notify("Operation Failed", "danger", true);
                    })
                },
                mapDeviceAssistance: function(){
                    
                },
                fetchAllDevices: function(){
                    this.$http.get("internal-api/devices?status=all").then(function(res){
                        console.log(res.data);
                        this.devices = res.data;
                    }, function(er){console.log(er)})
                }
            },
            events: {
                'device:changed': function(device){
                    console.log(device);
                    this.selectedDevice = device;
                    this.$broadcast('device:load-history', device);
                },
                'show:allow-map': function(yes_or_no){
                    this.$set('newMap', yes_or_no);
                },
                'show:assistants': function(assistants){
                    this.assistants = assistants;
                    $assistantsModal.modal('show');
                    console.log('assistants', assistants);
                },
                'devices:loaded': function(data){
                    this.$set('devices', data);
                    console.log('table data from event', data);
                }
            },
            ready: function(){
                socket.on('devices:connected', function(data){
                    console.log(data);
                    this.$set('connectedDevices', data);
                    this.$broadcast('devices:online', data);
                }.bind(this));
                this.fetchSupervisors();
                this.fetchAllDevices();
            }
        });
    })
</script>