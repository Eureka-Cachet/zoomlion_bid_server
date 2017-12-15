<script src="{!! elixir('js/vue-select.js') !!}"></script>

<script type="text/javascript">
    $(function(){

        Vue.component('v-select', VueSelect.VueSelect);

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin",
            maxSize: "50"
        };

        var $rankSelect = $('select[name="rank_id"]');
        var $newForm = $('#newEnrollmentForm');

        new Vue({
            el: '#main-content',
            data: {
                formData: {
                    district: '',
                    location: '',
                    module: '',
                    rank: '',
                    number: ''
                },
                show_generating: false,
                districts: [],
                locations: [],
                modules: [],
                ranks: []
            },
            methods: {
                generate: function(){
                    var number_of_form = this.formData.number;
                    var rank_id = this.formData.rank.id;
                    var district_id = this.formData.district.id;
                    var location_id = this.formData.location.id;
                    var module_id = this.formData.module.id;

                    if(rank_id == 1 && number_of_form != 1){
                        $.alert({
                            title: false,
                            content: "Sorry! A Module Can Only Have One Leader."
                        });
                        return false;
                    }

                    if(rank_id == 5 && number_of_form != 1){
                        $.alert({
                            title: false,
                            content: "Sorry! A Module Can Only Have One Leader."
                        });
                        return false;
                    }

                    if(rank_id == 7 && number_of_form != 1){
                        $.alert({
                            title: false,
                            content: "Sorry! A Module Can Only Have One Leader."
                        });
                        return false;
                    }

                    if(number_of_form > 0 && location_id && rank_id && district_id && module_id){
                        $.LoadingOverlay('show', loadingOptions);
                        var url = "{!! route('api.employment.form') !!}";
                        var data = new FormData();
                        data.append('rank_id', rank_id);
                        data.append('location_id', location_id);
                        data.append('district_id', district_id);
                        data.append('module_id', module_id);
                        data.append('number_of_form', number_of_form);
                        data.append('_token', "{!! csrf_token() !!}");
                        this.$http.post(url, data).then(function(res){
                            // console.log(res.data);
                            $.LoadingOverlay('hide');
                            if(res.data.success){
                                this.show_generating = true;
                                $newForm.LoadingOverlay('show', loadingOptions);
                                return ;
                            }
                            // $.alert("Error in generating the form. Please Try Again with Correct Information!");
                        }, function(error){
                            if(error.status === 401) return window.location.reload(true);
                            console.log(error);
                            $.LoadingOverlay('hide');
                            $.alert("Error in generating the form. Please Try Again with Correct Information!");
                        });
                    }
                },
                fetchDistricts: function(){
                    var url = 'internal-api/districts?scope=employment';
                    this.$http.get(url).then(resp => {
                        this.districts = resp.data
                    })
                },
                fetchLocations: function(district){
                    var url = 'internal-api/districts/'+ district.id + '/locations?scope=employment';
                    this.$http.get(url).then(resp => {
                        this.locations = resp.data;
                        this.formData.location = this.locations[0];
                    })
                },
                fetchModules: function(location){
                    var url = 'internal-api/locations/'+ location.id + '/modules?scope=employment';
                    this.$http.get(url).then(function(resp){
                        this.modules = resp.data.data;
                        this.formData.module = this.modules[0];
                    })
                },
                fetchRanks: function(){
                    var url = 'internal-api/ranks/';
                    this.$http.get(url).then(resp => {
                        this.ranks = resp.data
                    })
                },
                notify: function(message, status, sticky){
                    var stick = sticky ? sticky : false;
                    $.notific8(message,
                            { sticky:stick,
                                horizontalEdge:"top",
                                theme:status })},
            },
            ready: function(){
                var channel_prefix = 'staff_'+"{{auth()->user()->uuid}}";
                socket.on(channel_prefix + '_channel:FormsTemplateReady',
                    function(data){
                        this.$set('show_generating', false);
                        $newForm.LoadingOverlay('hide');
                    }.bind(this));

                socket.on(channel_prefix + '_channel:FormsDataGenerationFailed', function(data){
                    this.notify("Operation Failed", "danger", true);
                    this.$set('show_generating', false);
                    $newForm.LoadingOverlay('hide');
                }.bind(this));

                this.fetchRanks();
                this.fetchDistricts();
            }
        });

    })
</script>