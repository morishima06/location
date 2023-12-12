import {
  useState,
  useEffect,
  createContext,
} from 'react';
import MapRoute from '@/Components/organisms/MapRoute';
import Map from '@/Components/organisms/Map';
import Marker from '@/Components/organisms/Marker';
import ShopList from '@/Components/organisms/ShopList';

export const UserCount = createContext();

const SearchResult = (props) => {
  const { info } = props;

  console.log(props.info);

  const [shopInfo, setShopInfo] = useState(info);
  const [place, setPlace] = useState(
    shopInfo == '' ? '東京都' : shopInfo[0].address,
  );
  const [MapInfo, setMapInfo] = useState(
    shopInfo == '' ? '東京都' : shopInfo[0],
  );
  console.log(place);
  console.log(MapInfo);

  // const [lat, setLat] = useState('');
  // const [lng, setLng] = useState('');
  const [lat, setLat] = useState(35.69575);
  const [lng, setLng] = useState(139.77521);
  const [active, setActive] = useState(false);
  const center = {
    lat: lat,
    lng: lng,
  };

  const [openTab, setOpenTab] = useState(0);
  console.log(shopInfo);
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

  const handleaddress = (e) => {
    let shop_name = e.currentTarget.getAttribute('data-shop_name');
    let state = e.currentTarget.getAttribute('data-state');
    let city = e.currentTarget.getAttribute('data-city');
    let address = e.currentTarget.getAttribute('data-address');
    let tel = e.currentTarget.getAttribute('data-tel');
    setPlace(state + city + address);
    let handle_info = new Object();
    handle_info.shop_name = shop_name;
    handle_info.state = state;
    handle_info.city = city;
    handle_info.address = address;
    handle_info.tel = tel;

    setMapInfo(handle_info);
  };

  const shopFilter = (e) => {
    let infoFilter =
      e.target.value === ''
        ? info
        : info.filter((value) => {
            return value.sort_id == e.target.value;
          });
    // console.log(infoFilter.length)
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
    <>
      <div className=" max-w-[1100px]  sm:h-[450px]  w-full justify-center  sm:flex  rounded-2xl  sm:px-2 sm:mt-2  ">
        <div className=" overflow-hidden h-[420px] relative z-0 sm:bottom-[22px] sm:flex bg-white sm:w-[1100px]">
          <div className="w-full sm:w-2/3 mr-4 h-[450px] absolute sm:relative z-10 bg-white">
            <div className="flex  items-center  h-[56px] sm:h-[40px] sm:mb-[6px] px-2 sm:px-0">
              <p className="text-sm sm:text-base  font-semibold  text-slate-800 mr-2  ">
                検索結果:{shop_count}店舗見つかりました
              </p>

              <select
                name=""
                className="block w-32 text-xs rounded-full  text-slate-800 leading-none ml-auto"
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
                <option value="3">百貨店</option>
              </select>
            </div>
            <div className="flex sm:hidden w-full  h-[44px] ">
              <p
                className={`w-1/2 font-semibold border-y border-l text-sm border-slate-600  flex justify-center items-center ${
                  openTab == 0 ? 'text-white bg-black border-none' : ''
                }`}
                onClick={() => {
                  setOpenTab(0);
                }}
              >
                店舗リストを表示
              </p>
              <p
                className={`w-1/2 font-semibold border-y border-r text-sm border-slate-600  flex justify-center items-center ${
                  openTab == 1 ? 'text-white bg-black border-none' : ''
                }`}
                onClick={() => {
                  setOpenTab(1);
                }}
              >
                地図を表示
              </p>
            </div>

            <div className="overflow-y-scroll h-[400px] sm:h-[354px]   ">
              <div className="h-full ">
                {shop_count == 0 && (
                  <div className="flex sm:block justify-center font-semibold mt-2">
                    <p>検索に該当する店舗はありませんでした</p>
                  </div>
                )}

                {shopInfo !== '' &&
                  shopInfo.map((res, index) => (
                    <UserCount.Provider value={value} key={res.id}>
                      <ShopList res={res} index={index} func={handleaddress} />
                    </UserCount.Provider>
                  ))}
              </div>
            </div>
          </div>

          <div
            className="w-full a relative mt-[100px] sm:mt-0  h-[450px] sm:relative"
            style={openTab == '0' ? { zIndex: '0' } : { zIndex: '11' }}
          >
            <div className="w-full   h-[400px] ">
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
    </>
  );
};
export default SearchResult;
