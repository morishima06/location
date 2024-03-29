import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MainKeywordForm = ({ keyword_props }) => {
  const {
    keywords,
    setValues,
    cookies,
    removeCookie,
    keywordFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  } = keyword_props;

  // 動的にwindowサイズを取得
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth]);
      };
      window.addEventListener('resize', updateSize);
      updateSize();

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

  const keyword_ref1 = useRef(null);
  const keyword_ref2 = useRef(null);
  const initialCookieList = cookies.name
    ? cookies.name.filter((cookie, index) => {
        return index < 5;
      })
    : '';

  const [cookiesList, setCookiesList] = useState(initialCookieList);
  const [keywordFormVal, setKeywordFormVal] = useState(keywords.keyword);

  function selectKeywordList(e) {
    const key = e.target.id;
    const value = e.target.getAttribute('data-name');
    if (windowWidth < 640) {
      document.body.style.position = 'static';
    }

    setValues((values) => ({
      ...values,
      [key]: value,
    }));
    setKeywordFormVal(value);
    setKeywordFormActive(false);
  }

  function handleKeyword(e) {
    const key = e.target.id;
    const value = e.target.value;
    var regexp = new RegExp(value, 'i');

    if (!cookies.name == false) {
      const filterCookiesList = cookies.name.filter((cookieList) => {
        return cookieList.match(regexp);
      });
      const limitNumberCookie = filterCookiesList.filter((cookie, index) => {
        return index < 5;
      });

      setCookiesList(limitNumberCookie);
    }
    setKeywordFormVal(value);

    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function openKeywordModal(event) {
    setKeywordFormActive(!keywordFormActive);
    setBrandFormActive(false);
    setAddressFormActive(false);
    document.addEventListener('click', closeKeywordModal);
    if (windowWidth < 640) {
      document.body.style.position = 'fixed';
    }

    event.stopPropagation();
  }

  const closeKeywordModal = useCallback(() => {
    setKeywordFormActive(false);
    document.removeEventListener('click', closeKeywordModal);
    if (windowWidth < 640) {
      document.body.style.position = 'static';
    }
  }, []);

  useEffect(() => {
    if (keywordFormActive === true) {
      keyword_ref2.current.focus();
    }
  }, [keywordFormActive]);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeKeywordModal);
    };
  }, [closeKeywordModal]);

  const clearKeyword = () => {
    setKeywordFormVal('');
    setValues((values) => ({
      ...values,
      ['keyword']: '',
    }));
    setCookiesList(initialCookieList);
  };

  function clearCookie() {
    removeCookie('name');
  }
  useEffect(() => {
    setCookiesList(initialCookieList);
  }, [cookies]);

  return (
    <>
      {/* キーワード */}
      <div
        className="mb-[5px] flex h-[44px]  w-full items-center overflow-hidden rounded-lg bg-white sm:relative sm:mb-0 sm:h-[48px] sm:w-1/3 sm:overflow-visible sm:rounded-r-none"
        onClick={(event) => {
          openKeywordModal(event);
        }}
      >
        <div className=" flex  w-full items-center  ">
          <div className="flex w-full items-center pl-4">
            <div className="w-full">
              <label htmlFor="" className="block  text-xs font-semibold ">
                キーワード
              </label>
              <input
                form="form1"
                id="keyword"
                name="keyword"
                readOnly
                placeholder="店舗名・キーワード"
                ref={keyword_ref1}
                value={keywordFormVal ? keywordFormVal : ''}
                className="block text-xs leading-none outline-0 placeholder:justify-center placeholder:font-light placeholder:text-slate-900"
              />
            </div>
          </div>

          <div className="  ml-auto mr-2">
            {keywordFormVal && (
              <img
                src="./images/button.svg"
                alt=""
                className="w-[20px] cursor-pointer "
                onClick={(event) => {
                  clearKeyword();
                  event.stopPropagation();
                }}
              />
            )}
          </div>

          {/* キーワード表示 */}
          <div
            className="absolute right-0 top-0 h-screen w-full bg-white  pb-2 sm:mt-0 sm:h-auto sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={
              keywordFormActive
                ? { display: 'block' }
                : { visibility: 'hidden' }
            }
          >
            <div className="">
              <div className="mr-1 mt-1 flex w-full justify-end  sm:hidden ">
                <button
                  type="button"
                  onClick={() => {
                    setKeywordFormActive(false);
                    windowStyleStatic();
                  }}
                  className="mr-1 mt-1 flex h-6 w-6 items-center justify-center rounded-sm hover:bg-slate-300"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className=" w-full items-center px-4 py-2 ">
                <p className="hidden text-sm font-semibold sm:block">
                  キーワード
                </p>
                <input
                  form="form1"
                  id="keyword"
                  type=" block"
                  placeholder="店舗名・キーワード"
                  autoComplete="off"
                  className="block w-full  text-lg font-semibold text-black outline-0 sm:text-sm"
                  value={keywordFormVal ? keywordFormVal : ''}
                  ref={keyword_ref2}
                  onChange={handleKeyword}
                />
              </div>
              {!cookiesList && <div className="border-b sm:hidden"></div>}

              {cookiesList && (
                <div>
                  {cookiesList.length > 0 && (
                    <div>
                      <div className="border-b"></div>
                      <div>
                        {cookiesList &&
                          cookiesList.map((list) => (
                            <p
                              className="cursor-pointer bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 "
                              id="keyword"
                              data-name={list}
                              onClick={selectKeywordList}
                              key={list}
                            >
                              {list}
                            </p>
                          ))}
                        <button
                          type="button"
                          className="cursor-pointer pl-4 text-xs text-blue-600"
                          onClick={clearCookie}
                        >
                          すべててクリア
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainKeywordForm;
