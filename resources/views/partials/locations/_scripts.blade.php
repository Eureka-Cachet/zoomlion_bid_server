<script type="text/javascript">
    $(function(){

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin text-default",
            maxSize     : "30px"
        };

        var role_id = "{{ auth()->user()->roles->first()->id }}";

        var sysAdmin = Number.parseInt(role_id) === 1;

        var $newLocationFormModal = $('#newLocation');
        var $editLocationFormModal = $('#editLocation');

        var $newDistrictFormModal = $('#newDistrict');
        var $editDistrictFormModal = $('#editDistrict');

        var $newRegionFormModal = $('#newRegion');
        var $editRegionFormModal = $('#editRegion');

        var $regionsTablePanel = $('#regionsPanel');
        var $districtsTrablePanel = $('#districtsPanel');
        var $locationsTablePanel = $('#locationsPanel');


        var getFormModal = function(literal, saving){
            if(saving){
                switch(literal){
                    case "region":
                        return $newRegionFormModal;
                    case "district":
                        return $newDistrictFormModal;
                    case "location":
                        return $newLocationFormModal;
                }
            }else{
                switch(literal){
                    case "region":
                        return $editRegionFormModal;
                    case "district":
                        return $editDistrictFormModal;
                    case "location":
                        return $editLocationFormModal;
                    default:
                        return null;
                }
            }
        }

        Vue.component('vuetable-pagination-bootstrap', {
            template: '#vuetable-pagination-bootstrap-template',
            methods: {
                loadPage: function(page) {
                    this.$dispatch('vuetable-pagination:change-page', page)
                }
            }
        });

         // mixins

        var mixins = {
            methods: {
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
                reloadTable: function(){
                    this.$nextTick(function(){
                        this.$broadcast('vuetable:reload')
                    })
                },
                onFailedNotify: function(item){
                    var data = {message: item + ' could not be updated.', status: 'danger'};
                    this.$dispatch('notify:event', data);
                },
                onSuccessNotify: function(item){
                    var data = {message: item + ' updated successfully.', status: 'success'};
                    this.$dispatch('notify:event', data);
                },

                show: function(what, literal){
                    this.$dispatch(literal+':changed', what);
                },
                edit: function(what, literal){
                    this.$dispatch('edit:'+literal, what);
                },
                save: function(what, literal){
                    $formModal = getFormModal(literal, true);
                    if(!$formModal) return ;

                    $formModal.LoadingOverlay('show', loadingOptions);
                    // $newDistrictFormModal.LoadingOverlay('show', loadingOptions);
                    // var url = "{{ route('api.districts.new') }}";
                    var url = 'internal-api/'+literal+'s/';
                    this.$http.post(url, what).then(function(res){
                        // var data = {};
                        if(res.data.success){
                            this.reloadTable();
                            $formModal.modal('hide');
                            data = {message: what.get('name') + " Saved Successfully", status: 'success'};
                        }else{
                            $formModal.LoadingOverlay('hide', true);
                            data = {message: what.get('name') + " Could Not Be Saved", status: 'danger'};
                        }
                        this.$dispatch('notify:event', data);
                    }, function(error){
                        // if(error.status === 401) return window.location.reload(true);

                        $formModal.LoadingOverlay('hide', true);
                        this.$dispatch('notify:event', {message: "Error! Operation Failed", status: 'danger'})
                    });
                },
                update: function(what, literal){
                    $formModal = getFormModal(literal, false);
                    if(!$formModal) return ;

                    $formModal.LoadingOverlay('show', loadingOptions);
                    // $editDistrictFormModal.LoadingOverlay('show', loadingOptions);
                    var url = 'internal-api/'+literal+'s/'+what.id;
                    // var url = "internal-api/districts/" + district.get('id');
                    // var data = {};
                    this.$http.put(url, what).then(function(res){
                        if(res.data.success){
                            this.resetFilter();
                            $formModal.modal('hide');
                            data = {message: what.get('name') + " Saved Successfully", status: 'success'};
                        }else{
                            data = {message: what.get('name') + " Could Not Be Saved", status: 'danger'};
                        }
                        this.$dispatch('notify:event', data);
                    }, function(error){
                        // if(error.status === 401) return window.location.reload(true);

                        data = {message: what.get('name') + " Could Not Be Saved", status: 'danger'};
                        this.$dispatch('notify:event', data);
                    });
                    $formModal.LoadingOverlay('hide');
                },
                delete: function(what, literal){
                    $.confirm({
                        title: 'Are You Sure?',
                        confirm: function(){
                            var url = 'internal-api/'+literal+'s/'+what.id;
                            this.$http.delete(url, {'_token': "{{ csrf_token() }}"}).then(function(res){
                                if(res.data.success){
                                    this.resetFilter();
                                    this.onSuccessNotify(what.name);
                                }else{
                                    this.onFailedNotify(what.name);
                                }
                            }, function(error){
                                // if(error.status === 401) return window.location.reload(true);
                                this.onFailedNotify(what.name);
                            });
                        }.bind(this),
                        confirmButton: 'Yes',
                        cancelButton: 'NO',
                        confirmButtonClass: 'btn-danger',
                        cancelButtonClass: 'btn-success'
                    });
                }
            }
        };


        // table fields

        var regionFields = [
            {
                title: 'Code',
                name: 'code',
                dataClass: 'text-center'
            },
            {
                title: 'Name',
                name: 'name',
                sortField: 'name',
                dataClass: 'text-center'
            },
            {
                title: 'Actions',
                name: '__component:regionActions',
                dataClass: 'text-center'
            }
        ];
        var districtFields = [
            {
                title: 'Code',
                name: 'code',
                dataClass: 'text-center'
            },
            {
                title: 'Name',
                name: 'name',
                sortField: 'name',
                dataClass: 'text-center'
            },
            {
                title: 'Actions',
                name: '__component:districtsActions',
                dataClass: 'text-center'
            }
        ];
        var locationFields = [
            {
                title: 'Code',
                name: 'code',
                dataClass: 'text-center'
            },
            {
                title: 'Name',
                name: 'name',
                sortField: 'name',
                dataClass: 'text-center'
            }
            
        ];

        if(sysAdmin){
            locationFields.push({
                name: '__actions',
                title: 'Actions',
                dataClass: 'text-center'
            });
        }



        // table actions

        Vue.component('regionActions', {
                template: [
                    '<div>',
                        '<button v-cloak class="btn btn-xs" @click="itemAction(\'view-districts\', rowData)"><i class="fa fa-eye"></i></button>',
                        '<button v-cloak class="btn btn-xs" v-if="sysAdmin" @click="itemAction(\'edit-region\', rowData)"><i class="fa fa-pencil"></i></button>',
                        '<button v-cloak class="btn btn-xs" v-if="sysAdmin" @click="itemAction(\'delete-region\', rowData)"><i class="fa fa-trash-o"></i></button>',
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
                mixins: [mixins],
                methods: {
                    itemAction: function(action, region) {
                        switch(action){
                            case 'edit-region':
                                this.editRegion(region);
                                break;
                            case 'view-districts':
                                this.showDistricts(region);
                                break;
                            case 'delete-region':
                                this.deleteRegion(region);
                                break;
                        }
                    },
                    showDistricts: function(region){
                        this.show(region, 'region');
                    },
                    editRegion: function(region){
                        this.edit(region, 'region');
                    },
                    deleteRegion: function(region){
                        this.delete(region, 'region');
                    } 
                }
            });

            Vue.component('districtsActions', {
                template: [
                    '<div>',
                        '<button v-cloak class="btn btn-xs" @click="itemAction(\'view-locations\', rowData)"><i class="fa fa-eye"></i></button>',
                        '<button v-cloak class="btn btn-xs" v-if="sysAdmin" @click="itemAction(\'edit-district\', rowData)"><i class="fa fa-pencil"></i></button>',
                        '<button v-cloak class="btn btn-xs" v-if="sysAdmin" @click="itemAction(\'delete-district\', rowData)"><i class="fa fa-trash-o"></i></button>',
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
                mixins: [mixins],
                methods: {
                    itemAction: function(action, district) {
                        switch(action){
                            case 'edit-district':
                                this.editDistrict(district);
                                break;
                            case 'view-locations':
                                this.showLocations(district);
                                break;
                            case 'delete-district':
                                this.deleteDistrict(district);
                                break;
                        }
                    },
                    showLocations: function(district){
                        this.show(district, 'district');
                    },
                    editDistrict: function(district){
                        this.edit(district, 'district');
                    },
                    deleteDistrict: function(district){
                        this.delete(district, 'district');
                    } 
                }
            });


        var regionActions = [
            { name: 'edit-region', label: '', icon: 'fa fa-pencil', class: 'btn btn-xs' },
            { name: 'view-districts', label: '', icon: 'fa fa-eye', class: 'btn btn-xs'},
            { name: 'delete-region', label: '', icon: 'fa fa-trash-o', class: 'btn btn-xs' }
        ];
        var districtActions = [
            { name: 'edit-district', label: '', icon: 'fa fa-pencil', class: 'btn btn-xs'},
            { name: 'view-locations', label: '', icon: 'fa fa-eye', class: 'btn btn-xs' },
            { name: 'delete-district', label: '', icon: 'fa fa-trash-o', class: 'btn btn-xs' }
        ];
        var locationActions = [
            { name: 'edit-location', label: '', icon: 'fa fa-pencil', class: 'btn btn-xs'},
            { name: 'delete-location', label: '', icon: 'fa fa-trash-o', class: 'btn btn-xs'}
        ];

       
        Vue.component('vuetable-regions', {
            template: '#vuetable-regions',
            mixins: [mixins],
            data: function(){
                return {
                    searchFor: '',
                    regionUrl: '',
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    sortOrder: [{
                        field: 'name',
                        direction: 'asc'
                    }],
                    regionFields: regionFields,
                    regionActions: regionActions,
                    moreParams: [],
                    role_id: role_id
                }
            },
            computed: {
                regionUrl: function(){
                    return "{!! route('api.regions.all') !!}";
                },
                sysAdmin: function(){
                    return Number.parseInt(role_id) === 1;
                }
            },
            methods: {
                showDistricts: function(region){
                    this.show(region, 'region')
                },
                editRegion: function(region){
                    this.edit(region, 'region');
                },
                saveRegion: function(region){
                    this.save(region, 'region');
                },
                updateRegion: function(region){
                    this.update(region, 'region');
                },
                deleteRegion: function(region){
                    this.delete(region, 'region');
                }                
            },
            events: {
                'new:region': function(data){
                    this.saveRegion(data);
                },
                'update:region': function(data){
                    this.updateRegion(data);
                },
                'vuetable:action': function(action, data){
                    switch (action){
                        case "view-districts":
                            this.showDistricts(data);
                            break;
                        case "edit-region":
                            this.editRegion(data);
                            break;
                        case "delete-region":
                            this.deleteRegion(data);
                            break;
                    }
                },
                'vuetable:load-success':function(response){
                    var regions = response.data.data;
                    this.$dispatch('regions:ready', regions);
                },
                'vuetable:loading': function(){
                    $regionsTablePanel.LoadingOverlay('show', loadingOptions);
                },
                'vuetable:loaded': function(){
                    $regionsTablePanel.LoadingOverlay('hide');
                },
                'vuetable:load-error': function(error){
                    if(error.status === 401){
                        window.location.reload(true);
                    }
                }
            }
        });

        Vue.component('vuetable-districts', {
            template: '#vuetable-districts',
            mixins: [mixins],
            data: function(){
                return {
                    searchFor: '',
                    selectedRegion: '',
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    sortOrder: [{
                        field: 'name',
                        direction: 'asc'
                    }],
                    districtFields: districtFields,
                    districtActions: districtActions,
                    moreParams: [],
                    role_id: role_id
                }
            },
            computed: {
                districtUrl: function(){
                    if(!_.isEmpty(this.selectedRegion)){
                        var url = "internal-api/regions/" + this.selectedRegion.id + "/districts";
                        this.reloadTable();
                        return url;
                    }else{
                        return '';
                    }
                }
            },
            methods: {
                showLocations: function(district){
                    // this.$dispatch('district:changed', district);
                    this.show(district, 'district');
                },
                editDistrict: function(district){
                    // this.$dispatch('edit:district', district);
                    this.edit(district, 'district');
                },
                reloadDistricts: function(region){
                    this.selectedRegion = region;
                    this.resetFilter();
                    // this.reload(region, 'region');
                },
                saveDistrict: function(district){
                    this.save(district, 'district');
                },
                updateDistrict: function(district){
                    this.update(district, 'district');
                },
                deleteDistrict: function(district){
                    this.delete(district, 'district');
                }
            },
            events: {
                'vuetable:action': function(action, data){
                    switch (action){
                        case "view-locations":
                            this.showLocations(data);
                            break;
                        case "edit-district":
                            this.editDistrict(data);
                            break;
                        case "delete-district":
                            this.deleteDistrict(data);
                            break;
                    }
                },
                'vuetable:load-success': function(response){
                    var districts = response.data.data;
                    ('distrticts => '   + districts);
                    this.$dispatch('districts:ready', districts)
                },
                'reload:districts': function(data){
                    this.reloadDistricts(data);
                },
                'region:selected': function(region){
                    this.selectedRegion = region;
                },
                'new:district': function(district){
                    this.saveDistrict(district);
                },
                'update:district': function(district){
                    this.updateDistrict(district);
                },
                'vuetable:loading': function(){
                    $districtsTrablePanel.LoadingOverlay('show', loadingOptions);
                },
                'vuetable:loaded': function(){
                    $districtsTrablePanel.LoadingOverlay('hide');
                },
                'vuetable:load-error': function(error){
                    if(error.status === 401){
                        window.location.reload(true);
                    }
                }
            },
            ready: function(){
                $editDistrictFormModal.on('hide.bs.modal', function(e){
                    this.resetFilter();
                }.bind(this));
            }
        });

        Vue.component('vuetable-locations', {
            template: '#vuetable-locations',
            mixins: [mixins],
            data: function(){
                return {
                    searchFor: '',
                    selectedDistrict: '',
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    // paginationComponent: 'vuetable-pagination',
                    sortOrder: [{
                        field: 'name',
                        direction: 'asc'
                    }],
                    locationFields: locationFields,
                    locationActions: locationActions,
                    moreParams: [],
                    role_id: role_id
                }
            },
            computed: {
                locationsUrl: function(){
                    if(!_.isEmpty(this.selectedDistrict)){
                        this.reloadTable();
                        return "internal-api/districts/" + this.selectedDistrict.id + "/locations";
                    }else{
                        return '';
                    }
                }
            },
            methods: {
                editLocation: function(location){
                    // this.$dispatch('edit:location', location);
                    this.edit(location, 'location');
                },
                reloadLocations: function(district){
                    this.selectedDistrict = district;
                    this.reloadTable();
                },
                saveLocation: function(location){
                    this.save(location, 'location');
                },
                updateLocation: function(location){
                    this.update(location, 'location');
                },
                deleteLocation: function(location){
                    this.delete(location, 'location');
                }
            },
            events: {
                'vuetable:action': function(action, location){
                    if(action == 'edit-location'){
                        this.editLocation(location);
                    }else if(action == 'delete-location'){
                        this.deleteLocation(location);
                    }
                },
                'reload:locations': function(district){
                    this.reloadLocations(district);
                },
                'district:selected': function(district){
                    (district);
                    this.selectedDistrict = district;
                },
                'new:location': function(location){
                    this.saveLocation(location);
                },
                'update:location': function(location){
                    this.updateLocation(location);
                },
                'vuetable:loading': function(){
                    $locationsTablePanel.LoadingOverlay('show', loadingOptions);
                },
                'vuetable:loaded': function(){
                    $locationsTablePanel.LoadingOverlay('hide');
                },
                'vuetable:load-error': function(error){
                    if(error.status === 401){
                        window.location.reload(true);
                    }
                }
            },
            ready: function(){
            }
        });


        new Vue({
            el: '#main-content',
            computed: {
                oldDistrictCodeValue: function(){
                    if(_.isEmpty(this.bufferDistrict)) return '';

                    return this.bufferDistrict.code.substr(-2);
                },
                oldLocationCodeValue: function(){
                    if(_.isEmpty(this.bufferLocation)) return '';

                    return this.bufferLocation.code.substr(-2);
                },
                oldRegionCodeValue: function(){
                    if(_.isEmpty(this.bufferRegion)) return '';

                    return this.bufferRegion.code;
                }
            },
            data: {
                editedLocationDistrict: {},
                editedDistrictRegion: {},
                bufferDistrict: {},
                bufferLocation: {},
                bufferRegion: {},
                editedRegion: {},
                selectedRegion: '',
                selectedDistrict: '',
                editedDistrict: {},
                editedLocation: {},
                newDistrict: {
                    region_id: '',
                    name: '',
                    code: ''
                },
                newRegion: {
                    name: '',
                    code: ''
                },
                newLocation: {
                    district_id: '',
                    name: '',
                    code: ''
                },
                regions: [],
                districts: [],
                regionSelected: false,
                districtSelected: false,
                role_id: role_id
            },
            methods: {
                saveRegion: function(){
                    var name = this.newRegion.name.trim();
                    var code = _.trim(this.newRegion.code, '_ ');
                    if(name && code){
                        var data = new FormData;
                        data.append('name', name);
                        data.append('code', code);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$broadcast('new:region', data);
                    }
                },
                updateRegion: function(){
                    if(_.isEqual(this.editedRegion, this.bufferRegion))
                        return $editRegionFormModal.modal('hide');
                    
                    var name = this.editedRegion.name.trim();
                    var code = _.trim(this.editedRegion.code, '_ ');
                    if(name && code){
                        var data = new FormData;
                        data.append('name', name);
                        data.append('code', code);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$broadcast('update:region', data);
                    }
                },
                viewDistricts: function(region){
                    this.selectedRegion = region;
                    this.$broadcast('reload:districts', region);
                    this.regionSelected = true;
                },
                viewLocations: function(district){
                    this.selectedDistrict = district;
                    this.$broadcast('reload:locations', district);
                    this.districtSelected = true;
                },
                saveLocation: function(){
                    var name = this.newLocation.name.trim();
                    var code = _.trim(this.newLocation.code, '_')
                    if(name && code){
                        var data = new FormData;
                        data.append('name', name);
                        data.append('code', this.selectedDistrict.code+code);
                        data.append('district_id', this.selectedDistrict.id);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$broadcast('new:location', data);
                    }
                },
                updateLocation: function(){
                    if(_.isEqual(this.editedLocation, this.bufferLocation))
                        return $editLocationFormModal.modal('hide');
                    
                    var name = this.bufferLocation.name.trim();
                    var code = _.trim(this.bufferLocation.code, '_');
                    if(name && code){
                        var codeToSave = this.selectedDistrict.code + code;
                        if(codeToSave == this.editedLocation.code && name == this.editedLocation.name){
                            $editLocationFormModal.modal('hide');
                            return false;
                        }
                        var data = new FormData;
                        data.append('name', name);
                        data.append('code', codeToSave);
                        data.append('id', this.editedLocation.id);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$broadcast('update:location', data);
                    }
                },
                saveDistrict: function(){
                    var name = this.newDistrict.name.trim();
                    var code = _.trim(this.newDistrict.code, '_');
                    if(name && code){
                        var data = new FormData;
                        data.append('name', name);
                        data.append('code', this.selectedRegion.code+code);
                        data.append('region_id', this.selectedRegion.id);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$broadcast('new:district', data);
                    }
                },
                updateDistrict: function(){
                    if(_.isEqual(this.editedDistrict, this.bufferDistrict))
                        return $editDistrictFormModal.modal('hide');
                    
                    var name = this.bufferDistrict.name.trim();
                    var code = _.trim(this.bufferDistrict.code, '_');
                    if(name && code){
                        var codeToSave = this.selectedRegion.code + code;
                        if(name == this.editedDistrict.name && codeToSave == this.editedDistrict.code){
                            $editDistrictFormModal.modal('hide');
                            return false;
                        }
                        var data = new FormData;
                        data.append('id', this.editedDistrict.id);
                        data.append('name', name);
                        data.append('code', codeToSave);
                        data.append('_token', "{{ csrf_token() }}");
                        this.$broadcast('update:district', data);
                    }
                },
                notify: function(message, status, sticky){
                    var stick = sticky ? sticky : false;
                    $.notific8(message,
                            { sticky: stick,
                                horizontalEdge: "top",
                                theme: status}
                    )}
            },
            events: {
                'region:changed': function(region){
                    this.viewDistricts(region);
                },
                'district:changed': function(district){
                    this.viewLocations(district);
                },
                'regions:ready': function(regions){
                    // ('received regions => ' + regions);
                    this.regions = regions;

                    // this.selectedRegion = first_region;
                    // this.$broadcast('region:selected', first_region);
                },
                'districts:ready': function(districts){
                    this.districts = districts;
                    // this.selectedDistrict = first_district;
                    // this.$broadcast('district:selected', first_district);
                },
                'edit:region': function(region){
                    this.bufferRegion = _.cloneDeep(region);
                    this.editedRegion = _.cloneDeep(region);
                    $editRegionFormModal.modal('show');
                },
                'edit:district': function(district){
                    this.editedDistrictRegion = _.find(this.regions, ['id', district.region_id]);
                    this.bufferDistrict = _.assign({}, _.cloneDeep(district), {code: district.code.substr(-2)});
                    this.editedDistrict = _.assign({}, _.cloneDeep(district), {code: district.code.substr(-2)});
                    $editDistrictFormModal.modal('show');
                },
                'edit:location': function(location){
                    this.editedLocationDistrict = _.find(this.districts, ['id', location.district_id]);
                    this.bufferLocation = _.assign({}, _.cloneDeep(location), {code: location.code.substr(-2)});
                    this.editedLocation = _.assign({}, _.cloneDeep(location), {code: location.code.substr(-2)});
                    $editLocationFormModal.modal('show');
                },
                'notify:event': function(data){
                    this.notify(data.message, data.status);
                }
            }
        });
    })
</script>