import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
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

  const [brandList, setBrandList] = useState(brands);
  const [brandFormVal, setBrandFormVal] = useState('');

  // 動的にwindowサイズを取得
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([windowWidth]);
      };
      window.addEventListener('resize', updateSize);

      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  };
  const [windowWidth] = useWindowSize();

  const windowStyleStatic = () => {
    document.body.style.position = 'static';
  };
  const windowStyleAuto = () => {
    if (windowWidth > 640) {
      document.body.style.position = 'static';
    }
  };
  windowStyleAuto();

  const brand_form_ref = useRef(null);
  const brand_modalForm_ref = useRef(null);

  function openBrandModal(event) {
    setBrandFormActive(!brandFormActive);
    setKeywordFormActive(false);
    setAddressFormActive(false);
    document.addEventListener('click', closeBrandModal);
    if (windowWidth < 640) {
      document.body.style.position = 'fixed';
    }

    event.stopPropagation();
  }

  const closeBrandModal = useCallback(() => {
    setBrandFormActive(false);
    if (windowWidth < 640) {
      document.body.style.position = 'static';
    }

    document.removeEventListener('click', closeBrandModal);
  }, []);

  useEffect(() => {
    if (brandFormActive === true) {
      brand_modalForm_ref.current.focus();
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
    document.body.style.position = 'auto';
    if (windowWidth < 640) {
      document.body.style.position = 'static';
    }

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
                ref={brand_form_ref}
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
            <div className="mr-1 ">
              <div className="flex h-[30px] w-full justify-end sm:hidden">
                <button
                  type="button"
                  onClick={() => {
                    setBrandFormActive(false);
                    windowStyleStatic();
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
                  ref={brand_modalForm_ref}
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
export default BrandForm;
