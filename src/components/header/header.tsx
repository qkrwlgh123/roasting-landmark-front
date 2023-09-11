import { Link, useNavigate } from 'react-router-dom';
import Style from './header.style';
import { routes } from '../../routes';
import { isLoggedInAtom } from '../../recoil/authAtoms';
import { useRecoilValue } from 'recoil';
import Profile from '../user/profile/profile';
import { useState } from 'react';
import { receivePermissionCode } from '../../utils/shared/api/socialLogin/kakaoLogin';
import Logo from '../../assets/images/home_logo.png';
import SearchIcon from '../../assets/images/btn_search.png';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

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
  return (
    <Style.HeaderContainer>
      <Style.HeaderContentsBox>
        <Style.LeftHeaderContentsBox>
          <Link to={routes.mainPage}>
            <Style.LogoBox>
              <img src={Logo} alt="로고_이미지" />
            </Style.LogoBox>
          </Link>
          <Style.SearchComponentBox>
            <Style.SearchCafeInput
              placeholder="지역 또는 카페를 검색하세요."
              value={searchKeyword}
              onChange={handleInputKeyword}
            />
            <div onClick={handleStartSearch}>
              <img src={SearchIcon} alt="검색아이콘_이미지" />
            </div>
          </Style.SearchComponentBox>
        </Style.LeftHeaderContentsBox>
        <Style.RightHeaderContentsBox>
          <Link to={routes.cafeShopCreate}>
            <Style.CreateCafeBox>신규 카페 등록</Style.CreateCafeBox>
          </Link>
          <Style.AuthBox>
            {isLoggedIn ? (
              <Profile />
            ) : (
              <>
                <div onClick={receivePermissionCode}>로그인</div>

                {/* <div onClick={receivePermissionCode}>카카오 로그인</div> */}
              </>
            )}
          </Style.AuthBox>
        </Style.RightHeaderContentsBox>
      </Style.HeaderContentsBox>
    </Style.HeaderContainer>
  );
};

export default Header;
