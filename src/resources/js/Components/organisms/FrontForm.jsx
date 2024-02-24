import { useState } from 'react';
import { router } from '@inertiajs/react';
import KeywordForm from '../molecules/KeywordForm';
import { useCookies } from 'react-cookie';
import BrandForm from '../molecules/BrandForm';
import AddressForm from '../molecules/AddressForm';
import SubmitButton from '../atoms/SubmitButton';

const FrontForm = ({ brands, prefuctures }) => {
  const [values, setValues] = useState({
    keyword: '',
    brand: '',
    address: '',
  });

  const [cookies, setCookie, removeCookie] = useCookies('');
  const [keywordFormActive, setKeywordFormActive] = useState(false);
  const [brandFormActive, setBrandFormActive] = useState(false);
  const [addressFormActive, setAddressFormActive] = useState(false);

  // キーワードフォームへのprops
  const keyword_props = {
    setValues,
    cookies,
    setCookie,
    removeCookie,
    keywordFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  };

  //ブランドフォームへのprops
  const brand_props = {
    setValues,
    brands,
    brandFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  };

  //addressフォームへのprops
  const address_props = {
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
      <KeywordForm keyword_props={keyword_props} />
      <BrandForm brand_props={brand_props} />
      <AddressForm address_props={address_props} />

      <div className="  mt-1 flex  items-center rounded-lg bg-blue-700 px-3 sm:mr-0 sm:mt-0 sm:w-16   sm:rounded-l-none ">
        <SubmitButton handleSubmit={handleSubmit} />
      </div>
    </>
  );
};
export default FrontForm;
