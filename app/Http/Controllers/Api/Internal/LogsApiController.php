<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/19/16
 * Time: 5:09 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use Carbon\Carbon;
use clocking\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;

class LogsApiController extends Controller
{


    public function all(Request $request)
    {
        $query = Activity::orderBy('updated_at', 'desc');

        if($request->exists('start') && $request->exists('end')){
            $query->where(function($q) use ($request) {
                $start = Carbon::parse($request->start)->startOfDay();
                $end = Carbon::parse($request->end)->endOfDay();
                $q->whereBetween('updated_at', [$start, $end]);
            });
        }

        if ($request->exists('filter')) {
            $query->where(function($q) use($request) {
                $value = $request->filter;
                $q->where('user_id', $value);
            });
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;
        $data = $query->paginate($perPage);
        return $data;
    }
}