<table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
    <thead>
    <tr style="background-color: lightslategray; color: white;">
        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">{{ strtoupper($level_type) }}</th>
        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">ENROLLED</th>

        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">PENDING</th>
        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">TOTAL</th>
    </tr>
    </thead>
    <tbody>
    @foreach($payload as $location)
        <tr>
            <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['name'] !!}</td>
            <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['total_enrolled'] !!}</td>
            <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['total_not_enrolled'] !!}</td>
            <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['total_form'] !!}</td>
        </tr>
    @endforeach
    </tbody>
    <tfoot>
    <tr style="text-align: center;">
        <td>TOTAL</td>
        <td>{!! $all_enrolled !!}</td>
        <td>{!! $all_not_enrolled !!}</td>
        <td>{!! $all_total !!}</td>
    </tr>
    </tfoot>
</table>