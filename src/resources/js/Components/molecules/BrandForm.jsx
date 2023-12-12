import { useEffect, useRef, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const BrandForm = ({ brand_props }) => {
  const {
    values,
    keywords,
    setValues,
    brands,
    brandFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  } = brand_props;

  console.log(keywords);

  const initialBrandList = brands.filter((v, index) => {
    return index < 6;
  });

  const [brandList, setBrandList] = useState(initialBrandList);
  const [brandFormVal, setBrandFormVal] = useState('');
  console.log(brandList);

  const brand_ref1 = useRef(null);
  const brand_ref2 = useRef(null);

  console.log(brandFormVal);

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
    setBrandList(initialBrandList);
  };

  function selectBrandList(e) {
    const key = e.target.id;
    const value = e.target.getAttribute('data-name');

    setValues((values) => ({
      ...values,
      [key]: value,
    }));
    console.log(value);
    var regexp = new RegExp(value, 'i');

    const filterBrands = brands.filter((brand) => {
      return brand.name.match(regexp);
    });
    const limitNumberBrand = filterBrands.filter((v, brand) => {
      return brand < 5;
    });
    console.log(limitNumberBrand);
    setBrandList(limitNumberBrand);

    setBrandFormVal(value);

    setBrandFormActive(false);
    console.log(brandFormActive);
  }

  function handleBrandForm(e) {
    const key = e.target.id;
    const value = e.target.value;
    console.log(key);

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
    const limitNumberBrand = filterBrands.filter((v, brand) => {
      return brand < 5;
    });
    console.log(limitNumberBrand);
    setBrandList(limitNumberBrand);
  }

  return (
    <>
      {/* ブランド */}
      <div
        className="mb-1 flex h-[40px]  w-full items-center overflow-hidden rounded-lg bg-white sm:relative sm:mb-0 sm:h-[45px] sm:w-1/3 sm:overflow-visible sm:rounded-none"
        onClick={(event) => {
          openBrandModal(event);
        }}
      >
        <div className="hidden h-[calc(100%-16px)] w-[1px]  bg-slate-300 sm:block"></div>
        <div className=" flex  w-full items-center  ">
          <div className="flex w-full items-center pl-4">
            <div className="w-full">
              <input
                form="form1"
                id="brand"
                name="brand"
                readOnly
                autoComplete="off"
                placeholder="ブランド名"
                value={brandFormVal ? brandFormVal : ''}
                ref={brand_ref1}
                className=" block text-sm font-medium leading-none placeholder-slate-400 outline-0 placeholder:justify-center placeholder:font-semibold"
              />
            </div>
          </div>

          <div className="  ml-auto mr-2">
            {brandFormVal && (
              <img
                src="./images/button.svg"
                alt=""
                className="w-5 cursor-pointer "
                onClick={(event) => {
                  clearBrand();
                  event.stopPropagation();
                }}
              />
            )}
          </div>

          {/* ブランド表示 */}
          <div
            className="fixed left-0 top-0 h-screen w-full overflow-hidden bg-white pb-1 sm:absolute sm:mt-0 sm:h-auto sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={
              brandFormActive ? { display: 'block' } : { visibility: 'hidden' }
            }
          >
            <div className="mr-1">
              <div className="flex w-full justify-end sm:hidden ">
                <button
                  type="button"
                  onClick={() => {
                    setBrandFormActive(false);
                  }}
                  className="mr-1 mt-2 flex h-6 w-6 items-center justify-center rounded-sm hover:bg-slate-300"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="flex h-[46px] items-center">
                <input
                  form="form1"
                  id="brand"
                  type=" block"
                  placeholder="ブランド名"
                  autoComplete="off"
                  className="block w-full px-4 text-lg font-semibold placeholder-slate-400 outline-0 sm:text-sm"
                  value={brandFormVal ? brandFormVal : ''}
                  ref={brand_ref2}
                  onChange={handleBrandForm}
                />
              </div>
              {brandList.length > 0 && (
                <div>
                  <div className="border-b"></div>

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
export default BrandForm;
