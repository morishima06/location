import { useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import SearchResult from '../organisms/SearchResult';
import MobileForm from '../organisms/MobileForm';
import Logo from '../atoms/Logo';
import MainForm from '../organisms/MainForm';

const SearchContent = ({ keywords, brands, prefuctures, info }) => {
  const [mobileForm, setMobileForm] = useState(true);
  const openMobileForm = () => {
    setMobileForm(false);
  };
  const closeMobileForm = () => {
    setMobileForm(true);
  };

  return (
    <>
      <div className=" mb-0  flex h-[64px] items-center  bg-black sm:mb-[56px] sm:block sm:h-[36px] ">
        <div className="  z-10  flex w-full max-w-[1100px]  items-center justify-center bg-black sm:relative sm:left-1/2   sm:h-[64px]  sm:-translate-x-1/2  sm:rounded-2xl">
          <div
            className={`z-10  mx-2 flex  h-10 w-full  items-center  overflow-hidden rounded-xl  bg-white sm:mt-0   sm:hidden ${
              mobileForm ? '' : 'hidden'
            }`}
            onClick={openMobileForm}
          >
            <MobileForm keywords={keywords} />
          </div>

          <div
            className={`fixed top-0   z-10  w-full bg-black sm:relative  sm:mt-0 sm:block sm:bg-transparent sm:pt-0 ${
              mobileForm ? 'hidden' : ''
            }`}
          >
            <div
              className={`py-6 sm:hidden sm:py-0 ${mobileForm ? 'hidden' : ''}`}
            >
              <Logo />
            </div>

            <div className="justify-center  px-2 sm:flex ">
              <MainForm
                keywords={keywords}
                brands={brands}
                prefuctures={prefuctures}
              />
              <div className="flex justify-center">
                <button
                  className="my-2 h-10 w-full text-white hover:text-slate-500 sm:hidden"
                  onClick={closeMobileForm}
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
        <div className="flex justify-center">
          <SearchResult info={info} />
        </div>
      </Wrapper>
    </>
  );
};
export default SearchContent;
