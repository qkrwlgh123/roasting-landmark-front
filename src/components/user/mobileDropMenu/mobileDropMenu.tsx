import Style from './mobileDropMenu.style';
import HamburgerIcon from '../../../assets/images/hamburger.png';
import { useState } from 'react';
import MenuList from './menuList/menuList';

const MobileDropMenu = () => {
  const [isClickMenuicon, setIsClickMenuicon] = useState(false);
  const handleClickMenu = () => {
    setIsClickMenuicon((prev: boolean) => !prev);
  };

  return (
    <Style.MobileMenuBox>
      <div onClick={handleClickMenu}>
        <img src={HamburgerIcon} alt="menu_icon" />
      </div>
      {isClickMenuicon && (
        <MenuList
          isClickMenuicon={isClickMenuicon}
          handleClickMenu={handleClickMenu}
        />
      )}
    </Style.MobileMenuBox>
  );
};

export default MobileDropMenu;
