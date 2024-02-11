import { useState, useEffect, createContext } from 'react';
import MapRoute from '../molecules/MapRoute';
import Map from '../molecules/Map';
import Marker from '../molecules/Marker';
import ShopList from '../molecules/ShopList';

export const UserCount = createContext();

const SearchResult = (props) => {
  const { info } = props;
  const [shopInfo, setShopInfo] = useState(info);
  const [place, setPlace] = useState(
    shopInfo == '' ? '東京都' : shopInfo[0].address,
  );
  const [MapInfo, setMapInfo] = useState(
    shopInfo == '' ? '東京都' : shopInfo[0],
  );
  const [lat, setLat] = useState(35.69575);
  const [lng, setLng] = useState(139.77521);
  const center = {
    lat: lat,
    lng: lng,
  };
  const [active, setActive] = useState(false);
  const [openTab, setOpenTab] = useState(0);
  const shop_count = shopInfo.length;

  useEffect(() => {
    Geocode();
  }, [place, MapInfo, shopInfo]);

  function Geocode() {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: place }, (results, status) => {
      if (status === 'OK') {
        setLat(results[0].geometry.location.lat());
        setLng(results[0].geometry.location.lng());
        setActive(true);
      }
    });
  }

  const shopFilter = (e) => {
    let infoFilter =
      e.target.value === ''
        ? info
        : info.filter((value) => {
            return value.sort_id == e.target.value;
          });
    if (infoFilter == '') {
      setShopInfo('');
      setMapInfo('');

      return;
    }
    setShopInfo(infoFilter);
    setMapInfo(infoFilter[0]);
    setPlace(infoFilter[0].address);
  };

  const value = {
    place,
    setPlace,
    MapInfo,
    setMapInfo,
  };

  return (
    <div className=" w-full  max-w-[1100px]  justify-center rounded-2xl  sm:mt-2  sm:flex   sm:px-2  ">
      <div className=" relative z-0 h-[450px] overflow-hidden bg-white sm:bottom-[22px] sm:flex sm:h-[400px] sm:w-[1100px]">
        <div className="absolute z-10 mr-4 h-[450px] w-full bg-white sm:relative sm:h-[400px] sm:w-2/3">
          <div className="flex  h-[56px]  items-center px-2 sm:mb-[6px] sm:h-[40px] sm:px-0">
            {shop_count === 0 ? (
              <div className="mr-2   text-sm  font-semibold text-slate-800 ">
                <p>検索に該当する店舗はありませんでした</p>
              </div>
            ) : (
              <p className="mr-2   text-sm  font-semibold text-slate-800  ">
                検索結果:{shop_count}店舗見つかりました
              </p>
            )}

            <select
              name=""
              className="ml-auto block w-32 rounded-full  text-xs leading-none text-slate-800"
              id=""
              onChange={(e) => {
                shopFilter(e);
              }}
            >
              <option className="text-xs" value="">
                店舗形態
              </option>
              <option value="1">セレクトショップ</option>
              <option value="2">ブランドショップ</option>
            </select>
          </div>
          <div className="flex h-[44px] w-full  sm:hidden ">
            <p
              className={`flex w-1/2 items-center justify-center border-y border-l border-slate-600  text-sm font-semibold hover:cursor-pointer ${
                openTab == 0 ? 'border-none bg-black text-white' : ''
              }`}
              onClick={() => {
                setOpenTab(0);
              }}
            >
              店舗リストを表示
            </p>
            <p
              className={`flex w-1/2 items-center justify-center border-y border-r border-slate-600  text-sm font-semibold hover:cursor-pointer ${
                openTab == 1 ? 'border-none bg-black text-white' : ''
              }`}
              onClick={() => {
                setOpenTab(1);
              }}
            >
              地図を表示
            </p>
          </div>

          <div className="h-[350px] overflow-y-scroll border border-slate-500 sm:h-[354px] sm:border-none  ">
            <div className=" ">
              {shopInfo !== '' &&
                shopInfo.map((info, index) => (
                  <UserCount.Provider key={index} value={value}>
                    <ShopList res={info} />
                  </UserCount.Provider>
                ))}
            </div>
          </div>
        </div>

        <div
          className=" relative mt-[100px]  w-full  sm:relative sm:mt-0"
          style={openTab == '0' ? { zIndex: '0' } : { zIndex: '11' }}
        >
          <div className="h-[350px] w-full   sm:h-[400px] ">
            {/* style={active ? { display: 'block' } : { visibility: 'hidden' }} */}
            <Map center={center}>
              {shop_count > 0 && <Marker position={center} />}
              <MapRoute
                MapInfo={MapInfo}
                shopInfo={shopInfo}
                lat={lat}
                lng={lng}
              />
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
