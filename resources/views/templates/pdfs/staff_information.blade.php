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

    <h3 style="text-align: center; color: #29166f;">
        {{ strtoupper($payload["full_name"]) }} - {{$payload["bid"]}} INFORMATION
    </h3>

    <div style="width: 100%;">

        <table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
            <thead>
            <tr style="background-color: lightslategray; color: white; font-size: 1.1em;">
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">REGION</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">DISTRICT</th>
                <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">MODULE</th>
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
                                        ">{{$payload["region"]}}</td>
                <td style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            text-align: center;
                                        ">{{$payload["district"]}}</td>
                <td style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            text-align: center;
                                        ">{{$payload["module"]}}</td>
            </tr>
            <tr style="border-bottom: 0;">
                <td style="text-align: center;" colspan="3">
                    <img width="300" src="{!! $payload["encoded"] !!}">
                </td>
            </tr>
            <tr>
                <td colspan="3" style="padding-left: 100px; font-size: 1.1em; text-align: justify;">
                    <p><b>BID : </b>{{ $payload["bid"] }}</p>
                    <p><b>Staff Name :</b> {{$payload["full_name"]}}</p>
                    <p><b>Phone Number :</b> {{$payload["phone_number"]}}</p>
                    <p><b>Date of Employment :</b> {{$payload["date_of_employment"]}}</p>
                    <p><b>Rank :</b> {{$payload["rank"]}}</p>
                    <p><b>Bank Name :</b> {{$payload["bank_name"]}}</p>
                    <p><b>Bank Location :</b> {{$payload["bank_branch"]}}</p>
                    <p><b>Registration Date :</b> {{$payload["registration_date"]}}</p>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
    </body>

@endsection