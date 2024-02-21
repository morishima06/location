<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Address;
use App\Models\Area;
use App\Models\Brand;
use Illuminate\Support\Facades\DB;

class FrontController extends Controller
{
    public function home(Request $request)
    {
        $brands = Brand::all();
        $address =  DB::table('addresses as ad ')
            ->select(DB::raw(' state, state_code ,count(state_code) as count'))
            ->groupBy('state_code', 'state')
            ->orderBy('state_code', 'asc')
            ->get()->toArray();

        $areas =  DB::table('addresses as ad')
            ->select(DB::raw('ad.area_id,ad.state, a.name,ad.state_code,count(area_code) as count,area_code '))
            ->leftJoin('areas as a', function ($join) {
                $join->on('ad.area_id', '=', 'a.id');
            })
            ->groupBy('area_code')
            ->get()->toArray();

        for ($key = 0; $key < count($address); $key++) {

            $state_code = $address[$key]->state_code;
            $states_filter = array_filter(
                $address,
                function ($address) use ($state_code) {
                    return $address->state_code == $state_code;
                }
            );

            foreach ($states_filter as $state) {
                $prefuctures_arrays[$key]['state_code'] = $state->state_code;
                $prefuctures_arrays[$key]['state'] = $state->state;
                $prefuctures_arrays[$key]['count'] = $state->count;
            };

            $areas_filter = array_filter(
                $areas,
                function ($areas) use ($state_code) {
                    return $areas->state_code == $state_code;
                }
            );
            foreach ($areas_filter as $area_filter) {
                $prefuctures_arrays[$key]['area'][] = $area_filter;
            };
        };
        $prefuctures = $prefuctures_arrays;
        return Inertia::render('Front/Home', compact('brands', 'prefuctures'));
    }

    public function search(Request $request)
    {
        $keyword = $request->keyword;
        $brand = $request->brand;
        $address = $request->address;
        $keywords['keyword'] =  $request->keyword;
        $keywords['brand'] = $request->brand;

        if ($address !== null) {
            $code = Address::where('state_code', '=', $address)->select('state as name', 'state_code as code')->first();
            if ($code == null) {
                $code = Area::where('area_code', '=', $address)->select('name', 'area_code as code')->first();
            }
        } else {
            $code = '';
        }

        $keywords['address'] = $code;
        $info = DB::table('shops as s')
            ->select(DB::raw(
                's.id,s.name ,
                group_concat(DISTINCT sd.tel)as tel,group_concat(DISTINCT sort_id) as sort_id,
                group_concat(DISTINCT sd.regular_holiday) as holiday,
                group_concat(DISTINCT sd.business_hours) as hour,
                group_concat(DISTINCT ss.name) as sort_name,
                group_concat(DISTINCT ad.state) as state,group_concat(DISTINCT ad.nearest_station) as station,
                 group_concat(DISTINCT ad.city) as city,group_concat(DISTINCT ad.address) as address,
                group_concat(DISTINCT ad.state_code) as state_code,
                group_concat(DISTINCT ar.name) as area_name, group_concat(DISTINCT ar.area_code) as area_code,
                group_concat(b.name )as brand_name'
            ))
            ->leftJoin('shop_details as sd', function ($join) {
                $join->on('s.id', '=', 'sd.shop_id');
            })
            ->leftJoin('shop_sorts as ss', function ($join) {
                $join->on('sd.sort_id', '=', 'ss.id');
            })
            ->leftJoin('addresses as ad', function ($join) {
                $join->on('s.id', '=', 'ad.shop_id');
            })
            ->leftJoin('areas as ar', function ($join) {
                $join->on('ad.area_id', '=', 'ar.id');
            })
            ->leftJoin('brand_shop as bs', function ($join) {
                $join->on('s.id', '=', 'bs.shop_id');
            })
            ->leftJoin('brands as b', function ($join) {
                $join->on('bs.brand_id', '=', 'b.id');
            })
            ->groupBy('s.id');

        //キーワード検索処理
        if (isset($keyword)) {

            $results = explode(' ', $keyword);
            foreach ($results as $res) {
                $info->where(function ($query) use ($res) {
                    $query->where("s.name", "like", "%" . $res . "%")
                        ->orWhere("ad.state", "like", "%" . $res . "%")
                        ->orWhere("ad.city", "like", "%" . $res . "%")
                        ->orWhere("ad.address", "like", "%" . $res . "%")
                        ->orWhere("b.name", "like", "%" . $res . "%");
                });
            }
        }
        //ブランド検索処理
        if (isset($brand)) {
            $info->where(function ($query) use ($brand) {
                $query->Where("b.name", "like", "%" . $brand . "%");
            });
        }
        //アドレス検索処理
        if (isset($address)) {
            $info->where(function ($query) use ($address) {
                $query->Where("ad.state_code", "=", $address)
                    ->orWhere("ar.area_code", "=", $address);
            });
        }

        $info = $info->get();
        $state = Address::query()
            ->select('state')
            ->selectRaw('COUNT(state) as count_state')
            ->groupBy('state')
            ->get();
        $city = Address::query()
            ->select('city')
            ->selectRaw('COUNT(state) as count_city')
            ->groupBy('city')
            ->get();
        $addresses = [];
        array_push($addresses, $state, $city);
        $brands = Brand::query()->select('name', 'katakana', 'hiragana')
            ->get();

        //エリアフォーム表示
        $addresses =  DB::table('addresses as ad ')
            ->select(DB::raw(' state, state_code ,count(state_code) as count'))
            ->groupBy('state_code', 'state')
            ->orderBy('state_code', 'asc')
            ->get()->toArray();

        $areas =  DB::table('addresses as ad')
            ->select(DB::raw('ad.area_id,ad.state, a.name,ad.state_code,count(area_code) as count,area_code '))
            ->leftJoin('areas as a', function ($join) {
                $join->on('ad.area_id', '=', 'a.id');
            })
            ->groupBy('area_code')
            ->get()->toArray();

        for ($key = 0; $key < count($addresses); $key++) {

            $state_code = $addresses[$key]->state_code;
            $states_filter = array_filter(
                $addresses,
                function ($addresses) use ($state_code) {
                    return $addresses->state_code == $state_code;
                }
            );

            foreach ($states_filter as $state) {
                $prefuctures_arrays[$key]['state_code'] = $state->state_code;
                $prefuctures_arrays[$key]['state'] = $state->state;
                $prefuctures_arrays[$key]['count'] = $state->count;
            };

            $areas_filter = array_filter(
                $areas,
                function ($areas) use ($state_code) {
                    return $areas->state_code == $state_code;
                }
            );

            foreach ($areas_filter as $area_filter) {
                $prefuctures_arrays[$key]['area'][] = $area_filter;
            };
        };
        $prefuctures = $prefuctures_arrays;
        return Inertia::render('Front/Result', compact('info', 'brands',   'prefuctures', 'keywords'));
    }
}
