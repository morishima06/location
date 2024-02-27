import { useContext } from 'react';
import { useState, useRef, useEffect } from 'react';
import { UserCount } from '../organisms/SearchResult';
const ShopList = ({ res }) => {
  const { setPlace, setMapInfo } = useContext(UserCount);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  const toggleState = () => {
    setToggle(!toggle);
  };

  const handleaddress = (e) => {
    let shop_name = e.currentTarget.getAttribute('data-shop_name');
    let state = e.currentTarget.getAttribute('data-state');
    let city = e.currentTarget.getAttribute('data-city');
    let address = e.currentTarget.getAttribute('data-address');
    let tel = e.currentTarget.getAttribute('data-tel');
    setPlace(shop_name + state + city + address);
    let handle_info = new Object();
    handle_info.shop_name = shop_name;
    handle_info.state = state;
    handle_info.city = city;
    handle_info.address = address;
    handle_info.tel = tel;
    setMapInfo(handle_info);
  };

  const insideRef = useRef(null);

  useEffect(() => {
    //対象の要素を取得
    const el = insideRef.current;

    //対象の要素がなければ何もしない
    if (!el) return;

    //クリックした時に実行する関数
    const hundleClickOutside = (e) => {
      if (!el.contains(e.target)) {
        //ここに外側をクリックしたときの処理
        setSelected(false);
        setHeightEl(`${refHeight.current.scrollHeight}px`);
      } else {
        //ここに内側をクリックしたときの処理
        setSelected(true);
        setHeightEl(`${refHeight.current.scrollHeight}px`);
      }
    };
    //クリックイベントを設定
    document.addEventListener('click', hundleClickOutside);
    //クリーンアップ関数
    return () => {
      //コンポーネントがアンマウント、再レンダリングされたときにクリックイベントを削除
      document.removeEventListener('click', hundleClickOutside);
    };
  }, [insideRef]);

  return (
    <>
      <div
        ref={insideRef}
        style={{ backgroundColor: selected ? '#E2E8F0' : '' }}
        className="mb-[-1px] cursor-pointer border-y   border-slate-400 py-2  pl-1 text-xs  text-slate-900 hover:bg-slate-50 "
        data-shop_name={res.name}
        data-state={res.state}
        data-city={res.city}
        data-address={res.address}
        data-tel={res.tel}
        onClick={(e) => {
          handleaddress(e);
        }}
      >
        <div className="flex">
          <div>
            <h3 className=" text-[14px] font-semibold ">{res.name}</h3>
            <p className="mt-1 text-[12px]">
              アクセス:{res.station}<br/>
              営業時間:{res.hour}
            </p>
          </div>

          <div className=" ml-auto mr-2 flex items-center hover:text-amber-500">
            {toggle ? (
              <span className="p-1 text-sm " onClick={toggleState}>
                -
              </span>
            ) : (
              <span className="p-1 text-sm " onClick={toggleState}>
                +
              </span>
            )}
          </div>
        </div>
        <div
          className={
            toggle
              ? '  opacity-100 transition-all   duration-500 '
              : '   opacity-0 transition-all  duration-500 	'
          }
          style={{ height: toggle ? `${heightEl}` : '0px' }}
          ref={refHeight}
        >
          <p className={toggle ? '   block' : '  hidden'}>
            <br />
            住所:{res.state + res.city + res.address}
            <br />
            tel:{res.tel}
            <br />
            定休日:{res.holiday}曜日
            <br />
            主な取り扱いブランド:{res.brand_name}
          </p>
        </div>
      </div>
    </>
  );
};
export default ShopList;
