import Logo from '../atoms/Logo';

const Header = () => {
  return (
    <header className="flex h-[50px] w-full items-center justify-center bg-black sm:h-[65px] ">
      <div className=" w-[1280px]">
        <Logo />
      </div>
    </header>
  );
};
export default Header;
