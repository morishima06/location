import Header from '@/Components/organisms/Header';
import Footer from '@/Components/organisms/Footer';

const FrontLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default FrontLayout;
