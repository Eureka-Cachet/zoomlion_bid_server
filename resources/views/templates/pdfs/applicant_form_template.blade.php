@extends('partials._template_master')

@section('style-content')
    {{--@include('partials._style')--}}
    @include('partials._bootstrap')
    @include('partials._bootstrap_theme')
@endsection

@section('body-content')
    <body>
    @for( $i = 1; $i <= $total; $i++ )

        <img class="pull-right" src="img/logo_invice.png">
        <h4 style="display: inline;"><b>BID : {{ $i }}</b></h4>
        <hr>
        <h4><b>Personal Information</b></h4>
        <hr>
        <div style="margin-left: 50px;">
            <p style="display: inline;">
                Surname :
            </p>
            <p style="display: inline;">
                ................................................................................................................................................
            </p>
            <hr>

            <p style="display: inline;">
                Forenames :
            </p>
            <p style="display: inline;">
                ..........................................................................................................................................
            </p>
            <hr>

            <p style="display: inline;">
                Date of birth :
            </p>
            <p style="display: inline;">
                ..........................................................................................................................................
            </p>
            <hr>

            <p style="display: inline;">
                Gender :
            </p>
            <p style="display: inline;">
                Male : ................
                Female : ................
            </p>
            <hr>

            <p style="display: inline;">
                Phone Number :
            </p>
            <p style="display: inline;">
                .................................................................................................................................
            </p>
            <hr>

            <p style="display: inline;">
                Address :
            </p>
            <p style="display: inline;">
                ..........................................................................................................................................
            </p>
            <hr>
        </div>

        <h4><b>Bank Details</b></h4>
        <hr>
        <div style="margin-left: 50px;">

            <p style="display: inline;">
                Name of Bank :
            </p>
            <p style="display: inline;">
                ..........................................................................................................................................
            </p>
            <hr>

            <p style="display: inline;">
                Name of Bank Branch :
            </p>
            <p style="display: inline;">
                .......................................................................................................................
            </p>
            <hr>
            <p style="display: inline;">
                Bank Account Number:
            </p>
            <p style="display: inline;">
                .............................................................................................................................
            </p>
            <hr>
        </div>

        <h4><b>Official Details</b></h4>
        <hr>
        <div style="margin-left: 50px;">

            <p>
                Region : Greater Accra
            </p>
            <p>
                District :
            </p>
            <p>
                Location :
            </p>
            <p>
                Module :
            </p>
            <p>
                Rank :
            </p>
        </div>

        @if($i != $total)
            <div class="page-break"></div>
        @endif

    @endfor
    </body>
@endsection