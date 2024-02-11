import { Link } from '@inertiajs/react';
import header_logo from '~/images/header_logo.svg';

const Logo = () => {
  return (
    <div className="ml-2  w-[130px] sm:w-[150px]">
      <Link href="/">
        <img src={header_logo} alt="" className="  " />
      </Link>
    </div>
  );
};
export default Logo;
