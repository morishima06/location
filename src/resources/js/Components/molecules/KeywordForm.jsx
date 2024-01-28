import { useEffect, useRef, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const KeywordForm = ({ keyword_props }) => {
  const {
    setValues,
    cookies,
    removeCookie,
    keywordFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  } = keyword_props;

  const keyword_ref1 = useRef(null);
  const keyword_ref2 = useRef(null);
  const initialCookieList = cookies.name
    ? cookies.name.filter((cookie, index) => {
        return index < 5;
      })
    : '';


  const [cookiesList, setCookiesList] = useState(initialCookieList);
  const [keywordFormVal, setKeywordFormVal] = useState('');



  function handleKeywordSelect(e) {
    const key = e.target.id;
    const value = e.target.getAttribute('data-name');

    setValues((values) => ({
      ...values,
      [key]: value,
    }));

    var regexp = new RegExp(value, 'i');

    if (!cookies.name == false) {
      const filterCookiesList = cookies.name.filter((cookie) => {
        return cookie.match(regexp);
      });
      const limitNumberCookie = filterCookiesList.filter((cookie, index) => {
        return index < 5;
      });

      console.log(limitNumberCookie);

      setCookiesList(limitNumberCookie);
    }

    setKeywordFormVal(value);
    setKeywordFormActive(false);
  }

  function handleKeyword(e) {
    const key = e.target.id;
    const value = e.target.value;

    var regexp = new RegExp(value, 'i');

    if (!cookies.name == false) {
      const filterCookiesList = cookies.name.filter((cookie) => {
        return cookie.match(regexp);
      });
      const limitNumberCookie = filterCookiesList.filter((cookie, index) => {
        return index < 5;
      });

      console.log(limitNumberCookie);

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
    event.stopPropagation();
  }

  const closeKeywordModal = useCallback(() => {
    setKeywordFormActive(false);
    document.removeEventListener('click', closeKeywordModal);
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
  };

  function clearCookie() {
    removeCookie('name');
  }
   useEffect(()=>{
     setCookiesList(initialCookieList)

    },[cookies])


  return (
    <>
      {/* キーワード */}
      <div
        className=" mb-1 flex h-[40px]  w-full items-center overflow-hidden rounded-lg bg-white sm:relative sm:mb-0 sm:h-[45px] sm:w-1/3 sm:overflow-visible sm:rounded-r-none"
        onClick={(event) => {
          openKeywordModal(event);
        }}
      >
        <div className=" flex  w-full items-center  ">
          <div className="flex w-full items-center ">
            <div className="w-full pl-4">
              <input
                form="form1"
                id="keyword"
                name="keyword"
                readOnly
                placeholder="店舗名・キーワードドドド"
                value={keywordFormVal}
                ref={keyword_ref1}
                className="block text-sm font-medium leading-none placeholder-slate-400  outline-0 placeholder:justify-center placeholder:font-semibold"
              />
            </div>
          </div>

          <div className="  ml-auto mr-2">
            {keywordFormVal && (
              <img
                src="./images/button.svg"
                alt=""
                className="w-5 cursor-pointer "
                onClick={(event) => {
                  clearKeyword();
                  event.stopPropagation();
                }}
              />
            )}
          </div>

          {/* キーワード表示 */}
          <div
            className="fixed left-0 top-0 h-screen w-full bg-white pb-1 sm:absolute sm:h-auto sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
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
              <div className="flex w-full justify-end sm:hidden  ">
                <button
                  type="button"
                  onClick={() => {
                    setKeywordFormActive(false);
                  }}
                  className="mr-1 mt-2 flex h-6 w-6 items-center justify-center rounded-sm hover:bg-slate-300"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="flex h-[46px]  items-center">
                <input
                  form="form1"
                  id="keyword"
                  type=" block"
                  placeholder="店舗名・キーワードどど"
                  autoComplete="off"
                  className="block w-full px-4   text-lg font-semibold outline-0 placeholder:text-slate-400 sm:text-sm"
                  value={keywordFormVal}
                  ref={keyword_ref2}
                  onChange={handleKeyword}
                />
              </div>
              {cookiesList === null && (
                <div className="border-b sm:hidden"></div>
              )}

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
                              onClick={handleKeywordSelect}
                              key={list}
                            >
                              {list}
                            </p>
                          ))}
                      </div>
                      <button
                        type="button"
                        className="cursor-pointer pl-4 text-xs text-blue-600"
                        onClick={clearCookie}
                      >
                        すべててクリア
                      </button>
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
export default KeywordForm;
