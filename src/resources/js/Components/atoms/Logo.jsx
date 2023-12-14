import { Link } from '@inertiajs/react';
import pogo from '~//images/header_logo.svg';

const Logo = () => {
  return (
    <div className="ml-2  w-[130px] sm:w-[150px]">
      <Link href="/">
        <img
          // src={`${import.meta.env.VITE_APP_URL}/images/header_logo.svg`}
          src={pogo}

          alt=""
          className="  "
        />
      </Link>
    </div>
  );
};
export default Logo;
