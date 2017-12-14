@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @if(collect([1, 5])->contains(auth()->user()->roles->first()->id))
            @include('partials._breadcrumbs', ['parent' => ['Users', route('users.index')], 'child' => ucwords($user->full_name)])
        @endif

        <!-- //breadcrumb-->

        <div id="content">

            <div class="row">
                <div class="col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3">
                    <section class="panel" id="profile">
                        <header class="panel-heading row">
                            <div class="col-md-6">
                                <h4>Profile</h4>
                            </div>
                            @if(auth()->user()->id != $user->id OR (auth()->user()->roles->first()->id == \Eureka\Helpers\Constants::SYSADMIN_ROLE AND auth()->user()->id != $user->id))
                                @if($user->roles->first()->id == \Eureka\Helpers\Constants::OPERATION_ROLE)
                                <div class="col-md-3 text-right">
                                    <button @click="canHaveDevice" class="btn btn-sm" v-if="!user.is_supervisor">
                                        Can Have Device
                                    </button>
                                    <button @click="cannotHaveDevice" class="btn btn-sm" v-if="user.is_supervisor">
                                        Cannot Have Device
                                    </button>
                                </div>
                                @endif
                                <div class="col-md-3 text-right">
                                    <button @click="deactivateUser" class="btn btn-sm" v-if="user.active">Deactivate</button>
                                    <button @click="activateUser" class="btn btn-sm" v-else>Activate</button>
                                </div>
                            @endif
                        </header>
                        <div class="panel-body">
                            <form @submit.prevent="changePassword" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                <div class="form-group">
                                    <label class="control-label">Full Name</label>
                                    <div>
                                        <p class="form-control-static">{!! ucwords($user->full_name) !!}</p>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Date of Birth</label>
                                    <div>
                                        <p class="form-control-static">
                                            {!! \Carbon\Carbon::parse($user->date_of_birth)->toFormattedDateString() !!}
                                        </p>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Role</label>
                                    <div>
                                        <p class="form-control-static">
                                            {!! $user->roles->first()->name !!}
                                        </p>
                                    </div>
                                </div>

                                <div class="divider"></div>
                                @if(auth()->user()->id == $user->id)
                                    <div class="form-group">
                                        <label class="control-label">Current Password</label>
                                        <div>
                                            <input v-model="oldPassword" required name="current_password" type="password" class="form-control" placeholder="...........">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">New Password</label>
                                        <div>
                                            <input v-model="newPassword" required name="new_password" type="password" class="form-control" placeholder="...........">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Confirm Password</label>
                                        <div>
                                            <input v-model="confirmNewPassword" required name="new_password_confirmation" type="password" class="form-control" placeholder="...........">
                                        </div>
                                    </div>

                                <div class="form-group offset">
                                    <div>
                                        <button style="background-color: #29166f; color: white;" type="submit" class="btn btn-block">
                                            <i class="fa fa-save"></i>
                                            Change Password
                                        </button>
                                    </div>
                                </div>
                                @endif
                            </form>

                        </div>
                    </section>
                </div>
            </div>
            <!-- //content > row-->


        </div>
        <!-- //content-->


    </div>
@endsection

