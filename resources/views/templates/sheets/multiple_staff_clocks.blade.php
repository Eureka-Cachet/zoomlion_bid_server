<table>
    <thead>
    <tr>
        <th>BID</th>
        <th>NAME</th>
        <th>RANK</th>
        <th>MODULE</th>
        <th>LOCATION</th>
        <th>DEVICE ID</th>
        <th>CLOCKS</th>
    </tr>
    </thead>
    <tbody>
@foreach($payload as $b)
    <tr>
            <td>{{ $b["bid"] }}</td>
            <td>{{ $b["name"] }}</td>
            <td>{{ $b["rank"] }}</td>
            <td>{{ $b["module"] }}</td>

            <td>{{ $b["location"] }}</td>
            <td>{{ $b["device_id"] }}</td>
            <td>{{ $b["clocks"] }}</td>
    </tr>
@endforeach
    </tbody>
</table>