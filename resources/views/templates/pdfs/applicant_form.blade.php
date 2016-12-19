@extends('partials._template_master')

@section('style-content')
    @include('partials._bootstrap')
    @include('partials._bootstrap_theme')
@endsection

@section('body-content')
    <body style="
        font-size: 1em;
        size: 2480px 3508px;
    ">
    <?php $i = 0 ?>
    @foreach( $forms as $form )

        <?php $i++ ?>

        <div style="height: 5%">
            <img class="pull-right"  width="50" src="{!! $zoom_logo !!}">
            <!--<span style="color: #29166f; margin-left: 150px;">BENEIFICAIRIES MANAGEMENT SYSTEM</span>-->
            <h4 style="display: inline; color: #29166f;"><b>BID : {{ strtoupper($form['code']) }}</b></h4>
            <hr>
        </div>

        <div style="height: 4%">
            <div style="text-align: center;">
                <span style="color: #29166f; margin-left: 150px; font-size: 2em; font-weight: bold;">BENEIFICAIRY ENROLMENT FORM</span>
            </div>
            <br/>
        </div>

        <div style="height: 68%">
            <h4 style="font-weight: bold;"><b>Personal Information</b></h4>
            <hr>
            <div style="margin-left: 50px;">
                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Surname :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Forenames :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Date of birth :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................
                    </p>

                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Gender :
                    </p>
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Male : ...
                        Female : ...
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Phone Number :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Address :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        ID Number :
                    </p>
                    <p style="display: inline;">
                        .........................................................................................
                    </p>

                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        ID Type :
                    </p>
                    <p style="display: inline;">
                        .......................................................................................
                    </p>
                </div>

            </div>

            <h4 style="font-weight: bold;"><b>Bank Details</b></h4>
            <hr>
            <div style="margin-left: 50px;">

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Name of Bank :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Name of Bank Branch :
                    </p>
                    <p style="display: inline;">
                        .................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Bank Account Number:
                    </p>
                    <p style="display: inline;">
                        ...............................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                        Allowance:
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>
            </div>

            <h4 style="font-weight: bold;"><b>Official Details</b></h4>
            <hr>
            <div style="margin-left: 50px;">

                <p style="font-size: 1.3em; font-weight: bold;">
                    Region : {{ ucwords($form['region_name']) }}
                </p>

                <p style="font-size: 1.3em; font-weight: bold;">
                    District : {{ ucwords($form['district_name']) }}
                </p>

                <p style="font-size: 1.3em; font-weight: bold;">
                    Location : {{ ucwords($form['location_name']) }}
                </p>

                <p style="font-size: 1.3em; font-weight: bold;">
                    Module : {{ ucwords($form['module_name']) }}
                </p>

                <p style="font-size: 1.3em; font-weight: bold;">
                    Rank : {{ ucwords($form['rank_name']) }}
                </p>
            </div>
        </div>

        <div style="height: 7%">
            <hr/>
            <p style="font-size: 1.3em; font-weight: bold;">
                Generated By : {{ $generator_name }}
            </p>

            <hr>
            <div style="margin-bottom: 15px;">
                <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                    Approved By:
                </p>
                <p style="display: inline;">
                    ...............................................................................................................................................................
                </p>
            </div>
            <div style="margin-bottom: 15px;">
                <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                    Date:
                </p>
                <p style="display: inline;">
                    ...............................................................................................................................................................
                </p>
            </div>
            <div>
                <p style="display: inline; font-size: 1.3em; font-weight: bold;">
                    Signature:
                </p>
                <p style="display: inline;">
                    ...............................................................................................................................................................
                </p>
            </div>
        </div>

        @if($i != collect($forms)->count())
            <div class="page-break"></div>
        @endif

    @endforeach
    </body>
@endsection