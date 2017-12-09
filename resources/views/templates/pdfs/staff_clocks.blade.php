@extends('partials._template_master')

@section('style-content')
    <style>
        .table {
            border-collapse: collapse !important;
        }
        .table-bordered th,
        .table-bordered td {
            border: 1px solid #ddd !important;
        }
        .table > tfoot > tr > td {
            padding: 8px;
            line-height: 1.42857143;
            vertical-align: top;
            border-top: 1px solid #dddddd;
        }
    </style>
@endsection


@section('body-content')
    <body>
    <img class="pull-right" style="display: inline;" width="50" src="{!! $zoom_logo !!}">
    <span style="color: #29166f; margin-left: 150px;">BENEIFICAIRIES MANAGEMENT SYSTEM</span>
    <hr>

    <div style="text-align: center;">
        <span style="color: #29166f;">REPORT</span>
    </div>

    <h4 style="text-align: center; color: #29166f;">
        STAFF ATTENDANCE
        FOR {{ strtoupper($beneficiary_name) }}
        FROM {{ \Carbon\Carbon::parse($start)->toFormattedDateString() }}
        TO {{ \Carbon\Carbon::parse($end)->toFormattedDateString() }}
    </h4>


    <div style="width: 100%;">
        <table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
            <thead>
            <tr style="background-color: lightslategray; color: white;">
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">DATE</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">CLOCK IN</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">CLOCK OUT</th>
            </tr>
            </thead>
            <tbody>
                @foreach($payload as $clock)
                    <tr>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{$clock["date"]}}</td>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{$clock["clock_in"]}}</td>

                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{$clock["clock_out"]}}</td>
            </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    </body>
@endsection