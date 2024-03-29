import FrontForm from '../organisms/FrontForm';

const HomeContent = ({ keywords, brands, prefuctures }) => {
  return (
    <div
      style={{ backgroundImage: `url(./images/background-top.jpg)` }}
      className="flex  h-[400px] w-full items-center  justify-center  bg-center bg-no-repeat sm:h-[437px]   "
    >
      <div className="w-full px-1 sm:max-w-[800px] sm:px-0 ">
        <div className="flex justify-center ">
          {/* PC用 */}
          <img
            src="./images/front_subject.svg"
            alt=""
            className="mb-2  hidden sm:block sm:w-[790px]   "
          />
          {/* スマホ用 */}
          <div className="w-full sm:hidden ">
            <h2 className="text-[38px] font-semibold  italic text-white">
              探してるショップがすぐに見つかる
            </h2>
            <h3 className="text-[18px] font-semibold italic text-white">
              ブランドセレクトショップ検索サイト
            </h3>
          </div>
        </div>

        <div className="    flex  w-full justify-center pb-3 pt-2 sm:pt-4">
          <div className=" w-full   justify-center sm:flex sm:h-[45px] ">
            <FrontForm
              keywords={keywords}
              brands={brands}
              prefuctures={prefuctures}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
