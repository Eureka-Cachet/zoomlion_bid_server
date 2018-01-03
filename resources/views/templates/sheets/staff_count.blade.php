<table>
                <thead>
                    <tr>
                        <th>{{ $level_type }}</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($payload as $location)
                        <tr>
                            <td>{!! $location['name'] !!}</td>
                            <td>{!! $location['total_staff'] !!}</td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <td>TOTAL</td>
                        <td>{!! $all_total !!}</td>
                    </tr>
                </tfoot>
            </table>