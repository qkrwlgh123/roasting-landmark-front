import Footer from '../../footer/footer';
import Header from '../../header/header';
import Style from './mainLayout.style';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.Layout>
      <Header />

      <Style.ContentsLayout>{children}</Style.ContentsLayout>

      {/* <Footer /> */}
    </Style.Layout>
  );
};

export default MainLayout;
