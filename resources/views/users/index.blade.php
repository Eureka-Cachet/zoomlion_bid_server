@extends('partials._main_master')

@section('main-content')

    <div id="newUser" class="modal fade col-xs-6 col-xs-offset-3" data-backdrop="static" data-keyboard="false">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
            <h4 class="modal-title">Create User</h4>
        </div>
        <!-- //modal-header-->
        <div class="modal-body">
            <form id="newUserForm" @submit.prevent="save_user" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                <div class="form-group">
                    <label class="control-label">Full Name</label>
                    <div>
                        <div class="input-icon right"> <i class="fa fa-user ico "></i>
                            <input v-model="newUser.full_name"
                                   required type="text" class="form-control"
                                   name="full_name">
                            <span class="help-block"><a style="color: #29166f" href="#">eg: Firstname Surname</a> <i style="color: #29166f" class="fa fa-info"></i></span>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label">Email</label>
                    <div>
                        <div class="input-icon right"> <i class="fa fa-mail ico "></i>
                            <input v-model="newUser.email"
                                   required type="email" class="form-control"
                                   name="username">
                            {{--<span class="help-block"><a style="color: #29166f" href="#">eg: mm/dd/yyyy</a> <i style="color: #29166f" class="fa fa-info"></i></span>--}}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label">Role</label>
                    <div>
                        <select
                                v-select="newUser.role" required style="width: 100%;"
                                class="form-control" name="role_id" :options="roles">
                        </select>
                    </div>
                </div>

                <div class="form-group" v-show="show_region">
                    <label class="control-label">Region</label>
                    <div>
                        <v-select
                                :on-change="fetchDistricts"
                                :value.sync="newUser.region"
                                :options="regions"
                                placeholder="choose region..."
                                label="name"
                        >
                        </v-select>
                    </div>
                </div>

                <div class="form-group" v-show="show_region">
                    <label class="control-label">District</label>
                    <div>
                        <v-select
                                :on-change="fetchLocations"
                                :value.sync="newUser.district"
                                :options="districts"
                                placeholder="choose district..."
                                label="name"
                        >
                        </v-select>
                    </div>
                </div>

                {{--<div class="form-group" v-show="show_pin">--}}
                    {{--<label class="control-label">Device PIN</label>--}}
                    {{--<div>--}}
                        {{--<div class="input-icon right"> <i class="fa fa-mail ico "></i>--}}
                            {{--<input v-model="newUser.pin"--}}
                                   {{--required type="text" class="form-control"--}}
                                   {{--name="pin">--}}
                            {{--<span class="help-block"><a style="color: #29166f" href="#">eg: mm/dd/yyyy</a> <i style="color: #29166f" class="fa fa-info"></i></span>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}

                {{--<div class="form-group" v-show="show_location">--}}
                {{--<label class="control-label">Location</label>--}}
                {{--<div>--}}
                {{--<select v-model="newUser.location_id"--}}
                {{--class="form-control">--}}
                {{--<option v-for="location in locations" :value="location.id">--}}
                {{--@{{ location.name }}--}}
                {{--</option>--}}
                {{--</select>--}}
                {{--</div>--}}
                {{--</div>--}}

                <div class="form-group offset">
                    <div>
                        <button style="background-color: #29166f; color: white;" type="submit" class="btn btn-block">
                            <i class="fa fa-save"></i>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <!-- //modal-body-->
    </div>


    <div id="main">
        @include('partials._breadcrumb', ["active" => "Users"])
        <!-- //breadcrumb-->

        <div id="content">

            <div class="row">
                <div class="col-sm-12">
                    <section class="panel" id="usersTablePanel">
                        <header class="panel-heading row">
                            <div class="col-sm-9">
                                <div class="form-inline form-group">
                                    <div class="input-group col-xs-12">
                                        <input v-model="searchFor" placeholder="search ..."
                                               class="form-control input-sm"
                                               @keyup.enter="setFilter">
                                    <span class="input-group-btn">
                                        <button class="btn btn-sm" @click="setFilter"
                                        type="button"><i class="fa fa-search"></i></button>
                                        <button class="btn btn-sm" @click="resetFilter"
                                        type="button"><i class="fa fa-times"></i></button>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <a style="color: #29166f" data-toggle="modal" href="#newUser" class="pull-right">
                                    <i class="fa fa-plus-square"></i>
                                    New User
                                </a>
                            </div>
                        </header>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <vuetable
                                        api-url="{!! route('api.users.all') !!}"
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

<script>

        $(function(){
            
            Vue.component('v-select', VueSelect.VueSelect);


            var $usersTablePanel = $('#usersTablePanel');

            var E_SERVER_ERROR = 'Error communicating with the server';

            // fields definition
            var tableColumns = [
                {
                    title: 'Full Name',
                    name: 'full_name',
                    sortField: 'full_name',
                    dataClass: 'text-center'
                },
                {
                    title: 'Username',
                    name: 'username',
                    sortField: 'username',
                    dataClass: 'text-center'
                },
                {
                    title: 'Role',
                    name: 'role.name',
                    sortField: 'role_id',
                    dataClass: 'text-center',
                    callback: 'allCap'
                },
                {
                    title: 'Date of birth',
                    name: 'date_of_birth',
                    sortField: 'date_of_birth',
                    callback: 'formatDate',
                    dataClass: 'text-center'
                },
                {
                    title: 'Actions',
                    name: '__actions',
                    dataClass: 'text-center'
                }
            ];

            Vue.config.debug = true;

            var loadingOptions = {
                image       : "",
                fontawesome : "fa fa-refresh fa-spin",
                maxSize: "20"
            };

            // create pagination component using bootstrap styling
            Vue.component('vuetable-pagination-bootstrap', {
                template: '#vuetable-pagination-bootstrap-template',
                // mixins: [paginationMixin],
                methods: {
                    loadPage: function(page) {
                        this.$dispatch('vuetable-pagination:change-page', page)
                    }
                }
            });

            var $user_form = $("#newUser");

            Vue.directive('select', {
                twoWay: true,
                priority: 1000,

                params: ['options'],
                paramWatchers: {
                    options: function(val, old){
                        var data = [];
                        _.forEach(val, function(value){
                            data.push({id: value.id, text: value.name})
                        });
                        $(this.el).select2({data: data}).trigger('change');
                    }
                },
                bind: function () {
                    var self = this;
                    $(this.el).select2({
                        data: this.params.options,
                        placeholder: "Select Role",
                        allowClear: true}).on('change', function() {
                        self.set(this.value)
                    })
                },
                update: function (value) {
                    $(this.el).val(value).trigger('change')
                },
                unbind: function () {
                    $(this.el).off().select2('destroy')
                }
            });

            new Vue({
                el: '#main-content',
                computed: {
                    show_region: function(){
                        if (this.newUser.role != null){
                            var role_id = this.newUser.role;
                                if(role_id == 3){
                                    console.log(this.newUser.role);
                                    this.showing_region = false;
                                    return false;
                                }else if(role_id == 5){
                                    this.showing_region = false;
                                    return false;
                                }else if(role_id == 4){
                                    this.showing_region = true;
                                    return true;
                                }else if(role_id == 2){
                                    this.showing_region = true;
                                    return true;
                                }else if(role_id == 6){
                                    this.showing_region = true;
                                    this.showing_distrtict = true;
                                    return true;
                                }else{
                                    this.showing_distrtict = false;
                                    return false;
                                }
                            }
                    },
                    show_pin: function(){
                        var role_id = this.newUser.role;
                        console.log('selected role', role_id);
                        return role_id === "2" || role_id === "6";
                    }
                },
                data: {
                    showing_region: true,
                    newUser: {
                        full_name: '',
                        email: '',
                        role: null,
                        region: '',
                        district: '',
                        location_id: '',
                        pin: ''
                    },
                    searchFor: '',
                    fields: tableColumns,
                    sortOrder: [{
                        field: 'id',
                        direction: 'asc'
                    }],
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    itemActions: [
                        { name: 'view-user', label: 'view', icon: 'fa fa-eye', class: 'btn btn-xs' },
                        { name: 'reset-user', label: 'reset', icon: 'fa fa-refresh', class: 'btn btn-xs'}
//                        { name: 'delete-user', label: 'delete', icon: 'fa fa-trash-o', class: 'btn btn-xs' }
                    ],
                    moreParams: [],
                    roles: [],
                    regions: [],
                    districts: [],
                    locations: [],
                    users: []
                },
                methods: {

                    fetchDistricts: function(region){
                        var url = 'internal-api/regions/' + region.id + '/districts?scope=employment';
                        this.$http.get(url).then(resp => {
                            this.districts = resp.data
                        })
                        // console.log(url);
                    },
                    fetchLocations: function(district){
                        var url = 'internal-api/districts/'+ district.id + '/locations?scope=employment';
                        this.$http.get(url).then(resp => {
                            this.locations = resp.data;
                        })
                        // console.log(url);
                    },
                    save_user: function(){
                        $user_form.LoadingOverlay("show", loadingOptions);
                        var full_name = this.newUser.full_name.trim();
                        var email = this.newUser.email;
                        var role_id = this.newUser.role;
                        var pin = this.newUser.pin;
                        var region_id = this.newUser.region ? this.newUser.region.id : null;
                        var district_id = this.newUser.district ? this.newUser.district.id : null;
                        if(full_name && email){
                            var data = new FormData;
                            data.append('full_name', full_name);
                            data.append('username', email);
                            data.append('role_id', role_id);
                            data.append('_token', '{{ csrf_token() }}');

                            if(role_id == 2){
                                data.append('region_id', region_id);
                                data.append('district_id', district_id);
                                data.append('pin', pin);
                            }else if(role_id == 4){
                                data.append('region_id', region_id);
                                data.append('district_id', district_id);
                            }else if(role_id == 6){
                                data.append('region_id', region_id);
                                data.append('district_id', district_id);
                                data.append('pin', pin);
                            }

                            this.$http.post('internal-api/users', data).then(
                                    function(response){
                                        if(response.data.success){
                                            this.$dispatch('user:saved');
                                            this.notify("Success! The user has been added.", 'success');
                                            $user_form.modal('hide');
                                            console.log(response.data);
                                        }else{
                                            this.notify("Error! Invalid Data", 'danger');
                                        }
                                        $user_form.LoadingOverlay('hide', true);
                                    },
                                    function(response){
                                        $user_form.LoadingOverlay('hide', true);
                                        this.notify("Error! Invalid Data", 'danger');
                                    });
                        }
                    },
                    allCap: function(value) {
                        var formatted = value;
                        switch (value){
                            case "SYSADMIN":
                                formatted = "<span class='label'>" + _.upperCase(value) + "</span>";
                                break;
                            case "OPERATION":
                                formatted = "<span class='label label-success'>" + _.upperCase(value) + "</span>";
                                break;
                            case "AUDIT":
                                formatted = "<span class='label label-warning'>" + _.upperCase(value) + "</span>";
                                break;
                            case "ACCOUNT":
                                formatted = "<span class='label label-info'>" + _.upperCase(value) + "</span>";
                                break;
                            case "IT":
                                formatted = "<span class='label label-default'>" + _.upperCase(value) + "</span>";
                                break;
                            case "SUPERVISOR":
                                formatted = "<span class='label label-danger'>" + _.upperCase(value) + "</span>";
                                break;
                        }
                        return formatted;
                    },
                    formatDate: function(value, fmt) {
                        if (value == null) return '';
                        fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt;
                        return moment(value, 'YYYY-MM-DD').format(fmt);
                    },
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
                    view_profile: function(user){
                        window.location.href = 'users/' + user.uuid;
                    },
                    reset_account: function(user){
                        $.confirm({
                            title: 'Are You Sure?',
                            content: 'This Will Reset ' + user.full_name + ' Account',
                            confirm: function(){
                                var url = 'internal-api/users/' + user.uuid + '/reset';
                                var data = new FormData();
                                data.append('_token', "{{ csrf_token() }}");
                                this.$http.post(url, data).then(
                                        function(response){
                                            if(response.data.success){
                                                this.resetFilter();
                                                this.notify(user.full_name +
                                                        " has been reset successfully.", 'success');
                                            }else{
                                                this.notify(user.full_name +
                                                        " account could not be reset.", 'danger');
                                            }
                                        },
                                        function(response){
                                            this.notify(user.full_name +
                                                    " account could not be reset.", 'danger');
                                        }
                                );
                            }.bind(this),
                            confirmButton: 'Yes',
                            cancelButton: 'NO',
                            confirmButtonClass: 'btn-warning',
                            cancelButtonClass: 'btn-success'
                        });
                    },
                    delete_account: function(user){
                        $.confirm({
                            title: 'Are You Sure?',
                            content: 'This Will Delete ' + user.full_name + ' Account.',
                            confirm: function(){
                                var url = 'internal-api/users/' + user.uuid;
                                var data = new FormData();
                                data.append('_token', "{{ csrf_token() }}");
                                this.$http.post(url, data).then(
                                        function(response){
                                            if(response.data.success){
                                                this.resetFilter();
                                                this.notify(user.full_name +
                                                        " has been deleted successfully.", 'success');
                                            }else{
                                                this.notify(user.full_name +
                                                        " account could not be deleted.", 'danger');
                                            }
                                        },
                                        function(response){
                                            this.notify(user.full_name +
                                                    " account could not be deleted.", 'danger');
                                        }
                                );
                            }.bind(this),
                            confirmButton: 'Yes',
                            cancelButton: 'NO',
                            confirmButtonClass: 'btn-danger',
                            cancelButtonClass: 'btn-success'
                        });

                    },
                    fetch_data: function(source, target){
                        var url = "internal-api/" + source;
                        var data;
                        this.$http.get(url).then(function(response){
                            data = response.data.data;
                            this.$set(target, data);
                        }, function(response){
                            console.log(response);
                        });
                    },
                    set_roles: function(){
                        this.fetch_data('roles', 'roles');
                    },
                    set_regions: function(){
                        this.fetch_data('regions', 'regions');
                    },
                    set_districts: function(){
                        this.fetch_data('districts', 'districts');
                    },
                    set_locations: function(){
                        this.fetch_data('locations', 'locations');
                    },
                    set_users: function(){
                        this.fetch_data('users', 'users');
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
                    'vuetable:action': function(action, data) {
                        console.log('vuetable:action', action, data);
                        switch (action){
                            case "view-user":
                                this.view_profile(data);
                                break;
                            case "reset-user":
                                this.reset_account(data);
                                break;
                            case "delete-user":
                                this.delete_account(data);
                                break;
                        }
                    },
                    'vuetable:loaded': function() {
                        $usersTablePanel.LoadingOverlay('hide');
                    },
                    'vuetable:loading': function(){
                        $usersTablePanel.LoadingOverlay('show', loadingOptions);
                    },
                    'user:saved': function(){
                        this.resetFilter();
                    }
                },
                ready: function(){
                    this.set_roles();
                    this.set_regions();
                    this.set_districts();
                    this.set_locations();
                    this.set_users();
                }

            })


        });

    </script>
@endsection
