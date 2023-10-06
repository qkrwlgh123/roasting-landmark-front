import { useState } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Style from './mainLayout.style';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const handleFocus = () => {
    setIsSearchInputFocused(true);
  };

  const handleBlur = () => {
    setIsSearchInputFocused(false);
  };
  return (
    <Style.Layout>
      <Header handleFocus={handleFocus} handleBlur={handleBlur} />

      <Style.ContentsLayout>{children}</Style.ContentsLayout>

      <Style.Overlay $active={isSearchInputFocused} />
      {/* <Footer /> */}
    </Style.Layout>
  );
};

export default MainLayout;
