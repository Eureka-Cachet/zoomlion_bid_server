@extends('partials._main_master')

@section('main-content')

    <div id="main" style="background: white; height: 100vh;">

        <!--<ol class="breadcrumb">
            <li class="active">Dashboard</li>
        </ol>-->

         <div class="row text-center" style="margin-top: 10px; margin-bottom: 20px;">
            <h2><strong>BENEFICIARIES MANAGEMENT SYSTEM</strong></h2>
        </div>

        <div class="row">

            <div class="col-lg-10 col-lg-offset-1 col-md-12" style="margin-top: 10px;">
            <div class="col-sm-3">
                <div class="well" style="background-color: #29166f; color: white;">
                    <div class="widget-tile">
                        <section>
                            <h5><strong>BENEFICIARIES</strong>  </h5>
                            <h2 class="row">
                                <span class="col-xs-4" v-cloak>@{{ beneficiaries.total }}</span>
                                <span v-show="invalid" class="col-xs-4 text-success" v-cloak><b>@{{ beneficiaries.valid }}</b></span>
                                <span v-show="invalid" class="col-xs-4 text-danger" v-cloak><b>@{{ beneficiaries.invalid }}</b></span>
                            </h2>
                        </section>
                        <div class="hold-icon"><i class="fa fa-users"></i></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="well" style="background-color: #29166f; color: white;">
                    <div class="widget-tile">
                        <section>
                            <h5><strong>ACTIVE DEVICES</strong>  </h5>
                            <h2 v-if="online" v-cloak>@{{ devices.active }}</h2>
                            <h2 v-else>0</h2>
                        </section>
                        <div class="hold-icon"><i class="fa fa-mobile-phone"></i></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="well" style="background-color: #29166f; color: white;">
                    <div class="widget-tile">
                        <section>
                            <h5><strong>CLOCKING PER DAY</strong> </h5>
                            <h2 v-cloak>@{{ clocking.day.total }}</h2>
                        </section>
                        <div class="hold-icon"><i class="fa fa-calendar"></i></div>
                    </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="well" style="background-color: #29166f; color: white;">
                    <div class="widget-tile">
                        <section>
                            <h5><strong>CLOCKING PER MONTH</strong> </h5>
                            <h2 v-cloak>@{{ clocking.month.total }}</h2>
                        </section>
                        <div class="hold-icon"><i class="fa fa-calendar"></i></div>
                    </div>
                </div>
            </div>
        </div>

        </div>

        <div class="row text-center" style="margin-top: 1.875em; margin-bottom: 1.875em;">
            <h2><strong>{{ Carbon\Carbon::now()->format('l jS \\of F Y ') }}</strong></h2>
        </div>

        <div class="row" style="margin-top: 0.625em;">

            <div class="col-sm-12 col-lg-10 col-lg-offset-1">

                <div class="col-sm-6 col-md-3" v-for="region in regions">
                    <section class="panel" style="border: 1px solid #29166f;">
                        <header class="panel-heading">
                            <h4><strong v-cloak>@{{ region.name }}</strong></h4>
                        </header>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <a style="color: rgb(111, 123, 138);"><span style="width: 3.125em; font-size: 1.2em;" class="badge pull-right" v-cloak>@{{ region.beneficiaries }}</span> Beneficiaries</a>
                            </li>
                            <li class="list-group-item">
                                <a style="color: rgb(111, 123, 138);"><span style="width: 3.125em; font-size: 1.2em;" class="badge pull-right" v-cloak>@{{ region.clocking }}</span> Clocking</a>
                            </li>
                        </ul>
                    </section>
                </div>

            </div>

        </div>

    </div>

@endsection

@section('scripts')

    <script>

        $(function(){

            var loadingOptions = {
                image       : "",
                fontawesome : "fa fa-refresh fa-spin",
                maxSize: "20"
            };

            var devicesEvent = "DASHBOARD:DEVICES";

            var updateDashboardEvent = "DASHBOARD:UPDATE";


            var $content = $('#content');

            var host = window.location.host;
            var socket = io.connect('https://' + host + ':6001', {secure: true});

            new Vue({
                el: '#main-content',
                data: {
                    regions: [],
                    clocking: {
                        day: {},
                        month: {}
                    },
                    devices: {
                        active: null
                    },
                    beneficiaries: {
                        total: null,
                        valid: null,
                        invalid: null
                    }
                },
                computed: {
                    online: function(){
                        if(this.devices.active === null){
                            return false;
                        }
                        return true;
                    },
                    invalid: function(){
                        if(this.beneficiaries){
                            return this.beneficiaries.invalid > 0;
                        }
                    }
                },
                methods: {
                    fetchRegions: function(){
                        $content.LoadingOverlay('show', loadingOptions);
                        var url = '/internal-api/dashboard/regions';
                        this.$http.get(url).then(function(resp){
                            this.regions = resp.data;
                            $content.LoadingOverlay('hide');
                        }, function(error){
                            console.log(error);
                            $content.LoadingOverlay('hide');
                        });
                    },
                    fetchDayClocking: function(){
                        $content.LoadingOverlay('show', loadingOptions);
                        var url = '/internal-api/dashboard/clocking?span=day';
                        this.$http.get(url).then(function(resp){
                            this.clocking.day = resp.data;
                            $content.LoadingOverlay('hide');
                        }, function(error){
                            console.log(error);
                            $content.LoadingOverlay('hide');
                        });
                    },
                    fetchMonthClocking: function(){
                        $content.LoadingOverlay('show', loadingOptions);
                        var url = '/internal-api/dashboard/clocking?span=month';
                        this.$http.get(url).then(function(resp){
                            this.clocking.month = resp.data;
                            $content.LoadingOverlay('hide');
                        }, function(error){
                            console.log(error);
                            $content.LoadingOverlay('hide');
                        });
                    },
                    fetchBeneficiaries: function(){
                        $content.LoadingOverlay('show', loadingOptions);
                        var url = '/internal-api/dashboard/beneficiaries';
                        this.$http.get(url).then(function(resp){
                            this.beneficiaries = resp.data;
                            $content.LoadingOverlay('hide');
                        }, function(error){
                            console.log(error);
                            $content.LoadingOverlay('hide');
                        });
                    }
                },
                ready: function(){

                    socket.on(devicesEvent, function(data){
                        this.devices.active = data.length
                    }.bind(this));

                    socket.on(updateDashboardEvent, function(data){
                        data = JSON.parse(data)[0];
                        this.clocking.day.total = data.clocking.day;
                        this.clocking.month.total = data.clocking.month;
                        this.regions = data.regions.day;
                        this.beneficiaries = data.beneficiaries;
                    }.bind(this))

                    this.fetchRegions();
                    this.fetchDayClocking();
                    this.fetchMonthClocking();
                    this.fetchBeneficiaries();
                },
                events: {}
            });

        })

    </script>


@endsection