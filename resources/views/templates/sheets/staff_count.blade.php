<table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
                <thead>
                    <tr style="background-color: lightslategray; color: white;">
                        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">{{ $level_type }}</th>
                        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">Total</th>
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
                                        ">{!! $location['total_staff'] !!}</td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr style="text-align: center;">
                        <td>TOTAL</td>
                        <td>{!! $all_total !!}</td>
                    </tr>
                </tfoot>
            </table>