// import SearchContetnt from "@/Components/SearchContent";
import MainHeader from '@/Components/organisms/MainHeader';
import Footer from '@/Components/organisms/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
