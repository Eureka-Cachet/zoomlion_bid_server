<script src="{!! elixir('js/vue-select.js') !!}"></script>

<script type="text/javascript">
    $(function(){

        var role_id = "{{ auth()->user()->role->id }}";

        var sysAdmin = Number.parseInt(role_id) === 1;

        // Vue.config.debug = false;
        // Vue.config.silent = true;


        Vue.component('v-select', VueSelect.VueSelect);

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin text-default",
            maxSize     : "30px"
        };

        var $newModuleForm = $('#newModule'),
                $location = $('select[name="location_id"]'),
                $beneficiaryClockingModal = $('#beneficiaryClockingModal'),
                $department = $('select[name="department_id"]');

        var $departmentsPanel = $('#departments'),
                $staffPanel = $('#staff');

        var departmentsFields = [
                    {
                        title: 'Module',
                        name: 'department.name',
                        sortField: 'department_id',
                        dataClass: 'text-center'
                    },{
                        title: 'Location',
                        name: 'location.name',
                        sortField: 'location_id',
                        dataClass: 'text-center'
                    },{
                    title: 'Total Staff',
                    name: 'staff',
                    sortField: 'staff',
                    dataClass: 'text-center',
                    callback: 'totalStaff'
                },
                    {
                        title: 'Actions',
                        name: '__component:departmentActions',
                        dataClass: 'text-center'
                    }
                ],
                staffFields = [
                    {
                        title: 'BID',
                        name: 'bid',
                        sortField: 'form_id',
                        dataClass: 'text-center'
                    },{
                        title: 'Name',
                        name: 'full_name',
                        sortField: 'full_name',
                        dataClass: 'text-center'
                    },{
                        title: 'Rank',
                        name: 'rank.name',
                        dataClass: 'text-center'
                    },{
                        title: 'Monthly Clocks',
                        name: 'attendances',
                        dataClass: 'text-center',
                        callback: 'totalClock'
                    },{
                        title: 'Actions',
                        name: '__actions',
                        dataClass: 'text-center'
                    }
                ],
                departmentActions = [
                    { name: 'view-staff', label: '', icon: 'fa fa-users', class: 'btn btn-xs'},
                    { name: 'delete-module', label: '', icon: 'fa fa-trash-o', class: 'btn btn-xs'}
                ],
                staffActions = [
                    { name: 'view-clocking', label: '', icon: 'fa fa-eye', class: 'btn btn-xs'}
                ];

        Vue.component('departmentActions', {
                template: [
                    '<div>',
                        '<button v-cloak class="btn btn-xs" @click="itemAction(\'view-staff\', rowData)"><i class="fa fa-users"></i></button>',
                        '<button v-cloak class="btn btn-xs" v-if="sysAdmin" @click="itemAction(\'delete-module\', rowData)"><i class="fa fa-trash-o"></i></button>',
                    '</div>'
                ].join(''),

                props: {
                    rowData: {
                        type: Object,
                        required: true
                    }
                },
                data: function(){
                    return {
                        sysAdmin: sysAdmin
                    };
                },
                methods: {
                    itemAction: function(action, department) {
                        switch(action){
                            case 'view-staff':
                                this.viewStaffIn(department);
                                break;
                            case 'delete-module':
                                this.deleteModule(department);
                                break;
                        }
                    },
                    viewStaffIn: function(department){
                        this.$dispatch('selected:department', department);
                    },
                    deleteModule: function(module){
                        $.confirm({
                            title: 'Are You Sure?',
                            content: false,
                            confirm: function(){
                                var url = "internal-api/departments/"+module.id;
                                this.$http.delete(url, {'_token': "{!! csrf_token() !!}"}).then(
                                        function(res){
                                            if(res.data.success){
                                                this.resetFilter();
                                                this.notify("Deleted Successfully", 'success');
                                                return false;
                                            }
                                            this.notify("Could not Delete the Module", 'danger');
                                        },function(res){
                                            this.notify("Could not Delete the Module", 'danger');
                                        }
                                )
                            }.bind(this),
                            confirmButton: 'Yes',
                            cancelButton: 'NO',
                            confirmButtonClass: 'btn-warning',
                            cancelButtonClass: 'btn-success'
                        });
                    } 
                }
            });

        
        
        var mixins = {
            methods: {
                reloadTable: function(){
                    this.$nextTick(function(){
                        this.$broadcast('vuetable:reload')
                    })
                },
                notify: function(message, status){
                    $.notific8(
                            message,{
                                sticky:false,
                                horizontalEdge:"top",
                                theme: status
                            })
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

        Vue.component('vuetable-departments', {
            template: "#vuetable-departments",
            mixins: [mixins],
            computed: {
                departmentUrl: function(){
                    if(!_.isEmpty(this.selectedLocation)){
                        url = 'internal-api/locations/' + this.selectedLocation.id + '/modules';
                        this.reloadTable();
                        return url;
                    }else{
                        return '';
                    }
                }
            },
            data: function(){
                return {
                    departments: [],
                    selectedLocation: null,
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    sortOrder: [{
                        field: 'code',
                        direction: 'asc'
                    }],
                    departmentFields: departmentsFields,
                    moreParams: []
                }
            },
            methods: {
                viewStaffIn: function(department){
                    this.$dispatch('selected:department', department);
                },
                totalStaff: function(staff){
                    return _.size(staff);
                },
                saveModule: function(module){
                    var url = "{!! route('api.departments.new') !!}";
                    this.$http.post(url, module).then(function(res){
                        if(res.data.success){
                            this.resetFilter();
                            $newModuleForm.modal('hide');
                            this.notify("Module Created Successfully", 'success');
                            $newModuleForm.LoadingOverlay('hide');
                            return false;
                        }
                        $newModuleForm.LoadingOverlay('hide');
                        this.notify("Module Could not be Created", 'danger');
                    }, function(res){
                        $newModuleForm.LoadingOverlay('hide');
                        this.notify("Module Could not be Created", 'danger');
                    });
                },
                deleteModule: function(module){
                    $.confirm({
                        title: 'Are You Sure?',
                        content: false,
                        confirm: function(){
                            var url = "internal-api/departments/"+module.id;
                            this.$http.delete(url, {'_token': "{!! csrf_token() !!}"}).then(
                                    function(res){
                                        if(res.data.success){
                                            this.resetFilter();
                                            this.notify("Deleted Successfully", 'success');
                                            return false;
                                        }
                                        this.notify("Could not Delete the Module", 'danger');
                                    },function(res){
                                        this.notify("Could not Delete the Module", 'danger');
                                    }
                            )
                        }.bind(this),
                        confirmButton: 'Yes',
                        cancelButton: 'NO',
                        confirmButtonClass: 'btn-warning',
                        cancelButtonClass: 'btn-success'
                    });
                }
            },
            events: {
                'vuetable:action': function(action, module){
                    if(action == 'view-staff'){
                        this.viewStaffIn(module);
                    }else if(action == 'delete-module'){
                        this.deleteModule(module)
                    }
                },
                'vuetable:loading': function(){
                    $departmentsPanel.LoadingOverlay('show', loadingOptions);
                },
                'vuetable:loaded': function(){
                    $departmentsPanel.LoadingOverlay('hide');
                },
                'vuetable:load-success': function(res){
                    this.$set('departments', res.data.data);
                },
                'module:create': function(module){
                    this.saveModule(module);
                },
                'load:departments': function(location){
                    this.$set('selectedLocation', location);
                }
            },
            ready: function(){}
        });


        Vue.component('vuetable-beneficiaries', {
            template: "#vuetable-beneficiaries",
            mixins: [mixins],
            computed: {
                beneficiariesUrl: function(){
                    if(!_.isEmpty(this.selectedDepartment)){
                        url = 'internal-api/departments/' + this.selectedDepartment.id + '/staff';
                        this.reset();
                        return url;
                    }else{
                        return '';
                    }
                }
            },
            data: function(){
                return {
                    beneficiaries: [],
                    selectedBeneficiary: null,
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    searchFor: '',
                    sortOrder: [],
                    beneficiariesFields: staffFields,
                    selectedDepartment: null,
                    moreParams: []
                };
            },
            methods: {
                viewClockingFor: function(beneficiary){
                    this.$dispatch('show:clocking', beneficiary);
                },
                totalClock: function(clocks){
                    return clocks.length;
                },
                search: function(){
                    this.moreParams = [
                        'filter=' + this.searchFor
                    ];
                    this.$nextTick(function() {
                        this.$broadcast('vuetable:refresh')
                    });
                },
                reset: function(){
                    this.searchFor = '';
                    this.moreParams = [
                        'filter='
                    ];
                    this.$nextTick(function() {
                        this.$broadcast('vuetable:refresh')
                    });
                }
            },
            events: {
                'vuetable:action': function(action, staff){
                    if(action == "view-clocking"){
                        this.viewClockingFor(staff);
                    }
                },
                'vuetable:loading': function(){
                    $staffPanel.LoadingOverlay('show', loadingOptions);
                },
                'vuetable:loaded': function(){
                    $staffPanel.LoadingOverlay('hide');
                },
                'vuetable:load-success': function(res){},
                'load:staff-in': function(department){
                    this.$set('selectedDepartment', department);
                }
            }
        });

        new Vue({
            el: "#main-content",
            data: {
                selectedDepartment: {},
                districts: [],
                locations: [],
                regions: [],
                ranks: [],
                modules: [],
                region: '',
                district: '',
                location: '',
                selectedBeneficiary: {},
                frequencies: [{name: "Weekly"}, {name: "Monthly"}],
                frequency: {name: "Weekly"},
                clocks: [],
                clockRange: {
                    start: '',
                    end: ''
                }
            },
            filters: {
                format: function(date){
                    return dateFns.format(date, 'MMMM Do YYYY');
                }
            },
            computed: {
                selectedDepartmentName: function(){
                    if(_.isEmpty(this.selectedDepartment)){
                        return '';
                    }else{
                        return _.toUpper(this.selectedDepartment.department.name);
                    }

                    
                },
                selectedLocation: function(){
                    if(_.isEmpty(this.selectedDepartment)) return '';
                    
                    var name = this.selectedDepartment.location.name;
                    if(name.length > 20){
                        name = _.truncate(name, {length: 20});
                    }
                    return _.upperCase(name);
                },
                notCurrentWeek: function(){
                    var isNot = !dateFns.isWithinRange(new Date, this.clockRange.start, this.clockRange.end);
                    return isNot;
                }
            },
            methods: {
                nextWeek: function(){
                    this.clockRange.start = dateFns.addWeeks(this.clockRange.start, 1);
                    this.clockRange.end = dateFns.addWeeks(this.clockRange.end, 1);
                    this.fetchClocking(this.selectedBeneficiary);
                },
                previousWeek: function(){
                    this.clockRange.start = dateFns.subWeeks(this.clockRange.start, 1);
                    this.clockRange.end= dateFns.subWeeks(this.clockRange.end, 1);
                    this.fetchClocking(this.selectedBeneficiary);
                },
                saveModule: function(){
                    $newModuleForm.LoadingOverlay('show', loadingOptions);
                    var location_id = $location.val(),
                            department_id = $department.val(),
                            formData = new FormData;
                    formData.append('location_id', location_id);
                    formData.append('department_id', department_id);
                    formData.append('_token', "{!! csrf_token() !!}");
                    this.$broadcast('module:create', formData);
                },
                fetchDistricts: function(region){
                    var url = 'internal-api/regions/' + region.id + '/districts?scope=employment';
                    this.$http.get(url).then(resp => {
                        this.districts = resp.data
                    })
                },
                fetchLocations: function(district){
                    var url = 'internal-api/districts/'+ district.id + '/locations?scope=employment';
                    this.$http.get(url).then(resp => {
                        this.locations = resp.data;
                    })
                },
                fetchModules: function(location){
                    // var url = 'internal-api/locations/'+ location.id + '/modules?scope=employment';
                    // this.$http.get(url).then(function(resp){
                    //     this.modules = resp.data.data;
                    // })
                    this.$dispatch('selected:location', location);
                },
                fetchRanks: function(){
                    var url = 'internal-api/ranks/';
                    this.$http.get(url).then(resp => {
                        this.ranks = resp.data
                    })
                },
                fetchRegions: function(){
                     var url = 'internal-api/regions?scope=employment';
                    this.$http.get(url).then(resp => {
                        this.regions = resp.data
                    })
                },
                fetchClocking: function(beneficiary){
                    var bene = null;
                    if(beneficiary !== null){
                        bene = beneficiary;
                    }
                    if(this.selectedBeneficiary !== null){
                        bene = this.selectedBeneficiary;
                    }

                    if(bene === null) return ;

                    $beneficiaryClockingModal.LoadingOverlay('show', loadingOptions);
                    var url = 'internal-api/clocking/' + bene.bid + '?start=' 
                                + dateFns.format(this.clockRange.start, 'X') 
                                + "&end=" + dateFns.format(this.clockRange.end, 'X');
                    this.$http.get(url).then(function(resp){
                        this.clocks = resp.data;
                        $beneficiaryClockingModal.LoadingOverlay('hide', true);
                    }, function(error){
                        $beneficiaryClockingModal.LoadingOverlay('hide', true);
                    });
                },
                closeModal: function(){
                    $beneficiaryClockingModal.modal('hide');
                    this.clockRange.start = dateFns.startOfWeek(new Date);
                    this.clockRange.end = dateFns.endOfWeek(new Date);
                }
            },
            events: {
                'selected:department': function(department){
                    this.$set('selectedDepartment', department);
                    this.$broadcast('load:staff-in', department);
                },
                'selected:location': function(location){
                    this.$set('selectedLocation', location);
                    this.$broadcast('load:departments', location);
                },
                'show:clocking': function(beneficiary){
                    $beneficiaryClockingModal.modal('show');
                    this.$set('selectedBeneficiary', beneficiary);
                    this.fetchClocking(beneficiary);
                }
            },

            ready: function(){
                this.clockRange.start = dateFns.startOfWeek(new Date);
                this.clockRange.end = dateFns.endOfWeek(new Date);
                this.fetchRanks();
                this.fetchRegions();
            }
        });


    })
</script>