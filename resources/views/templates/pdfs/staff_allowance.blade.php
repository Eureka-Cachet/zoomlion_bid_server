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
    <body style="size: 2480px 3508px; margin-left: 10px; margin-right: 10px;">
    <img class="pull-right" style="display: inline;" width="50" src="{!! $zoom_logo !!}">
    <span style="color: #29166f; margin-left: 150px;">BENEIFICAIRIES MANAGEMENT SYSTEM</span>
    <hr>

    <div style="text-align: center;">
        <span style="color: #29166f;">REPORT</span>
    </div>

    <h4 style="text-align: center;">
        BENEFICIARIES ALLOWANCE
        FOR {{ strtoupper($level_name) }} {{ strtoupper($level_type) }}
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

                                        ">RANK</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">BANK</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">BANK BRANCH</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">ACCOUNT NUMBER</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">ALLOWANCE</th>
            </tr>
            </thead>
            <tbody>
        @foreach($payload as $b)
            <tr>
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
                                                ">{{ $b["bank"] }}</td>

                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["branch"] }}</td>
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["account"] }}</td>
                    <td style="
                                                    padding: 8px;
                                                    line-height: 1.42857143;
                                                    vertical-align: top;
                                                    border-top: 1px solid #dddddd;
                                                    text-align: center;
                                                ">{{ $b["allowance"] }}</td>
            </tr>
        @endforeach
            </tbody>
        </table>
    </div>

    </body>
@endsection