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
    <span style="color: #29166f; margin-left: 150px;">BENEFICIARIES MANAGEMENT SYSTEM</span>
    <hr>

    <div style="text-align: center;">
        <span style="color: #29166f;">REPORT</span>
    </div>

    <h4 style="text-align: center;">
        STAFF ATTENDANCE
        FOR {{ strtoupper($level_name) }} {{ strtoupper($level_type) }}
        FROM {{ \Carbon\Carbon::parse($start)->toFormattedDateString() }}
        TO {{ \Carbon\Carbon::parse($end)->toFormattedDateString() }}
    </h4>


    <div style="width: 100%;">
        <table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
            <thead>
            <tr style="background-color: lightslategray; color: white; font-size: 1em;">
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">BID</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">NAME</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">RANK</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">MODULE</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">LOCATION</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">CLOCKS</th>
            </tr>
            </thead>
            <tbody>
        @foreach($payload as $b)
            <tr style="font-size: .9em;">
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["bid"] }}</td>
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["name"] }}</td>
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["rank"] }}</td>
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["module"] }}</td>

                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["location"] }}</td>
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["clocks"] }}</td>
            </tr>
        @endforeach
            </tbody>
        </table>
    </div>

    </body>
@endsection