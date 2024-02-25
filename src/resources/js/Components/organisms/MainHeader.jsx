import Logo from '../atoms/Logo';

const MainHeader = () => {
  return (
    <header className="flex h-[50px] w-full items-center justify-center bg-black sm:h-[65px] ">
      <div className="w-full sm:w-[1100px]">
        <Logo />
      </div>
    </header>
  );
};
export default MainHeader;
