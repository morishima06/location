import { useEffect, useRef, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const AddressForm = ({ address_props }) => {
  const {
    setValues,
    prefuctures,
    addressFormActive,
    setKeywordFormActive,
    setBrandFormActive,
    setAddressFormActive,
  } = address_props;

  const addressRef = useRef(null);
  const [isOpen, setIsOpen] = useState({ 0: false });
  const [addressFormVal, setAddressFormVal] = useState('');

  const handleAddressForm2 = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const clearAddress = () => {
    setAddressFormVal('');
    setValues((values) => ({
      ...values,
      ['address']: '',
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
  height : MobileInnerHeight
  }

  return (
    <>
      {/* エリア */}
      <div
        className="mb-1 flex h-[40px]  w-full items-center overflow-hidden rounded-lg bg-white sm:relative sm:mb-0 sm:h-[45px] sm:w-1/3 sm:overflow-visible sm:rounded-none"
        onClick={(event) => {
          openAddressModal(event);
        }}
      >
        <div className="hidden h-[calc(100%-16px)] w-[1px]  bg-slate-300 sm:block"></div>
        <div className=" flex  w-full items-center  ">
          <div className="flex w-full items-center pl-4">
            <div className="w-full">
              <input
                form="form1"
                id="address"
                readOnly
                className="block text-sm font-medium placeholder-slate-400 outline-0 placeholder:font-semibold "
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
                className="w-5 cursor-pointer "
                onClick={(event) => {
                  clearAddress();
                  event.stopPropagation();
                }}
              />
            )}
          </div>

          {/* エリア表示 */}
          <div
            className=" fixed left-0 top-0 h-screen w-full overflow-hidden bg-white pb-1 sm:absolute sm:mt-12 sm:h-auto sm:rounded-lg sm:bg-white  sm:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)]"
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={
              addressFormActive
                ? { display: 'block' }
                : { visibility: 'hidden' }
            }
          >
            <div className="mr-1 ">
              <div className="flex h-[30px] w-full justify-end sm:hidden  ">
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

              <p className="flex w-full h-[40px] mb-[5px] items-center justify-center border-b border-slate-100  font-semibold drop-shadow-sm ">
                エリア一覧
              </p>
              <div style={MobileInnerHeightStyle} className="overflow-scroll  sm:max-h-[300px]">
                {Object.keys(prefuctures).map((key, index) => (
                  <div key={index}>
                    <div
                      className="flex max-h-[60px]  cursor-pointer items-center overflow-scroll hover:bg-slate-100"
                      data-state_code={prefuctures[key].state_code}
                    >
                      <div
                        className=" flex py-1 pl-3 text-[15px] hover:text-blue-500"
                        onClick={handleAddressFormIN}
                      >
                        <p
                          id="address"
                          className="pr-[2px]"
                          data-adname={prefuctures[key].state}
                          data-ad_code={prefuctures[key].state_code}
                        >
                          {prefuctures[key].state}
                          {'('}
                          {prefuctures[key].count}
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
                      <div className="py-[2px] ">
                        {isOpen[index]
                          ? prefuctures[key]['area'].map((area, index) => (
                              <div key={index} onClick={handleAddressFormIN}>
                                <div
                                  className=" cursor-pointer py-[2px] pl-3 pr-[3px] text-[12px] hover:text-blue-500  "
                                  id="address"
                                  data-adname={area.name}
                                  data-ad_code={area.area_code}
                                >
                                  {area.name}
                                  {'('}
                                  {area.count}
                                  {')'}
                                </div>
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
      </div>
    </>
  );
};
export default AddressForm;
