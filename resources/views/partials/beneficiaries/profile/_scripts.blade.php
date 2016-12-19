<script src="{!! elixir('js/vue-select.js') !!}"></script>

<script type="text/javascript">

    var beneficiaryUuid = "{{ $beneficiary["uuid"] }}";

    $(function(){

        Vue.component('v-select', VueSelect.VueSelect);

        var $viewImageModal = $('#viewImage');
        var $profilePanel = $('#profilePanel');
        var $profileForm = $('#profileForm');

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin",
            maxSize: "20"
        };

        new Vue({
            el: "#main-content",
            computed: {
            },
            data: {
                viewingImage: {
                    uri: '',
                    size: 200,
                    modalSize: 560
                },
                beneficiary: {},
                beneficiaryBuffer: {},
                regions: [],
                districts: [],
                locations: [],
                modules: [],
                ranks: [],
                ids: []
            },
            methods: {
                viewImage: function(type, size){
                    console.log(type, size);
                    switch (type){
                        case "TR":
                            this.viewingImage = this.beneficiary.fingerprints[0];
                            if(size){this.viewingImage.size = size; this.viewingImage.modalSize = size + 40;}
                            break;
                        case "TL":
                            this.viewingImage = this.beneficiary.fingerprints[1];
                            if(size){this.viewingImage.size = size; this.viewingImage.modalSize = size + 40;}
                            break;
                        case "IR":
                            this.viewingImage = this.beneficiary.fingerprints[2];
                            if(size){this.viewingImage.size = size; this.viewingImage.modalSize = size + 40;}
                            break;
                        case "IL":
                            this.viewingImage = this.beneficiary.fingerprints[3];
                            if(size){this.viewingImage.size = size; this.viewingImage.modalSize = size + 40;}
                            break;
                        case "FO":
                            this.viewingImage = this.beneficiary.form;
                            if(size){this.viewingImage.size = size; this.viewingImage.modalSize = size + 40;}
                            break;
                    }
                    $viewImageModal.modal('show');
                },
                toDataUri: function(encoded){
                    return "data:image/jpg;base64," + encoded;
                },
                fetchIDs: function(){
                    var url = '/internal-api/ids';
                    this.$http.get(url).then(function(resp){
                        this.ids = resp.data;
                    }, function(error){
                        console.log(error);
                    })
                }
                ,
                update: function(){
                    if(_.isEqual(this.beneficiary, this.beneficiaryBuffer)) return;
                    if(
                         this.beneficiary.surname
                         && this.beneficiary.forenames
                         && this.beneficiary.gender
                         && this.beneficiary.phone_number
                         && this.beneficiary.date_of_birth
                         && this.beneficiary.address
                         && this.beneficiary.bank_name
                         && this.beneficiary.bank_location
                         && this.beneficiary.account_number
                         && this.beneficiary.allowance
                         && this.beneficiary.region
                         && this.beneficiary.district
                         && this.beneficiary.location
                         && this.beneficiary.module
                        ){
                            $profilePanel.LoadingOverlay('show', loadingOptions);
                            var url = '/internal-api/beneficiaries/' + this.beneficiary.uuid;
                            var data = new FormData;
                            data.append('surname', this.beneficiary.surname);
                            data.append('forenames', this.beneficiary.forenames);
                            data.append('gender', this.beneficiary.gender);
                            data.append('phone_number', this.beneficiary.phone_number);
                            data.append('date_of_birth', this.beneficiary.date_of_birth);
                            data.append('address', this.beneficiary.address);
                            data.append('bank_name', this.beneficiary.bank_name);
                            data.append('bank_branch', this.beneficiary.bank_location);
                            data.append('account_number', this.beneficiary.account_number);
                            data.append('allowance', this.beneficiary.allowance);
                            data.append('region_id', this.beneficiary.region.id);
                            data.append('district_id', this.beneficiary.district.id);
                            data.append('location_id', this.beneficiary.location.id);
                            data.append('module_id', this.beneficiary.module.department.id);
                            data.append('rank_id', this.beneficiary.rank.id);
                            data.append('identification_id', this.beneficiary.identification_type.id);
                            data.append('identification_number', this.beneficiary.identification_number);
                            data.append('bid', this.beneficiary.bid);

                            data.append('_token', "{{ csrf_token() }}");

                            this.$http.post(url, data)
                                .then(function(resp){
                                    if(resp.status === 200){
                                        console.log(resp.data);
                                        this.notify("Beneficiary Updated", "success", false);
                                        return setTimeout(function(){
                                            window.location.reload(true)
                                        }, 2000);
                                    }

                                    if(resp.status === 401){
                                        this.notify("Need to LogIn", "danger", true);
                                        return setTimeout(function(){
                                            window.location.reload(true)
                                        }, 2000);
                                    }
                                    //display error;
                                    $profileForm.LoadingOverlay('hide', true);
                                    return this.notify("Could Not Perform Action", "danger", true);

                                })
                                .catch(function(error){
                                    console.log(error);
                                    $profileForm.LoadingOverlay('hide', true);
                                    // display error;
                                    this.notify("Could Not Perform Action", "danger", true);
                                })
                    }
                },
                notify: function(message, status, sticky){
                    var stick = sticky ? sticky : false;
                    $.notific8(message,
                            { sticky:stick,
                                horizontalEdge:"top",
                                theme:status })
                },
                goBack: function(){
                    window.location.href = '/beneficiaries'
                },
                loadProfileData: function(){
                    $profilePanel.LoadingOverlay('show', loadingOptions);
                    var url = '/internal-api/beneficiaries/' + beneficiaryUuid;
                    this.$http.get(url).then(function(res){
                        this.$set('beneficiary', res.data);
                        this.$set('beneficiaryBuffer', _.cloneDeep(this.beneficiary));
                        this.fetchDistricts(this.beneficiary.region);
                        this.fetchLocations(this.beneficiary.district);
                        this.fetchModules(this.beneficiary.location);
                        $profilePanel.LoadingOverlay('hide', true);
                    }, function(error){
                        console.log(error);
                        $profilePanel.LoadingOverlay('hide', true);
                    })
                },
                fetchRegions: function(){
                    var url = '/internal-api/regions?scope=employment';
                    this.$http.get(url).then(function(resp){
                        this.regions = resp.data
                    })
                },
                fetchDistricts: function(region){
                    if(!region) return;
                    var url = '/internal-api/regions/' + region.id + '/districts?scope=employment';
                    this.$http.get(url).then(function(resp){
                        this.districts = resp.data;
                        if(!_.isEqual(this.beneficiary.region, this.beneficiaryBuffer.region)){
                            this.beneficiary.district = this.districts[0];
                        }
                    })
                },
                fetchLocations: function(district){
                    if(!district) return;
                    var url = '/internal-api/districts/'+ district.id + '/locations?scope=employment';
                    this.$http.get(url).then(function(resp){
                        this.locations = resp.data;
                        if(!_.isEqual(this.beneficiary.district, this.beneficiaryBuffer.district)){
                            this.beneficiary.location = this.locations[0];
                        }
                    })
                },
                fetchModules: function(location){
                    console.log('location -> ', location);
                    if(!location) return;
                    var url = '/internal-api/locations/'+ location.id + '/modules?scope=employment';
                    this.$http.get(url).then(function(resp){
                        console.log('modules -> ', resp.data);
                        this.modules = resp.data.data;
                        if(!_.isEqual(this.beneficiary.location, this.beneficiaryBuffer.location)){
                            this.beneficiary.module = this.modules[0];
                        }
                    })
                },
                fetchRanks: function(){
                    var url = '/internal-api/ranks/';
                    this.$http.get(url).then(function(resp){
                        this.ranks = resp.data
                    })
                },
                activateBeneficiary: function(){
                    $profilePanel.LoadingOverlay('show', loadingOptions);
                    var url = "activate";
                    this.$http.post(url, {"_token": "{{ csrf_token() }}"})
                        .then(function(resp){
                            if(resp.status === 200){
                                this.notify("Beneficiary Activation Was Successful", "success", false);
                                this.beneficiary.active = resp.data.active;
                                return $profilePanel.LoadingOverlay('hide', true);
                            }
                        }, function(error){
                            this.notify("Beneficiary Activation Failed", "danger", true);
                            $profilePanel.LoadingOverlay('hide', true);
                        })
                },
                deactivateBeneficiary: function(){
                    $profilePanel.LoadingOverlay('show', loadingOptions);
                    var url = "deactivate";
                    this.$http.post(url, {"_token": "{{ csrf_token() }}"})
                        .then(function(resp){
                            if(resp.status === 200){
                                this.notify("Beneficiary Deactivation Was Successful", "success", false);
                                this.beneficiary.active = resp.data.active;
                                return $profilePanel.LoadingOverlay('hide', true);
                            }
                        }, function(error){
                            this.notify("Beneficiary Activation Failed", "danger", true);
                            $profilePanel.LoadingOverlay('hide', true);
                        })
                }
            },
            created: function(){
                this.loadProfileData();
                this.fetchRegions();
                this.fetchRanks();
                this.fetchIDs();
            },
            events: {}
        });
    });
</script>