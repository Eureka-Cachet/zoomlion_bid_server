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