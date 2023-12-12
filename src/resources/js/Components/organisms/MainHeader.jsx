import Logo from '../atoms/Logo';

const MainHeader = () => {
  return (
    <header className="flex h-[50px] items-center justify-center bg-black sm:h-[65px] ">
      <div className="w-[1100px]">
        <Logo />
      </div>
    </header>
  );
};
export default MainHeader;
