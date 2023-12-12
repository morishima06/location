import { useState, useRef, useEffect } from 'react';
import { router, Head } from '@inertiajs/react';
import Header from '@/Components/organisms/Header';
import { RxCross2 } from 'react-icons/rx';

const Edit = ({ shopInfo, detail_brands }) => {
  const tel = shopInfo[0].tel;
  const splitTel = tel.split('-');
  const tel1 = splitTel[0];
  const tel2 = splitTel[1];
  const tel3 = splitTel[2];
  const zip = shopInfo[0].zip.replace('-', '');

  console.log(shopInfo[0].zip);

  const {
    shop_id,
    name,
    sort_id,
    sort,
    state,
    state_code,
    city,
    address,
    station,
    regular_holiday,
    business_hours,
    area_id,
    area_name,
    area_code,
  } = shopInfo[0];

  console.log(detail_brands);

  const [values, setValues] = useState({
    shop_id: shop_id,
    shop_name: name,
    shop_sort: sort_id,
    zip_code: zip,
    state: state,
    state_code: state_code,
    city: city,
    address: address,
    tel1: tel1,
    tel2: tel2,
    tel3: tel3,
    brand: detail_brands,
    area_id: area_id,
    area_code: area_code,
    addBrand: '',
    addKana: '',
    addArea: '',
    addAreaCode: '',
    addNewAreaCode: '',
    nearest_station: station,
    business_hours: business_hours,
    regular_holiday: regular_holiday,
  });

  console.log(values);

  function handleValue(e) {
    console.log(e.target.value);
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  const searchAddress = (e) => {
    e.preventDefault();

    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${values.zip_code}`)
      .then((res) => res.json())
      .then(
        (json) => (
          console.log(json),
          setValues((values) => ({
            ...values,
            ['state']: json.results[0].address1,
            ['city']: json.results[0].address2,
            ['address']: json.results[0].address3,
            ['state_code']: areaCode[json.results[0].address1],
          })),
          getAreaCode(json.results[0].address1)
        ),
      )
      .then((data) => console.log(data))
      .catch(() => alert('er'));
  };

  const getAreaCode = (val) => {
    fetch(route('ShopInfo.getAreaCode'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
          .content,
      },
      body: JSON.stringify({ state_code: areaCode[val] }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.new_area_code.area_code);
        setAreaData(json.area_code);
        if (json.new_area_code.area_code) {
          setValues((values) => ({
            ...values,
            ['addAreaCode']: json.new_area_code.area_code,
            ['area_code']: '',
          }));
        } else {
          setValues((values) => ({
            ...values,
            ['addAreaCode']: '2',
          }));
        }
      })
      .catch(() => alert('eor'));
  };

  const handleSelect = (e) => {
    const val = e.target.value;
    console.log(val);

    handleValue(e);
    setValues((values) => ({
      ...values,
      ['state_code']: areaCode[val],
    }));

    getAreaCode(val);
  };

  const areaCode = {
    北海道: '001',
    青森県: '002',
    岩手県: '003',
    宮城県: '004',
    秋田県: '005',
    山形県: '006',
    福島県: '007',
    茨城県: '008',
    栃木県: '009',
    群馬県: '010',
    埼玉県: '011',
    千葉県: '012',
    東京都: '013',
    神奈川県: '014',
    新潟県: '015',
    富山県: '016',
    石川県: '017',
    福井県: '018',
    山梨県: '019',
    長野県: '020',
    岐阜県: '021',
    静岡県: '022',
    愛知県: '023',
    三重県: '024',
    滋賀県: '025',
    京都府: '026',
    大阪府: '027',
    兵庫県: '028',
    奈良県: '029',
    和歌山県: '030',
    鳥取県: '031',
    島根県: '032',
    岡山県: '033',
    広島県: '034',
    山口県: '035',
    徳島県: '036',
    香川県: '037',
    愛媛県: '038',
    高知県: '039',
    福岡県: '040',
    佐賀県: '041',
    長崎県: '042',
    熊本県: '043',
    大分県: '044',
    宮崎県: '045',
    鹿児島県: '046',
    沖縄県: '047',
  };

  //   エリア選択のデータ
  const [areaData, setAreaData] = useState('');
  console.log(areaData);

  const [detailBrand, setDetailBrand] = useState({
    id: '',
    name: '',
  });

  const [initialBrandList, setInitialBrandList] = useState('');
  const [brandList, setBrandList] = useState(initialBrandList);
  console.log(brandList);

  const [isBrandList, setIsBrandList] = useState(false);

  const handleBrandForm = (e) => {
    let value = e.target.value;
    var regexp = new RegExp(value, 'i');

    const filterBrand = initialBrandList.filter((v) => {
      return v.name.match(regexp);
    });
    console.log(filterBrand);
    const limitNumberBrand = filterBrand.filter((v, index) => {
      return index < 6;
    });
    console.log(limitNumberBrand);
    setBrandList(limitNumberBrand);
  };

  const detailBrandRef = useRef(null);

  function selectBrandList(e) {
    e.preventDefault();
    const value = e.target.getAttribute('data-name');
    const brand_id = e.target.getAttribute('data-brand_id');

    detailBrandRef.current.value = e.target.getAttribute('data-name');

    setDetailBrand((values) => ({
      ...values,
      ['id']: brand_id,
      ['name']: value,
    }));

    setIsBrandList(true);
  }

  console.log(detailBrand);
  console.log(values.brand);

  function brandIn(e) {
    e.preventDefault();

    values.brand.push(detailBrand);

    setValues((values) => ({
      ...values,

      ['brand']: values.brand,
    }));

    detailBrandRef.current.value = '';
  }

  const rmDetailBrand = (e) => {
    e.preventDefault();
    const key = e.target.getAttribute('data-key');
    console.log(key);
    console.log(7777777);
    values.brand.splice(key, 1);
    setValues((values) => ({
      ...values,
      ['brand']: values.brand,
    }));
  };

  const insideBrandRef = useRef(null);
  useEffect(() => {
    //対象の要素を取得
    const el = insideBrandRef.current;

    //対象の要素がなければ何もしない
    if (!el) return;

    //クリックした時に実行する関数
    const hundleClickOutside = (e) => {
      if (!el.contains(e.target)) {
        //ここに外側をクリックしたときの処理
        setIsBrandList(false);
      } else {
        //ここに内側をクリックしたときの処理
        setIsBrandList(true);
      }
    };
    //クリックイベントを設定
    document.addEventListener('click', hundleClickOutside);
    //クリーンアップ関数
    return () => {
      //コンポーネントがアンマウント、再レンダリングされたときにクリックイベントを削除
      document.removeEventListener('click', hundleClickOutside);
    };
  }, [insideBrandRef]);

  //   useEffect(() => {
  //     console.log('brand');
  //     getBrand();
  //   }, []);

  //   追加したブランドを参照するために必要な処理
  const getBrand = () => {
    fetch(route('ShopInfo.getBrand'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
          .content,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setInitialBrandList(json);
        setBrandList(
          json.filter((v, index) => {
            return index < 6;
          }),
        );
      });
  };

  const addArea = (e) => {
    e.preventDefault();
    fetch(route('ShopInfo.addArea'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
          .content,
      },
      body: JSON.stringify({
        addArea: values.addArea,
        addAreaCode: values.addAreaCode,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        getAreaCode(values.state);
        setValues((values) => ({
          ...values,
          ['addArea']: '',
        }));
        alert('新しいエリアを追加しました');
      })
      .catch(() => alert('エリア追加に失敗しました'));
  };

  const addBrand = () => {
    fetch(route('ShopInfo.addBrand'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
          .content,
      },
      body: JSON.stringify({
        addBrand: values.addBrand,
        addKana: values.addKana,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        getBrand();
        setValues((values) => ({
          ...values,
          ['addBrand']: '',
          ['addKana']: '',
        }));
      })
      .then(alert('新しくブランドを追加しました'))
      .catch(() => alert('追加に失敗しました'));
  };

  const selectArea = (e) => {
    e.preventDefault();
    const area_code = e.target.value;
    const area_id =
      e.target[e.target.selectedIndex].getAttribute('data-area_id');

    setValues((values) => ({
      ...values,
      ['area_id']: area_id,
      ['area_code']: area_code,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    router.post('/shopInfo/edit_check', values);
  }

  useEffect(() => {
    fetch(route('ShopInfo.getAreaCode'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
          .content,
      },
      body: JSON.stringify({ state_code: state_code }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.new_area_code.area_code);
        setAreaData(json.area_code);
        if (json.new_area_code.area_code) {
          setValues((values) => ({
            ...values,
            ['addAreaCode']: json.new_area_code.area_code,
            ['area_code']: area_code,
          }));
        }
      })
      .catch(() => alert('eor'));
  }, []);

  useEffect(() => {
    console.log('brand');
    getBrand();
  }, []);

  return (
    <>
      <Head title="店舗編集" />
      <Header />

      <form onSubmit={handleSubmit}>
        <div className="mx-2 mb-3 mt-10 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              店舗名
            </label>
            <input
              type="text"
              value={values.shop_name}
              id="shop_name"
              onChange={handleValue}
              className="block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="店舗名"
              required
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              ショップID
            </label>
            <input
              type="text"
              value={values.shop_id}
              readOnly
              id="shop_id"
              onChange={handleValue}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="ショップID"
              required
            />
          </div>

          <div>
            <label
              htmlFor="countries"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              店舗種類
            </label>
            <select
              value={values.shop_sort}
              id="shop_sort"
              onChange={handleValue}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">選択してください</option>
              <option value="1">セレクトショップ</option>
              <option value="2">ブランドショップ</option>
              <option value="3">百貨店</option>
            </select>
          </div>
        </div>
        <div className="mx-2 mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-3 ">
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              郵便番号
            </label>
            <div className="flex">
              <input
                type="text"
                id="zip_code"
                inputMode="numeric"
                value={values.zip_code}
                onChange={handleValue}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="例1500003 *ハイフンなし"
                required
              />
              <button
                type="button "
                className="ml-2 w-20 rounded-lg bg-black px-2 text-white"
                onClick={searchAddress}
              >
                検索
              </button>
            </div>
          </div>
        </div>

        <div className="mx-2 mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-4 ">
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="state"
            >
              都道府県
            </label>
            <select
              value={values.state}
              id="state"
              onChange={handleSelect}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">選択してください</option>
              <option value="北海道">北海道</option>
              <option value="青森県">青森県</option>
              <option value="岩手県">岩手県</option>
              <option value="宮城県">宮城県</option>
              <option value="秋田県">秋田県</option>
              <option value="山形県">山形県</option>
              <option value="福島県">福島県</option>
              <option value="茨城県">茨城県</option>
              <option value="栃木県">栃木県</option>
              <option value="群馬県">群馬県</option>
              <option value="埼玉県">埼玉県</option>
              <option value="千葉県">千葉県</option>
              <option value="東京都">東京都</option>
              <option value="神奈川県">神奈川県</option>
              <option value="新潟県">新潟県</option>
              <option value="富山県">富山県</option>
              <option value="石川県">石川県</option>
              <option value="福井県">福井県</option>
              <option value="山梨県">山梨県</option>
              <option value="長野県">長野県</option>
              <option value="岐阜県">岐阜県</option>
              <option value="静岡県">静岡県</option>
              <option value="愛知県">愛知県</option>
              <option value="三重県">三重県</option>
              <option value="滋賀県">滋賀県</option>
              <option value="京都府">京都府</option>
              <option value="大阪府">大阪府</option>
              <option value="兵庫県">兵庫県</option>
              <option value="奈良県">奈良県</option>
              <option value="和歌山県">和歌山県</option>
              <option value="鳥取県">鳥取県</option>
              <option value="島根県">島根県</option>
              <option value="岡山県">岡山県</option>
              <option value="広島県">広島県</option>
              <option value="山口県">山口県</option>
              <option value="徳島県">徳島県</option>
              <option value="香川県">香川県</option>
              <option value="愛媛県">愛媛県</option>
              <option value="高知県">高知県</option>
              <option value="福岡県">福岡県</option>
              <option value="佐賀県">佐賀県</option>
              <option value="長崎県">長崎県</option>
              <option value="熊本県">熊本県</option>
              <option value="大分県">大分県</option>
              <option value="宮崎県">宮崎県</option>
              <option value="鹿児島県">鹿児島県</option>
              <option value="沖縄県">沖縄県</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="website"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              都道府県_NO
            </label>
            <input
              type="text"
              readOnly
              id="state_code"
              value={values.state_code}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="都道府県_NO"
              required
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              区市町村
            </label>
            <input
              type="text"
              id="city"
              value={values.city}
              onChange={handleValue}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="例)新宿区"
              required
            />
          </div>
        </div>
        <div className="mx-2 mb-3 grid gap-3 md:mx-10  md:mb-6 md:grid-cols-4 ">
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              エリア選択
            </label>
            <select
              name=""
              value={values.area_code}
              id="area_code"
              onChange={selectArea}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">選択してください</option>
              {areaData &&
                areaData.map((value) => (
                  <option
                    key={value.id}
                    className="cursor-pointer hover:bg-green-200"
                    value={value.area_code}
                    data-area_id={value.id}
                  >
                    {value.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              エリアNO
            </label>
            <input
              type="text"
              id="addAreaCode"
              value={values.area_code}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="エリアNO"
              required
              readOnly
            />
          </div>
        </div>
        <div className="mx-2  mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-3 ">
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              新規エリア追加 / 新規エリア名
            </label>
            <input
              type="text"
              id="addArea"
              onChange={handleValue}
              value={values.addArea}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="○○○エリア"
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              新規エリアNO
            </label>
            <div className="flex">
              <input
                type="text"
                onChange={handleValue}
                value={values.addAreaCode}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
                readOnly
              />
            </div>
          </div>
          <div className="relative">
            <button
              type="button "
              className=" bottom-0 h-[42px] w-28 rounded-lg bg-black px-2  text-white md:absolute"
              onClick={addArea}
            >
              追加する
            </button>
          </div>
        </div>
        <div className="mx-2 mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-2 ">
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              番地・号・建物名まで
            </label>
            <input
              type="text"
              id="address"
              value={values.address}
              onChange={handleValue}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mx-2  mb-3 grid grid-cols-4 md:mx-10 md:mb-6 ">
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              電話番号1
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="tel1"
                value={values.tel1}
                onChange={handleValue}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="03"
                required
              />
              <span className="mx-1">-</span>
            </div>
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              電話番号2
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="tel2"
                value={values.tel2}
                onChange={handleValue}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="0101"
                required
              />
              <span className="mx-1">-</span>
            </div>
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              電話番号3
            </label>
            <input
              type="number"
              id="tel3"
              value={values.tel3}
              onChange={handleValue}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="0101"
              required
            />
          </div>
        </div>
        <div className="mx-2 mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-2 ">
          <div className="">
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              取り扱いブランド
            </label>
            <div className="flex">
              <div ref={insideBrandRef} className="relative w-full">
                <input
                  type="text"
                  id="brand"
                  autoComplete="off"
                  ref={detailBrandRef}
                  onChange={handleBrandForm}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                />
                {brandList && (
                  <div
                    className="absolute z-20 w-full overflow-hidden rounded-lg border-gray-300 bg-blue-300"
                    style={
                      isBrandList ? { display: 'block' } : { display: 'none' }
                    }
                  >
                    {brandList.map((value) => (
                      <p
                        className="cursor-pointer bg-gray-100 py-0.5 pl-2 hover:bg-gray-300 "
                        id="brand"
                        key={value.id}
                        data-name={value.name}
                        data-brand_id={value.id}
                        onClick={selectBrandList}
                      >
                        {value.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button "
                className="ml-4 block h-10 w-32 rounded-lg bg-black  px-2 text-white"
                onClick={brandIn}
              >
                追加する
              </button>
            </div>

            {values.brand &&
              values.brand.map((val, index) => (
                <div className=" flex " key={index} data-key={val.id}>
                  <span
                    className="flex items-center hover:cursor-pointer"
                    onClick={rmDetailBrand}
                  >
                    {val.name}
                    {val.kana}
                    <RxCross2 />
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="mx-2 	 mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-3 ">
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              新規ブランド追加 / ブランド名
            </label>
            <input
              type="text"
              id="addBrand"
              onChange={handleValue}
              value={values.addBrand}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              カナ
            </label>
            <div className="flex">
              <input
                type="text"
                id="addKana"
                onChange={handleValue}
                value={values.addKana}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
              />
            </div>
          </div>
          <div className="relative">
            <button
              type="button"
              className="bottom-0 h-[42px]	 w-28 rounded-lg bg-black text-white md:absolute  "
              onClick={addBrand}
            >
              追加する
            </button>
          </div>
        </div>
        <div className="mx-2 mb-3 grid gap-3 md:mx-10 md:mb-6 md:grid-cols-4 ">
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              最寄駅
            </label>
            <input
              id="nearest_station"
              type="text"
              onChange={handleValue}
              value={values.nearest_station}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="JR新宿駅"
              required
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              営業時間
            </label>
            <input
              id="business_hours"
              type="text"
              onChange={handleValue}
              value={values.business_hours}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="午前９時〜午後１０時"
              required
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              定休日
            </label>
            <div className="flex items-center">
              <input
                id="regular_holiday"
                type="text"
                onChange={handleValue}
                value={values.regular_holiday}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="火"
                required
              />
              <span className="ml-1 w-16">曜日</span>
            </div>
          </div>
        </div>
        <div className="mx-2 mb-10 mt-10 grid gap-3 md:mx-10 md:grid-cols-4 ">
          <button
            type="submit"
            className=" w-full  rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            更新する
          </button>
        </div>
      </form>
    </>
  );
};
export default Edit;
