import { useContext } from 'react';
import { useState, useRef, useEffect } from 'react';
import { UserCount } from './MapComponent';

const ShopList = ({ res, index }) => {
  const { place, setPlace, MapInfo, setMapInfo } = useContext(UserCount);

  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

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
      } else {
        //ここに内側をクリックしたときの処理
        setSelected(true);
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
        className="mb-[-1px] py-2 pl-1   cursor-pointer hover:bg-slate-50  text-xs border-y  border-slate-400 text-slate-900 "
        tabIndex={index}
        data-shop_name={res.shop_name}
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
            <h3 className=" font-semibold text-[14px] ">{res.name}</h3>
            <p className="text-[12px]">{res.state + res.city + res.address}</p>
            <p className="text-[12px]">{res.sort}</p>
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
          <p
            className={
              toggle
                ? 'opacity-100 transition-all text-[12px]  duration-500'
                : 'invisible text-[12px]  opacity-0 transition-all  duration-500  '
            }
          >
            {res.tel}
          </p>
          <p
            className={
              toggle
                ? 'opacity-100 transition-all text-[12px]  duration-500'
                : 'invisible text-[12px]  opacity-0 transition-all  duration-500  '
            }
          >
            主な取り扱いブランド{' '}
          </p>
          <p
            className={
              toggle
                ? 'opacity-100 transition-all text-[12px]  duration-500'
                : 'invisible text-[12px]  opacity-0 transition-all  duration-500  '
            }
          >
            {res.brand_name}
          </p>
          <p
            className={
              toggle
                ? 'opacity-100 transition-all text-[12px]  duration-500'
                : 'invisible text-[12px]  opacity-0 transition-all  duration-500  '
            }
          >
            最寄駅 : {res.station}
          </p>
        </div>
      </div>
    </>
  );
};
export default ShopList;
