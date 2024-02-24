import { useEffect, useRef, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MainBrandForm = ({ brand_props }) => {
  const {
    keywords,
    setValues,
    brands,
    brandFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  } = brand_props;

  const [brandList, setBrandList] = useState(brands);
  const [brandFormVal, setBrandFormVal] = useState(keywords.brand);

  const brand_ref1 = useRef(null);
  const brand_ref2 = useRef(null);

  function openBrandModal(event) {
    setBrandFormActive(!brandFormActive);
    setKeywordFormActive(false);
    setAddressFormActive(false);
    document.addEventListener('click', closeBrandModal);
    event.stopPropagation();
  }

  const closeBrandModal = useCallback(() => {
    setBrandFormActive(false);
    document.removeEventListener('click', closeBrandModal);
  }, []);

  useEffect(() => {
    if (brandFormActive === true) {
      brand_ref2.current.focus();
    }
  }, [brandFormActive]);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeBrandModal);
    };
  }, [closeBrandModal]);

  const clearBrand = () => {
    setBrandFormVal('');
    setValues((values) => ({
      ...values,
      ['brand']: '',
    }));
    setBrandList(brands);
  };

  function selectBrandList(e) {
    const key = e.target.id;
    const value = e.target.getAttribute('data-name');

    setValues((values) => ({
      ...values,
      [key]: value,
    }));

    var regexp = new RegExp(value, 'i');

    const filterBrands = brands.filter((brand) => {
      return brand.name.match(regexp);
    });
    setBrandList(filterBrands);

    setBrandFormVal(value);
    setBrandFormActive(false);
  }

  function handleBrandForm(e) {
    const key = e.target.id;
    const value = e.target.value;

    setBrandFormVal(value);
    setValues((values) => ({
      ...values,
      [key]: value,
    }));

    var regexp = new RegExp(value, 'i');
    const filterBrands = brands.filter((brand) => {
      return (
        brand.name.match(regexp) ||
        brand.katakana.match(regexp) ||
        brand.hiragana.match(regexp)
      );
    });

    setBrandList(filterBrands);
  }
  const MobileInnerHeight = window.innerHeight - 76;
  const MobileInnerHeightStyle = {
    height: MobileInnerHeight,
  };

  return (
    <>
      {/* ブランド */}
      <div
        className="mb-[5px] flex h-[44px]  w-full items-center overflow-hidden rounded-lg bg-white sm:relative sm:mb-0 sm:h-[48px] sm:w-1/3 sm:overflow-visible sm:rounded-none"
        onClick={(event) => {
          openBrandModal(event);
        }}
      >
        <div className="hidden h-[calc(100%-16px)] w-[1px]  bg-slate-300 sm:block"></div>
        <div className=" flex  w-full items-center  ">
          <div className="flex w-full items-center ">
            <div className="w-full pl-4">
              <label htmlFor="" className="block   text-xs font-semibold ">
                ブランド
              </label>
              <input
                form="form1"
                id="brand"
                name="brand"
                readOnly
                autoComplete="off"
                placeholder="ブランド名"
                ref={brand_ref1}
                value={brandFormVal ? brandFormVal : ''}
                className="block text-xs leading-none outline-0   placeholder:justify-center placeholder:font-light  placeholder:text-slate-900"
              />
            </div>
          </div>

          <div className="  ml-auto mr-2">
            {brandFormVal && (
              <img
                src="./images/button.svg"
                alt=""
                className="w-[20px] cursor-pointer "
                onClick={(event) => {
                  clearBrand();
                  event.stopPropagation();
                }}
              />
            )}
          </div>

          {/* ブランド表示 */}
          <div
            className="absolute right-0 top-0 h-screen w-full bg-white pb-2 sm:mt-0 sm:h-auto sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={
              brandFormActive ? { display: 'block' } : { visibility: 'hidden' }
            }
          >
            <div className="mr-1 mt-1 sm:mr-0 sm:mt-0">
              <div className="flex w-full justify-end sm:hidden ">
                <button
                  type="button"
                  onClick={() => {
                    setBrandFormActive(false);
                  }}
                  className="mr-1 mt-1 flex h-6 w-6 items-center justify-center rounded-sm hover:bg-slate-300"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="px-4 py-2">
                <p className="hidden text-sm font-semibold sm:block">
                  ブランド
                </p>
                <input
                  form="form1"
                  type=" block"
                  placeholder="ブランド名"
                  name="brand"
                  id="brand"
                  autoComplete="off"
                  className="block w-full text-lg font-semibold  text-black outline-0 sm:text-sm"
                  value={brandFormVal ? brandFormVal : ''}
                  ref={brand_ref2}
                  onChange={handleBrandForm}
                />
              </div>
              {brandList.length > 0 && (
                <div
                  style={MobileInnerHeightStyle}
                  className=" overflow-scroll border-t sm:h-auto sm:max-h-[200px]"
                >
                  {brandList.map((list) => (
                    <p
                      className="cursor-pointer bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 "
                      id="brand"
                      data-name={list.name}
                      onClick={selectBrandList}
                      key={list.name}
                    >
                      {list.name + ' (' + list.katakana + ')'}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainBrandForm;
