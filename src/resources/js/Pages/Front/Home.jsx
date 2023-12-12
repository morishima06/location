import FrontLayout from '@/Layouts/FrontLayout';
import HomeContent from '@/Components/templates/HomeConent';
import { Head } from '@inertiajs/react';

const Home = (props) => {
  const { brands, prefuctures, keywords } = props;

  return (
    <>
      <FrontLayout>
        <Head title="top" />
        <HomeContent
          keywords={keywords}
          brands={brands}
          prefuctures={prefuctures}
        />
        <div className=" mt-8  flex justify-center sm:mt-10">
          <div>
            {/* PC用画像 */}
            <img
              src="./images/intro.jpg"
              alt=""
              className="hidden w-full max-w-[920px] sm:block"
            />
            {/* スマホ用画像 */}
            <img
              src="./images/intro_responsive.jpg"
              alt=""
              className=" w-full sm:hidden"
            />
          </div>
        </div>
      </FrontLayout>
    </>
  );
};

export default Home;
