import { useEffect, useRef, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MainAddressForm = ({ address_props }) => {
  const {
    setValues,
    keywords,
    prefuctures,
    addressFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  } = address_props;

  const addressRef = useRef(null);
  const [isOpen, setIsOpen] = useState({ 0: false });
  const [addressFormVal, setAddressFormVal] = useState(keywords.address.name);

  const handleAddressForm2 = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  function openAddressModal(event) {
    setAddressFormActive(!addressFormActive);
    setKeywordFormActive(false);
    setBrandFormActive(false);

    document.addEventListener('click', closeAddressModal);
    event.stopPropagation();
  }

  const closeAddressModal = useCallback(() => {
    setAddressFormActive(false);
    document.removeEventListener('click', closeAddressModal);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeAddressModal);
    };
  }, [closeAddressModal]);

  const clearAddress = () => {
    setAddressFormVal('');
    setValues((values) => ({
      ...values,
      ['address']: '',
    }));
  };

  const handleAddressFormIN = (e) => {
    const value = e.target.getAttribute('data-adname');
    const code = e.target.getAttribute('data-ad_code');
    const key = e.target.id;

    setValues((values) => ({
      ...values,
      [key]: code,
    }));

    setAddressFormVal(value);
    setAddressFormActive(false);
  };
  const MobileInnerHeight = window.innerHeight - 76;
  const MobileInnerHeightStyle = {
    height: MobileInnerHeight,
  };

  return (
    <>
      {/* エリア */}
      <div
        className=" mb-[5px] mr-2 flex h-[44px] w-full items-center overflow-hidden rounded-lg bg-white  sm:relative sm:mb-0 sm:h-[48px] sm:w-1/3 sm:overflow-visible  sm:rounded-l-none"
        onClick={(event) => {
          openAddressModal(event);
        }}
      >
        <div className="hidden h-[calc(100%-16px)] w-[1px] bg-slate-300 sm:block"></div>
        <div className="flex w-full items-center ">
          <div className="flex w-full   items-center ">
            <div className="w-full pl-4">
              <label htmlFor="" className=" block text-xs font-semibold">
                エリア
              </label>
              <input
                form="form1"
                id="address"
                readOnly
                className="block  border-none bg-transparent text-xs  leading-none outline-0  placeholder:font-light placeholder:text-slate-900"
                name="address"
                value={addressFormVal ? addressFormVal : ''}
                ref={addressRef}
                placeholder="都道府県"
              />
            </div>
          </div>
          <div className="  ml-auto mr-2">
            {addressFormVal && (
              <img
                src="./images/button.svg"
                alt=""
                className="w-[20px] cursor-pointer "
                onClick={(event) => {
                  clearAddress();
                  event.stopPropagation();
                }}
              />
            )}
          </div>

          {/* エリア表示 */}
          <div
            className="h- absolute right-0   top-0 w-full  bg-white sm:top-14  sm:mt-0 sm:h-[260px]  sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] "
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={
              addressFormActive
                ? { display: 'block' }
                : { visibility: 'hidden' }
            }
          >
            <div className="flex h-[30px] w-full justify-end sm:hidden">
              <button
                type="button"
                onClick={() => {
                  setAddressFormActive(false);
                }}
                className="mr-1 mt-2 flex h-6 w-6 items-center justify-center rounded-sm hover:bg-slate-300"
              >
                <AiOutlineClose />
              </button>
            </div>

            <p className="  mb-[5px] flex h-[40px] w-full items-center justify-center border-b  border-slate-100  font-semibold drop-shadow-sm ">
              エリア一覧
            </p>
            <div
              style={MobileInnerHeightStyle}
              className="overflow-scroll  rounded-lg bg-white   pb-1 sm:max-h-[220px] "
            >
              {Object.keys(prefuctures).map((prefucture, index) => (
                <div key={index}>
                  <div
                    className="flex cursor-pointer  items-center hover:bg-slate-100 "
                    data-state_code={prefuctures[prefucture].state_code}
                  >
                    <div
                      className=" flex py-1 pl-3 text-[15px] hover:text-blue-500"
                      onClick={handleAddressFormIN}
                    >
                      <p
                        id="address"
                        className="pr-[2px]"
                        data-adname={prefuctures[prefucture].state}
                        data-ad_code={prefuctures[prefucture].state_code}
                      >
                        {prefuctures[prefucture].state}
                        {'('}
                        {prefuctures[prefucture].count}
                        {')'}
                      </p>
                    </div>
                    <div
                      className="flex grow justify-end pr-4"
                      onClick={() => handleAddressForm2(index)}
                    >
                      <span className="  ">+</span>
                    </div>
                  </div>

                  {isOpen[index] ? (
                    <div className="py-[2px] " onClick={handleAddressFormIN}>
                      {isOpen[index]
                        ? prefuctures[prefucture]['area'].map((area) => (
                            <div
                              className=" flex cursor-pointer py-[2px] pl-3 text-[12px] hover:text-blue-500  "
                              id="address"
                              data-adname={area.name}
                              data-ad_code={area.area_code}
                              key={area.name}
                            >
                              {area.name}
                              {'('}
                              {area.count}
                              {')'}
                            </div>
                          ))
                        : undefined}
                    </div>
                  ) : undefined}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainAddressForm;
