<table>
        <thead>
        <tr>
            <th>BID</th>
            <th>NAME</th>
            <th>RANK</th>
            <th>BANK</th>
            <th>BANK BRANCH</th>
            <th>ACCOUNT NUMBER</th>
            <th>ALLOWANCE</th>
        </tr>
        </thead>
        <tbody>
    @foreach($payload as $b)
        <tr>
                <td>{{ $b["bid"] }}</td>
                <td>{{ $b["name"] }}</td>
                <td>{{ $b["rank"] }}</td>
                <td>{{ $b["bank"] }}</td>

                <td>{{ $b["branch"] }}</td>
                <td>{{ $b["account"] }}</td>
                <td>{{ $b["allowance"] }}</td>
        </tr>
    @endforeach
        </tbody>
    </table>