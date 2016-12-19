<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/4/2016
 * Time: 10:03 AM
 */

namespace Eureka\Repositories;


use Eureka\Helpers\RedisStoreTrait;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

/**
 * Class DbBackupRepository
 * @package Eureka\Repositories
 */
class DbBackupRepository
{
    use RedisStoreTrait;

    public function get_paginated_dumps(Request $request)
    {
        $dumps = $this->get_all("dump_");

        if ($request->has('sort')) {

            list($sortCol, $sortDir) = explode('|', $request->get('sort'));

            switch($sortDir){
                case "asc":
                    $query = $dumps->sortBy($sortCol);
//                    dd($sortDir, $sortCol, $query);
                    break;
                case "desc":
                    $query = $dumps->sortByDesc($sortCol);
//                    dd($sortDir, $sortCol, $query);
                    break;
            }

        } else {
            $query = $dumps->sortBy('timestamp');
            dd('query', $query);

        }

        if ($request->exists('filter')) {
            $q = $request->get('filter');
            $query->whereLoose('name', $q);
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;
        $cur_page = $request->has('page') ? (int) $request->get('page') : null;

        $data = $this->paginate($query, $perPage, $cur_page);
//        dd('data', $data);
        return $data;
    }

    /**
     * @param Collection $dumps
     * @return int
     */
    private function get_total(Collection $dumps)
    {
        return $dumps->count();
    }

    /**
     * @param Collection $dumps
     * @param $per_page
     * @return float
     */
    private function get_last_page(Collection $dumps, $per_page)
    {
        if($per_page > 0){
            return ceil(($dumps->count() / $per_page));
        }
        return $dumps->count();
    }

    /**
     * @param $dumps
     * @param $page
     * @param $per_page
     * @return string
     */
    private function get_next_page_url($dumps, $page, $per_page)
    {
        $page = $page + 1;
        return route('api.backups') . "?page=" . $page;
    }

    /**
     * @param $page
     * @return null|string
     */
    private function get_prev_page_url($page)
    {
        if($page - 1 == 0){
            return null;
        }
        $page = $page - 1;

        return route('api.backups') . "?page=" . $page;
    }

    /**
     * @param Collection $query
     * @param $limit
     * @param $page
     * @return LengthAwarePaginator
     */
    private function paginate(Collection $query, $limit, $page)
    {
        $offset = $this->get_offset($limit, $page);
        $data = $query->slice($offset, $limit)->values();
        $paginator = new LengthAwarePaginator($data,
            $query->count(), $limit, $page);
        return $paginator;
    }

    /**
     * @param $limit
     * @param $page
     * @return int
     */
    private function get_offset($limit, $page)
    {
        if($page == 1){
            return 0;
        }
        return ($page - 1) * $limit;
    }
}