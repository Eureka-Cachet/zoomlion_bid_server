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
        <img class="pull-right" src="img/logo_invice.png">
        <hr>

        <h4 style="text-align: center;">
            STAFF ATTENDANCE
            FOR {{ strtoupper($location_name) }} {{ strtoupper($location_type) }}
            FROM {{ \Carbon\Carbon::today()->toFormattedDateString() }}
            TO {{ \Carbon\Carbon::today()->toFormattedDateString() }}
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

                                        ">TIMES OF CLOCKING</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">1</td>
                    <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">Greater Accra</td>
                    <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">23</td>
                </tr>
            </tbody>
        </table>
    </div>

    </body>
@endsection