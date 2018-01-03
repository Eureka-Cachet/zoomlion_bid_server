@extends('partials._template_master')

@section('style-content')
    @include('partials._bootstrap')
    @include('partials._bootstrap_theme')
    <style>
        .page {
            overflow: hidden;
            page-break-after: always;
        }
    </style>
@endsection

@section('body-content')
    <body class="page" style="
        font-size: 1em;
        size: 2480px 3508px;
    ">
    <?php $i = 0 ?>
    @foreach( $forms as $form )

        <?php $i++ ?>

        <div style="height: 5%">
            <img class="pull-right"  width="50" src="{!! $zoom_logo !!}">
            <!--<span style="color: #29166f; margin-left: 150px;">BENEFICIARIES MANAGEMENT SYSTEM</span>-->
            <h4 style="display: inline; color: #29166f;"><b>BID : {{ strtoupper($form['code']) }}</b></h4>
            <hr>
        </div>

        <div style="height: 4%">
            <div style="text-align: center;">
                <span style="color: #29166f; margin-left: 150px; font-size: 2em; font-weight: bold;">BENEFICIARY ENROLMENT FORM</span>
            </div>
            <br/>
        </div>

        <div style="height: 68%">
            <h5 style="font-weight: bold;"><b>Personal Information</b></h5>
            <hr>
            <div style="margin-left: 50px;">
                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Surname :
                    </p>
                    <p style="display: inline;">
                        ............................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Forenames :
                    </p>
                    <p style="display: inline;">
                        .........................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Date of birth :
                    </p>
                    <p style="display: inline;">
                        ..........................................................................
                    </p>

                    <p style="display: inline; font-size: 1.3em; ">
                        Gender :
                    </p>
                    <p style="display: inline; font-size: 1.3em; ">
                        Male : ..........
                        Female : ..........
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Phone Number :
                    </p>
                    <p style="display: inline;">
                        ...................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Address :
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        ID Number :
                    </p>
                    <p style="display: inline;">
                        ..................................................................
                    </p>

                    <p style="display: inline; font-size: 1.3em; ">
                        ID Type :
                    </p>
                    <p style="display: inline;">
                        ..................................................................
                    </p>
                </div>

            </div>

            <h5 style="font-weight: bold;"><b>Bank Details</b></h5>
            <hr>
            <div style="margin-left: 50px;">

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Name of Bank :
                    </p>
                    <p style="display: inline;">
                        .....................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Name of Bank Branch :
                    </p>
                    <p style="display: inline;">
                        .................................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Bank Account Number:
                    </p>
                    <p style="display: inline;">
                        ...............................................................................................................................................................
                    </p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="display: inline; font-size: 1.3em; ">
                        Allowance:
                    </p>
                    <p style="display: inline;">
                        ................................................................................................................................................................................................
                    </p>
                </div>
            </div>

            <h5 style="font-weight: bold;"><b>Official Details</b></h5>
            <hr>
            <div style="margin-left: 50px;">

                <p style="font-size: 1.3em; ">
                    Region : {{ ucwords($form['region_name']) }}
                </p>

                <p style="font-size: 1.3em; ">
                    District : {{ ucwords($form['district_name']) }}
                </p>

                <p style="font-size: 1.3em; ">
                    Location : {{ ucwords($form['location_name']) }}
                </p>

                <p style="font-size: 1.3em; ">
                    Module : {{ ucwords($form['module_name']) }}
                </p>

                <p style="font-size: 1.3em; ">
                    Rank : {{ ucwords($form['rank_name']) }}
                </p>
            </div>
        </div>

        <div style="height: 7%">
            <hr style="opacity: 0;"/>
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