import Style from './mobileDropMenu.style';
import HamburgerIcon from '../../../assets/images/hamburger.png';
import SearchIcon from '../../../assets/images/btn_search.png';
import { useState } from 'react';
import MenuList from './menuList/menuList';
import { SearchCafeInput, SearchComponentBox } from '../../header/header.style';

const MobileDropMenu = () => {
  const [isClickSearchIcon, setIsClickSearchIcon] = useState(false);
  const handleClickSearchIcon = () => {
    setIsClickSearchIcon((prev: boolean) => !prev);
  };

  const [isClickMenuicon, setIsClickMenuicon] = useState(false);
  const handleClickMenu = () => {
    setIsClickMenuicon((prev: boolean) => !prev);
  };

  return (
    <Style.MobileMenuBox>
      <Style.SearchIconBox onClick={handleClickSearchIcon}>
        <img src={SearchIcon} alt="search_icon" />
      </Style.SearchIconBox>
      <Style.SearchComponent>
        {isClickSearchIcon && (
          <SearchComponentBox>
            <SearchCafeInput />
          </SearchComponentBox>
        )}
      </Style.SearchComponent>
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
