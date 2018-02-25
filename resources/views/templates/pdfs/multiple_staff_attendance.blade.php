@extends('partials._template_master')

@section('style-content')
    <style>
        table {
            border-collapse: collapse !important;
        }
        table th,
        table td {
            border: 1px solid lightslategray !important;
        }
        .page-break {
            page-break-after: always;
        }
    </style>
@endsection

@section('body-content')

    <body style="font-size: .8em;">
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
            @foreach($payload as $staff)

                <table style="width: 100%; margin-bottom: 15px;">
                    <thead>
                        <tr style="background-color: lightslategray; color: white; font-size: 1em;">
                            <th style="
                                                padding: 3px;
                                                vertical-align: middle;

                                            ">BID</th>
                            <th style="
                                                padding: 3px;
                                                vertical-align: middle;

                                            ">NAME</th>
                            <th style="
                                                padding: 3px;
                                                vertical-align: middle;

                                            ">LOCATION</th>
                            <th style="
                                                padding: 3px;
                                                vertical-align: middle;

                                            ">MODULE</th>
                            <th style="
                                                padding: 3px;
                                                vertical-align: middle;

                                            ">RANK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">{!! $staff['bid'] !!}</td>
                            <td style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">{!! $staff['name'] !!}</td>
                            <td style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">{!! $staff['location'] !!}</td>
                            <td style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">{!! $staff['module'] !!}</td>
                            <td style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">{!! $staff['rank'] !!}</td>
                        </tr>
                        <tr style="text-align: center; background: lightslategray; color: white;">
                            <td colspan="5">ATTENDANCE</td>
                        </tr>
                        <tr style="color: #29166f; font-weight: normal; font-size: .8em;">
                            <th style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            " colspan="3">DATE</th>
                            <th style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">CLOCK IN</th>
                            <th style="
                                                padding: 3px;
                                                vertical-align: top;
                                                text-align: center;
                                            ">CLOCK OUT</th>
                        </tr>
                        @foreach($staff['clocks'] as $clock)
                            <tr style="font-size: .9em;">
                                <td style="text-align: center;" colspan="3">{{$clock["date"]}}</td>
                                <td style="text-align: center;">{{$clock["clock_in"]}}</td>
                                <td style="text-align: center;">{{$clock["clock_out"]}}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            @endforeach

        </div>
    </body>

@endsection