@section('scripts')
    <script>

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin",
            maxSize: "20"
        };

        $status = $('input[name="status"]');

        var $profilePanel = $('#profile');

        new Vue({
            el: "#main-content",
            data: {
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: '',
                user: {}
            },
            methods: {
                canHaveDevice: function(){
                    $.confirm({
                        title: "Are You Sure?",
                        content: false,
                        confirm: function(){
                            $profilePanel.LoadingOverlay('show', loadingOptions);
                            var url = "{!! route('api.user.update', ['id' => $user->uuid]) !!}";
                            var data = {type: 'supervisor', '_token': "{!! csrf_token() !!}", supervisor: true};
                            this.$http.post(url, data).then(function(res){
                                $profilePanel.LoadingOverlay('hide');
                                if(res.data.success){
                                    this.user.is_supervisor = true;
                                    $.alert('User Can Have Device!')
                                }
                            }, function(res){
                                $.alert('Operation Failed!')
                            });
                        }.bind(this),
                        confirmButton: "Yes"
                    });
                },
                cannotHaveDevice: function(){
                    $.confirm({
                        title: "Are You Sure?",
                        content: false,
                        confirm: function(){
                            $profilePanel.LoadingOverlay('show', loadingOptions);
                            var url = "{!! route('api.user.update', ['id' => $user->uuid]) !!}";
                            var data = {type: 'supervisor', '_token': "{!! csrf_token() !!}", supervisor: false};
                            this.$http.post(url, data).then(function(res){
                                $profilePanel.LoadingOverlay('hide');
                                if(res.data.success){
                                    this.user.is_supervisor = false;
                                    $.alert('User Cannot Have Device!')
                                }
                            }, function(res){
                                $.alert('Operation Failed!')
                            });
                        }.bind(this),
                        confirmButton: "Yes"
                    });
                },
                changePassword: function(){
                    $profilePanel.LoadingOverlay('show', loadingOptions);
                    var oldPass = this.oldPassword.trim(),
                            newPass = this.newPassword.trim(),
                            confirmPass = this.confirmNewPassword.trim();
                    if(oldPass && newPass && confirmPass){
                        if(newPass != confirmPass){
                            $.alert("Passwords Do Not Match.");
                            $profilePanel.LoadingOverlay('hide');
                            return false;
                        }
                        var url = "{!! route('api.user.update', ['id' => $user->uuid]) !!}";
                        var data = new FormData;
                        data.append('old_password', oldPass);
                        data.append('new_password', newPass);
                        data.append('confirm_password', confirmPass);
                        data.append('_token', "{!! csrf_token() !!}");
                        data.append('type', "password");
                        this.$http.post(url, data).then(function(res){
                            $profilePanel.LoadingOverlay('hide');
                            if(res.data.success){
                                this.oldPassword = '';
                                this.newPassword = '';
                                this.confirmNewPassword = '';
                                $.alert("Password Changed Successfully.");
                            }else{
                                $.alert("Could Not Change Password.");
                            }
                        }, function(res){
                            $profilePanel.LoadingOverlay('hide');
                            $.alert("Could Not Change Password.");
                        });
                    }
                },
                activateUser: function(){
                    $.confirm({
                        title: "Are You Sure?",
                        content: false,
                        confirm: function(){
                            $profilePanel.LoadingOverlay('show', loadingOptions);
                            var url = "{!! route('api.user.update', ['id' => $user->uuid]) !!}";
                            var data = {type: 'general', '_token': "{!! csrf_token() !!}", active: true};
                            this.$http.post(url, data).then(function(res){
                                $profilePanel.LoadingOverlay('hide');
                                if(res.data.success){
                                    this.user.active = true;
                                    $.alert('User Activated!')
                                }
                            }, function(res){
                                $.alert('Operation Failed!')
                            });
                        }.bind(this),
                        confirmButton: "activate"
                    });
                },
                deactivateUser: function(){
                    $.confirm({
                        title: 'Are You Sure?',
                        content: false,
                        confirm: function(){
                            $profilePanel.LoadingOverlay('show', loadingOptions);
                            var url = "{!! route('api.user.update', ['id' => $user->uuid]) !!}";
                            var data = {type: 'general', '_token': "{!! csrf_token() !!}", active: false};
                            this.$http.post(url, data).then(function(res){
                                $profilePanel.LoadingOverlay('hide');
                                if(res.data.success){
                                    this.user.active = false;
                                    $.alert('User Deactivated!')
                                }
                            }, function(res){
                                $.alert('Operation Failed!')
                            });
                        }.bind(this),
                        confirmButton: "deactivate"
                    });
                },
                setUser: function(){
                    this.$http.get("{!! route('api.user', ['id' => $user->uuid]) !!}").then(function(res){
                        this.$set('user', res.data);
                    }, function(res){

                    });
                }
            },
            created: function(){
                this.setUser();
            }
        });
    </script>
@endsection