import { Link, useNavigate } from 'react-router-dom';
import Style from './header.style';
import { routes } from '../../routes';
import { isLoggedInAtom } from '../../recoil/authAtoms';
import { useRecoilValue } from 'recoil';
import Profile from '../user/profile/profile';
import { useEffect, useState } from 'react';
import Logo from '../../assets/images/home_logo.png';
import SearchIcon from '../../assets/images/btn_search.png';
import MobileDropMenu from '../user/mobileDropMenu/mobileDropMenu';

const Header = ({
  handleBlur,
  handleFocus,
}: {
  handleBlur: () => void;
  handleFocus: () => void;
}) => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const [scrollPosition, setScrollPosition] = useState(0);

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

  // 엔터키 누를 시 검색 동작
  const handleActiveEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleStartSearch();
      handleBlur();
    }
  };

  //  스크롤 위치에 따른 헤더바 UI 변경
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  });
  return (
    <Style.HeaderContainer $isdown={scrollPosition > 80}>
      <Style.HeaderContentsBox>
        <Style.LeftHeaderContentsBox>
          <Link to={routes.mainPage}>
            <Style.LogoBox $isdown={scrollPosition > 80}>
              <img src={Logo} alt="로고_이미지" />
            </Style.LogoBox>
          </Link>
          <Style.SearchComponentBox>
            <Style.SearchCafeInput
              placeholder="카페 또는 지역명으로 검색해보세요."
              value={searchKeyword}
              onChange={handleInputKeyword}
              onKeyDown={(e) => handleActiveEnterKey(e)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div onClick={handleStartSearch}>
              <img src={SearchIcon} alt="검색아이콘_이미지" />
            </div>
          </Style.SearchComponentBox>
        </Style.LeftHeaderContentsBox>
        <Style.RightHeaderContentsBox $isdown={scrollPosition > 80}>
          <a href="https://open.kakao.com/o/sw3zU1Hf" target="_blank">
            <Style.ButtonBox>문의 남기기</Style.ButtonBox>
          </a>
          {isLoggedIn && (
            <Link to={routes.selectKeywords}>
              <Style.ButtonBox>신규 카페 등록</Style.ButtonBox>
            </Link>
          )}
          <Style.AuthBox>
            {isLoggedIn ? (
              <Profile />
            ) : (
              <>
                <Link to={routes.login}>
                  <Style.ButtonBox>로그인</Style.ButtonBox>
                </Link>
                <MobileDropMenu />
              </>
            )}
          </Style.AuthBox>
        </Style.RightHeaderContentsBox>
      </Style.HeaderContentsBox>
    </Style.HeaderContainer>
  );
};

export default Header;
