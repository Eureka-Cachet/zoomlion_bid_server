<script src="{!! elixir('js/vue-select.js') !!}"></script>

<script type="text/javascript">

    $(function(){

        var beneficiaryUuid = "{{ $beneficiary["uuid"] }}";

        var userUUID = "{{auth()->user()->uuid}}";

        var host = window.location.host;
        var socket = io.connect('https://' + host + ':6001', {secure: true});
        var enrolmentSocket = io.connect('https://' + host + ':6001/enrolment', {secure: true});

        var channel = 'staff_'+"{{auth()->user()->uuid}}_channel:CaptureBioData";
        var captureBioEvent = "{{auth()->user()->uuid}}:CaptureBioDataUpdate";
        var cancelCaptureEvent = "{{auth()->user()->uuid}}:CancelCapture";
        var reviewCaptureEvent = "{{auth()->user()->uuid}}:ReviewBioData";
        var editCaptureEvent = "{{auth()->user()->uuid}}:EditBioData";
        var beneficiaryWasUpdated = "staff_{{auth()->user()->uuid}}_channel:BeneficiaryWasUpdated";
        var operationFailed = "staff_{{auth()->user()->uuid}}_channel:BeneficiaryAddingFailed";

        var $capturingModal = $("#capturingModal"),
            $reviewingModal = $("#reviewingModal"),
            $savingModal = $('#savingModal');

        Vue.component('v-select', VueSelect.VueSelect);

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
                beneficiary: {
                    module: {
                        department: {
                            name: ''
                        }
                    },
                    location: {
                        name: ''
                    },
                    rank: {
                        name: ''
                    },
                    district: {
                        name: ''
                    },
                    region: {
                        name: ''
                    }
                },
                capturingBioData: false,
                reviewingBioData: false,
                bioDataReady: false,
                portrait: {
                    encoded: null,
                    uri: null
                },
                indexRight: {
                    encoded: null,
                    fmd: null,
                    uri: null
                },
                indexLeft: {
                    encoded: null,
                    fmd: null,
                    uri: null
                },
                thumbRight: {
                    encoded: null,
                    fmd: null,
                    uri: null
                },
                thumbLeft: {
                    encoded: null,
                    fmd: null,
                    uri: null
                },
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
                    
                },
                toDataUri: function(encoded){
                    return "data:image/jpg;base64," + encoded;
                },
                update: function(){
                    console.log(this.beneficiary.module)
                    console.log('updating...')
                    if(_.isEqual(this.beneficiary, this.beneficiaryBuffer)) return;

                    if(
                         this.beneficiary.surname
                         && this.bioDataReady
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
                         && this.beneficiary.identification_type
                         && this.beneficiary.identification_number
                        ){
                            $profilePanel.LoadingOverlay('show', loadingOptions);
                            var url = '/internal-api/beneficiaries/' + this.beneficiary.uuid + "?type=complete";
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
                            data.append('module_id', this.beneficiary.module.id);
                            data.append('rank_id', this.beneficiary.rank.id);
                            data.append('identification_id', this.beneficiary.identification_type.id);
                            data.append('identification_number', this.beneficiary.identification_number);
                            data.append('bid', this.beneficiary.bid);

                            data.append('thumb_right_image', this.thumbRight.encoded);
                            data.append('thumb_right_fmd', this.thumbRight.fmd);

                            data.append('thumb_left_image', this.thumbLeft.encoded);
                            data.append('thumb_left_fmd', this.thumbLeft.fmd);

                            data.append('index_right_image', this.indexRight.encoded);
                            data.append('index_right_fmd', this.indexRight.fmd);

                            data.append('index_left_image', this.indexLeft.encoded);
                            data.append('index_left_fmd', this.indexLeft.fmd);

                            data.append('portrait', this.portrait.encoded);

                            data.append('_token', "{{ csrf_token() }}");

                            this.$http.post(url, data)
                                .then(function(resp){
                                    if(resp.status === 200){
                                        return this.notify("Saving Beneficiary...", "success", false);
                                    }

                                    if(resp.status === 401){
                                        this.notify("Need to LogIn", "danger", true);
                                        return setTimeout(function(){
                                            window.location.reload(true)
                                        }, 2000);
                                    }
                                    //display error;
                                    $profilePanel.LoadingOverlay('hide', true);
                                    return this.notify("Could Not Perform Action", "danger", true);

                                })
                                .catch(function(error){
                                    console.log(error);
                                    $profilePanel.LoadingOverlay('hide', true);
                                    // display error;
                                    this.notify("Could Not Perform Action", "danger", true);
                                })

                    }
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
                loadProfilePage: function(uuid){
                    window.location.href = '/beneficiaries/' + uuid;
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
                captureBioData: function(){
                    console.log('capturing..');
                    this.capturingBioData = true;
                    this.reviewingBioData = false;
                    this.bioDataReady = false;
                    $capturingModal.modal('show');
                    socket.emit('enrolment', {channel: captureBioEvent, data: this.beneficiary.bid}); 
                },
                cancelCapture: function(){
                    if(!_.isNull(this.portrait.encoded)){
                        this.bioDataReady = true;
                    }
                    socket.emit('enrolment', {channel: cancelCaptureEvent});
                    $capturingModal.modal('hide');
                },
                toDataUri: function(data){
                    return "data:image/jpg;base64," + data;
                },
                acceptBio: function(){
                    $reviewingModal.modal('hide');
                    this.reviewingBioData = false;
                    this.capturingBioData = false;
                    this.bioDataReady = true;
                    socket.emit('enrolment', {channel: cancelCaptureEvent});
                },
                editBio: function(){
                    this.reviewingBioData = false;
                    $reviewingModal.modal('hide');
                    $capturingModal.modal('show');
                    enrolmentSocket.emit('enrolment', {channel: editCaptureEvent, data: this.bid});  
                    socket.emit('enrolment', {channel: editCaptureEvent, data: this.bid});    
                },
                fetchIDs: function(){
                    var url = '/internal-api/ids';
                    this.$http.get(url).then(function(resp){
                        this.ids = resp.data;
                    }, function(error){
                        console.log(error);
                    })
                },
                reviewBioData: function(){
                    if(!this.bioDataReady){
                        this.reviewingBioData = true;
                    }
                    $reviewingModal.modal('show');
                },
                doNothing: function(){
                    console.log('do nothing called');
                },
                notify: function(message, status, sticky){
                    var stick = sticky ? sticky : false;
                    $.notific8(message,
                            { sticky:stick,
                                horizontalEdge:"top",
                                theme:status })}
            },
            created: function(){
                this.loadProfileData();
                this.fetchRegions();
                this.fetchRanks();
            },
            ready: function(){
                this.fetchIDs();

                socket.on(beneficiaryWasUpdated, function(data){
                    data = JSON.parse(data);
                    this.loadProfilePage(data[0]);
                    $profilePanel.LoadingOverlay('hide', true);
                }.bind(this));

                socket.on(operationFailed, function(data){
                    console.log(data);
                    $profilePanel.LoadingOverlay('hide', true);
                    this.notify("Operation Failed", "danger", true);
                }.bind(this))

                enrolmentSocket.on(cancelCaptureEvent, function(){
                    $capturingModal.modal('hide');
                    this.capturingBioData = false;
                }.bind(this));

                enrolmentSocket.on(reviewCaptureEvent, function(data){
                    // var data = JSON.parse(data);
                    console.log(data);

                    this.capturingBioData = false;
                    this.reviewingBioData = true;      

                    this.thumbRight.encoded = data.thumb_right.encoded;
                    this.thumbRight.uri = this.toDataUri(data.thumb_right.encoded);
                    this.thumbRight.fmd = data.thumb_right.fmd;

                    this.portrait.encoded = data.portrait.encoded;
                    this.portrait.uri = this.toDataUri(data.portrait.encoded);

                    this.indexLeft.encoded = data.index_left.encoded;
                    this.indexLeft.uri = this.toDataUri(data.index_left.encoded);
                    this.indexLeft.fmd = data.index_left.fmd;

                    this.indexRight.encoded = data.index_right.encoded;
                    this.indexRight.uri = this.toDataUri(data.index_right.encoded);
                    this.indexRight.fmd = data.index_right.fmd;

                    this.thumbLeft.encoded = data.thumb_left.encoded;
                    this.thumbLeft.uri = this.toDataUri(data.thumb_left.encoded);
                    this.thumbLeft.fmd = data.thumb_left.fmd;

                    $reviewingModal.modal('show');
                    $capturingModal.modal('hide');

                }.bind(this));
            }
        });
    });
</script>