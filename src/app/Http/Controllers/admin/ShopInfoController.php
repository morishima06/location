<?php

namespace App\Http\Controllers\admin;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Shop;
use App\Models\ShopDetail;
use App\Models\Address;
use App\Models\Area;
use App\Models\BrandShop;

class ShopInfoController extends Controller
{

    public function show()
    {
        $shopInfo = DB::table('shops as s')
            ->select(DB::raw(
                's.id, s.name,
            sd.tel, sd.business_hours, sd.regular_holiday,
            ss.name as sort,
            ad.zip_code as zip , ad.state, state_code, ad.city as city, ad.address, ad.nearest_station as station,
            ar.name as area_name, ar.area_code,
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
            ->groupBy('s.id')->get()->toarray();

        return Inertia::render('Admin/ShopInfo/Show', compact('shopInfo'));
    }

    public function create()
    {
        return Inertia::render('Admin/ShopInfo/Create');
    }

    public function create_check(Request $request)
    {
        $shop_name = $request->shop_name;
        $shop_sort = $request->shop_sort;
        $zip_code = $request->zip_code;
        $zip_code = substr_replace($zip_code, '-', 3, 0);
        $state = $request->state;
        $state_code = $request->state_code;
        $city = $request->city;
        $address = $request->address;
        $tel1 = $request->tel1;
        $tel2 = $request->tel2;
        $tel3 = $request->tel3;
        $tel = $tel1 . '-' . $tel2 . '-' . $tel3;
        $area_id = $request->area_id;
        $nearest_station = $request->nearest_station;
        $business_hours = $request->business_hours;
        $regular_holiday = $request->regular_holiday;
        $shop =  Shop::create([
            'name' => $shop_name,
        ]);
        ShopDetail::create([
            'shop_id' => $shop->id,
            'tel' => $tel,
            'sort_id' => $shop_sort,
            'business_hours' => $business_hours,
            'regular_holiday' => $regular_holiday

        ]);
        Address::create([
            'shop_id' => $shop->id,
            'zip_code' => $zip_code,
            'state' => $state,
            'state_code' => $state_code,
            'city' => $city,
            'address' => $address,
            'area_id' => $area_id,
            'nearest_station' => $nearest_station
        ]);

        $shop_id = $shop->id;
        // foreach ($brand as $info) {
        //     $create_data[] = [
        //         'shop_id' => $shop->id,
        //         'brand_id' => $info['brand_id'],
        //     ];
        // };

        // DB::table('brand_shop')->insert($create_data);
        $brands = $request->brand;

        foreach ($brands as $brand) {
            $brand_id[] = $brand['brand_id'];
        }
        Shop::find($shop_id)
            ->brands()->attach($brand_id);

        // Shop::find(1)->brands()->sync([]);
        return redirect()->route('ShopInfo.create');
    }

    public function getAreaCode(Request $request)
    {

        $state_code = $request->state_code;
        $area_code = DB::table('areas as ar')->select(DB::raw('ar.id,ar.name,ar.area_code'))
            ->where('ar.area_code', 'like', $state_code . '%')
            ->get()->toArray();
        $new_area_code = DB::table('areas as ar')->select(DB::raw('ar.name,ar.area_code'))
            ->where('ar.area_code', 'like', $state_code . '%')
            ->orderBy('ar.area_code', 'desc')
            ->first();

        if ($new_area_code) {
            $code = $new_area_code->area_code;
            $code = substr($code, 3, 5);
            $code = (int)$code;
            $code = $code + 1;
            $code = str_pad($code, 3, 0, STR_PAD_LEFT);
            $new_area_code = ['area_code' => $state_code . $code];
        } else {
            $new_area_code =  ['area_code' => $state_code . '001'];
        }

        return response()->json(compact('area_code', 'new_area_code'));
    }

    public function getBrand()
    {
        $brands =  Brand::all()->toArray();
        return response()->json($brands);
    }

    public function addBrand(Request $request)
    {
        $brand = $request->addBrand;
        $kana = $request->addKana;
        $hiragana = mb_convert_kana($kana, 'c', 'utf-8');
        $initial = mb_substr($brand, 0, 1);
        $initial = strtoupper($initial);

        Brand::create([
            'name' => $brand,
            'katakana' => $kana,
            'hiragana' => $hiragana,
            'initial' => $initial,
        ]);

        return response()->json($kana);
    }

    public function addArea(Request $request)
    {
        $area = $request->addArea;
        $area_code = $request->addAreaCode;

        Area::create([
            'name' => $area,
            'area_code' => $area_code
        ]);

        return response()->json('登録しました');
    }

    public function edit($id)
    {
        $shopInfo = DB::table('shops as s')
            ->select(DB::raw(
                's.id as shop_id, s.name,
            sd.tel, sd.business_hours, sd.regular_holiday,
                      ss.id as sort_id,  ss.name as sort,
            ad.zip_code as zip , ad.state, state_code, ad.city as city, ad.address, ad.nearest_station as station,
            ar.id as area_id, ar.name as area_name, ar.area_code
            '
            ))
            ->where('s.id', '=', $id)
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
            ->get()->toarray();

        $detail_brands =  Shop::find($id)->brands()->get()->toarray();
        $brands =  Brand::all()->toArray();

        return Inertia::render('Admin/ShopInfo/Edit', compact('shopInfo', 'detail_brands', 'brands'));
    }

    public function edit_check(Request $request)
    {
        $shop_id = $request->shop_id;
        $brands = $request->brand;
        $shop_name = $request->shop_name;
        $shop_sort = $request->shop_sort;
        $zip_code = $request->zip_code;
        $zip_code = substr_replace($zip_code, '-', 3, 0);
        $state = $request->state;
        $state_code = $request->state_code;
        $city = $request->city;
        $address = $request->address;
        $tel1 = $request->tel1;
        $tel2 = $request->tel2;
        $tel3 = $request->tel3;
        $tel = $tel1 . '-' . $tel2 . '-' . $tel3;
        $area_id = $request->area_id;
        $nearest_station = $request->nearest_station;
        $business_hours = $request->business_hours;
        $regular_holiday = $request->regular_holiday;


        $shopInfo = DB::table('shops as s')
            ->select(DB::raw(
                's.id, s.name,
            sd.tel, sd.business_hours, sd.regular_holiday,
            sd.sort_id ,
            ad.zip_code as zip , ad.state, state_code, ad.city as city, ad.address, ad.nearest_station as station,
            ar.id as area_id ,ar.name as area_name, ar.area_code'
            ))
            ->where('s.id', '=', $shop_id)
            ->leftJoin('shop_details as sd', function ($join) {
                $join->on('s.id', '=', 'sd.shop_id');
            })
            ->leftJoin('addresses as ad', function ($join) {
                $join->on('s.id', '=', 'ad.shop_id');
            })
            ->leftJoin('areas as ar', function ($join) {
                $join->on('ad.area_id', '=', 'ar.id');
            });
        // ->get()->toarray();

        // dd($shopInfo);
        $shopInfo->update([
            "s.name" => $shop_name,
            "sd.tel" => $tel,
            "sd.business_hours" => $business_hours,
            "sd.regular_holiday" => $regular_holiday,
            "sd.sort_id" => $shop_sort,
            "ad.zip_code" => $zip_code,
            "ad.state" => $state,
            "ad.city" => $city,
            "state_code" => $state_code,
            "ad.address" => $address,
            "ad.nearest_station" => $nearest_station,
            "ad.area_id" => $area_id
        ]);

        foreach ($brands as $brand) {
            $brand_id[] = $brand['id'];
        }

        Shop::find($shop_id)->brands()->sync($brand_id);

        // $br =   DB::table('brand_shop')->select(DB::raw('id'))->get();


        // $user->update([
        //     "name" => $request->name,
        //     "age" => $request->age,
        // ]);


        // $shop =  Shop::create([
        //     'name' => $shop_name,
        // ]);


        // ShopDetail::create([
        //     'shop_id' => $shop->id,
        //     'tel' => $tel,
        //     'sort_id' => $shop_sort,
        //     'business_hours' => $business_hours,
        //     'regular_holiday' => $regular_holiday

        // ]);

        // Address::create([
        //     'shop_id' => $shop->id,
        //     'zip_code' => $zip_code,
        //     'state' => $state,
        //     'state_code' => $state_code,
        //     'city' => $city,
        //     'address' => $address,
        //     'area_id' => $area_id,
        //     'nearest_station' => $nearest_station
        // ]);




        // $shop_id = $shop->id;
        // $brands = $request->brand;

        // foreach ($brands as $brand) {
        //     $brand_id[] = $brand['brand_id'];
        // }
        // Shop::find($shop_id)
        //     ->brands()->attach($brand_id);
    }
}
