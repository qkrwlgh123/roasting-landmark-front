import Style from './mobileDropMenu.style';
import HamburgerIcon from '../../../assets/images/hamburger.png';
import SearchIcon from '../../../assets/images/btn_search.png';
import { useState } from 'react';
import MenuList from './menuList/menuList';
import { useNavigate } from 'react-router-dom';

const MobileDropMenu = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleStartSearch = () => {
    if (searchKeyword === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    navigate(`/search/${searchKeyword}`);
  };
  const [isClickSearchIcon, setIsClickSearchIcon] = useState(false);
  const [isClickMenuicon, setIsClickMenuicon] = useState(false);
  const handleClickSearchIcon = () => {
    setIsClickSearchIcon((prev: boolean) => !prev);
    setIsClickMenuicon(false);
  };

  const handleClickMenu = () => {
    setIsClickMenuicon((prev: boolean) => !prev);
    setIsClickSearchIcon(false);
  };

  return (
    <Style.MobileMenuBox>
      <Style.SearchIconBox onClick={handleClickSearchIcon}>
        <img src={SearchIcon} alt="search_icon" />
      </Style.SearchIconBox>
      {isClickSearchIcon && (
        <Style.MobileSearchComponentBox>
          <Style.MobileSearchCafeInput
            value={searchKeyword}
            onChange={handleInputKeyword}
            placeholder="카페 또는 지역명으로 검색해보세요."
          />
          <div onClick={handleStartSearch}>
            <img src={SearchIcon} alt="검색아이콘" />
          </div>
        </Style.MobileSearchComponentBox>
      )}

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
