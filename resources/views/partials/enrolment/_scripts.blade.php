<script src="{!! elixir('js/vue-select.js') !!}"></script>

<script>

    $(function(){
        var userUUID = "{{auth()->user()->uuid}}";

         Vue.component('v-select', VueSelect.VueSelect);

        var host = window.location.host;
        var socket = io.connect('https://' + host + ':6001');
        var enrolmentSocket = io.connect('https://' + host + ':6001/enrolment');

        var channel = 'staff_'+"{{auth()->user()->uuid}}_channel:CaptureBioData";
        var captureBioEvent = "{{auth()->user()->uuid}}:CaptureBioData";
        var cancelCaptureEvent = "{{auth()->user()->uuid}}:CancelCapture";
        var reviewCaptureEvent = "{{auth()->user()->uuid}}:ReviewBioData";
        var editCaptureEvent = "{{auth()->user()->uuid}}:EditBioData";
        var beneficiaryWasEnrolled = "staff_{{auth()->user()->uuid}}_channel:BeneficiaryWasEnrolled";

        var loadingOptions = {
            image       : "",
            fontawesome : "fa fa-refresh fa-spin text-default",
            maxSize     : "30px"
        };

        var $bidModal = $("#bidModal"),
            $capturingModal = $("#capturingModal"),
            $reviewingModal = $("#reviewingModal"),
            $savingModal = $('#savingModal');

        new Vue({
            el: "#main-content",
            computed: {},
            data: {
                beneficiary: {
                    surname: '',
                    forenames: '',
                    gender: '',
                    phoneNumber: '',
                    dob: '',
                    address: '',
                    nameOfBank: '',
                    nameOfBankBranch: '',
                    bankAccountNumber: '',
                    allowance: '',
                    region: {},
                    district: {},
                    location: {},
                    module: {},
                    rank: {},
                    id: {
                        type: '',
                        number: ''
                    }
                },
                bid: '',
                validated: false,
                capturingBioData: false,
                reviewingBioData: false,
                bioDataReady: false,
                ids: [],
                form: {
                    encoded: null,
                    uri: null
                },
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
                }

            },
            methods: {
                submit: function(){

                    if(
                         this.beneficiary.surname
                    &&this.bioDataReady
                         && this.beneficiary.forenames
                         && this.beneficiary.gender
                         && this.beneficiary.phoneNumber
                         && this.beneficiary.dob
                         && this.beneficiary.address
                         && this.beneficiary.nameOfBank
                         && this.beneficiary.nameOfBankBranch
                         && this.beneficiary.bankAccountNumber
                         && this.beneficiary.allowance
                         && this.beneficiary.region
                         && this.beneficiary.district
                         && this.beneficiary.location
                         && this.beneficiary.module
                         && this.beneficiary.id.type
                         && this.beneficiary.id.number
                        ){
                            $savingModal.modal('show');
                            var url = 'internal-api/beneficiaries';
                            var data = new FormData;
                            data.append('surname', this.beneficiary.surname);
                            data.append('forenames', this.beneficiary.forenames);
                            data.append('gender', this.beneficiary.gender);
                            data.append('phone_number', this.beneficiary.phoneNumber);
                            data.append('date_of_birth', this.beneficiary.dob);
                            data.append('address', this.beneficiary.address);
                            data.append('bank_name', this.beneficiary.nameOfBank);
                            data.append('bank_branch', this.beneficiary.nameOfBankBranch);
                            data.append('account_number', this.beneficiary.bankAccountNumber);
                            data.append('allowance', this.beneficiary.allowance);
                            data.append('region_id', this.beneficiary.region.id);
                            data.append('district_id', this.beneficiary.district.id);
                            data.append('location_id', this.beneficiary.location.id);
                            data.append('module_id', this.beneficiary.module.id);
                            data.append('rank_id', this.beneficiary.rank.id);
                            data.append('identification_id', this.beneficiary.id.type.id);
                            data.append('identification_number', this.beneficiary.id.number);
                            data.append('bid', this.bid);

                            data.append('thumb_right_image', this.thumbRight.encoded);
                            data.append('thumb_right_fmd', this.thumbRight.fmd);

                            data.append('thumb_left_image', this.thumbLeft.encoded);
                            data.append('thumb_left_fmd', this.thumbLeft.fmd);

                            data.append('index_right_image', this.indexRight.encoded);
                            data.append('index_right_fmd', this.indexRight.fmd);

                            data.append('index_left_image', this.indexLeft.encoded);
                            data.append('index_left_fmd', this.indexLeft.fmd);

                            data.append('form', this.form.encoded);
                            data.append('portrait', this.portrait.encoded);

                            data.append('_token', "{{ csrf_token() }}");

                            this.$http.post(url, data)
                                .then(function(resp){
                                    console.log(resp)
                                    if(resp.status === 200){
                                        return this.notify("Saving Beneficiary...", "success", true);
                                    }

                                    if(resp.status === 401){
                                        this.notify("Need to LogIn", "danger", true);
                                        return setTimeout(function(){
                                            window.location.reload(true)
                                        }, 2000);
                                    }

                                    $savingModal.modal('hide');
                                    //display error;
                                    return this.notify("Could Not Perform Action", "danger", true);

                                })
                                .catch(function(error){
                                    console.log(error);
                                    $savingModal.modal('hide');
                                    // display error;
                                    this.notify("Could Not Perform Action", "danger", true);
                                })
                        }
                },
                checkBid: function(){
                    $bidModal.LoadingOverlay('show', loadingOptions);

                    if(!this.bid) return null;

                    var url = 'internal-api/enrolment/check-bid';
                    var data = new FormData();
                    data.append('bid', this.bid);
                    data.append('_token', "{{ csrf_token() }}");

                    this.$http.post(url, data).then(function(resp){

                        if(resp.status === 401) return window.location.reload(true);

                        if(! resp.data.bid){
                            this.notify("BID is not Valid", "danger", true);
                            return $bidModal.LoadingOverlay('hide', true);
                        }

                        this.validated = true;

                        this.setUp(resp.data.bid, function(){
                            console.log(resp.data.bid);
                            $bidModal.LoadingOverlay('hide', true);
                            $bidModal.modal('hide');
                        });
                        
                    }, function(error){
                        this.notify("BID is not Valid", "danger", true);
                        return $bidModal.LoadingOverlay('hide', true);
                    });
                },
                shouldAllow: function(){
                    if(! this.validated){
                        return $bidModal.modal('show');
                    }
                },
                setUp: function(data, callback){
                    this.beneficiary.region = data.module.location.district.region;
                    this.beneficiary.district = data.module.location.district;
                    this.beneficiary.location = data.module.location;
                    this.beneficiary.module = data.module;
                    this.beneficiary.rank = data.rank;
                    this.bid = data.code;

                    // window.setTimeout(function(){callback()}, 2000);
                    callback();
                },
                captureBioData: function(){
                    this.capturingBioData = true;
                    this.reviewingBioData = false;
                    this.bioDataReady = false;
                    $capturingModal.modal('show');
                    socket.emit('enrolment', {channel: captureBioEvent, data: this.bid}); 
                    // pSocket.emit('enrolment', {channel: cancelCaptureEvent});                   
                },
                cancelCapture: function(){
                    if(!_.isNull(this.form.encoded)){
                        this.bioDataReady = true;
                    }
                    socket.emit('enrolment', {channel: cancelCaptureEvent});
                    // pSocket.emit('enrolment', {channel: cancelCaptureEvent});
                    $capturingModal.modal('hide');
                },
                safeToLeave(){
                    return $.confirm({
                        content: "Are You Sure?",
                        buttons: {
                            yes: function(){
                                console.log('yes')
                            },
                            no: function(){
                                console.log('no')
                            }
                        }
                    });
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
                    // pSocket.emit('enrolment', {channel: cancelCaptureEvent});
                },
                editBio: function(){
                    this.reviewingBioData = false;
                    $reviewingModal.modal('hide');
                    $capturingModal.modal('show');
                    enrolmentSocket.emit('enrolment', {channel: editCaptureEvent, data: this.bid});  
                    socket.emit('enrolment', {channel: editCaptureEvent, data: this.bid});    
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
                                theme:status })
                },
                fetchIDs: function(){
                    var url = '/internal-api/ids';
                    this.$http.get(url).then(function(resp){
                        this.ids = resp.data;
                    }, function(error){
                        console.log(error);
                    })
                }
            },
            created: function(){},
            ready: function(){

                this.fetchIDs();

                $bidModal.on('hide.bs.modal', function (e) {
                    if(!this.validated) return window.history.back();
                }.bind(this));

                $(window).on('beforeunload', function(e) {
                    if(this.capturingBioData){
                        var msg = "Are You Sure?";
                        e.returnValue = msg;
                        return msg;
                    }
                    return ;
                });

                this.shouldAllow();

                enrolmentSocket.on('bio', function(data){
                    console.log(data);
                });
                socket.on('testing', function(msg){
                    console.log(msg);
                    socket.send("your testing");
                });

                socket.on(beneficiaryWasEnrolled, function(data){
                    $savingModal.modal('hide');
                    return setTimeout(function(){
                        window.location.reload(true)
                    }, 1000);
                }.bind(this));

                enrolmentSocket.on(cancelCaptureEvent, function(){
                    $capturingModal.modal('hide');
                    this.capturingBioData = false;
                }.bind(this));

                enrolmentSocket.on(reviewCaptureEvent, function(data){

                    this.capturingBioData = false;
                    this.reviewingBioData = true;        

                    console.log(data.thumb_right);

                    this.thumbRight.encoded = data.thumb_right.encoded;
                    this.thumbRight.uri = this.toDataUri(data.thumb_right.encoded);
                    this.thumbRight.fmd = data.thumb_right.fmd;

                    this.form.encoded = data.form.encoded;
                    this.form.uri = this.toDataUri(data.form.encoded);

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