import { useState } from 'react';
import { router } from '@inertiajs/react';
import { useCookies } from 'react-cookie';
import MainKeywordForm from '../molecules/MainKeywordForm';
import MainBrandForm from '../molecules/MainBrandFrom';
import MainAddressForm from '../molecules/MainAddresForm';
import SubmitButton from '../atoms/SubmitButton';

const MainForm = ({ brands, prefuctures, keywords }) => {
  const [values, setValues] = useState({
    keyword: keywords['keyword'],
    brand: keywords['brand'],
    address: keywords['address']['code'],
  });

  const [cookies, setCookie, removeCookie] = useCookies();
  const [keywordFormActive, setKeywordFormActive] = useState(false);
  const [brandFormActive, setBrandFormActive] = useState(false);
  const [addressFormActive, setAddressFormActive] = useState(false);

  const keyword_props = {
    keywords,
    values,
    setValues,
    cookies,
    setCookie,
    removeCookie,
    keywordFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  };
  console.log(keyword_props);

  const brand_props = {
    keywords,
    values,
    setValues,
    brands,
    brandFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  };

  const address_props = {
    keywords,
    values,
    setValues,
    prefuctures,
    addressFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  };

  // 検索時に関する処理
  function handleSubmit(e) {
    e.preventDefault();
    const value = values.keyword;

    if (!value == '') {
      if (cookies.name == undefined) {
        setCookie('name', [value]);
      } else {
        if (!cookies.name.includes(value)) {
          const values = [...cookies.name, value];
          setCookie('name', values);
        }
      }
    }
    router.get('/search', values);
  }

  return (
    <>
      <MainKeywordForm keyword_props={keyword_props} />

      <MainBrandForm brand_props={brand_props} />

      <MainAddressForm address_props={address_props} />

      <div className="flex w-full items-center justify-center  rounded-lg  bg-blue-700 sm:ml-auto sm:w-16">
        <SubmitButton handleSubmit={handleSubmit} />
      </div>
    </>
  );
};
export default MainForm;
