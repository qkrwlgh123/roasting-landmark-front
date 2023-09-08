import { Link, useNavigate } from 'react-router-dom';
import Style from './header.style';
import { routes } from '../../routes';
import { isLoggedInAtom } from '../../recoil/authAtoms';
import { useRecoilValue } from 'recoil';
import Profile from '../user/profile/profile';
import { useState } from 'react';
import { receivePermissionCode } from '../../utils/shared/api/socialLogin/kakaoLogin';

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
        <Link to={routes.mainPage}>
          <Style.LogoBox>로고</Style.LogoBox>
        </Link>
        <Style.SearchComponentBox>
          <Style.SearchCafeInput
            placeholder="지역 또는 카페명 입력"
            value={searchKeyword}
            onChange={handleInputKeyword}
          />
          <button onClick={handleStartSearch}>
            <span>검색</span>
          </button>
        </Style.SearchComponentBox>
        <Link to={routes.cafeShopCreate}>
          <Style.CreateCafeBox>신규 카페 등록</Style.CreateCafeBox>
        </Link>
        <Style.AuthBox>
          {isLoggedIn ? (
            <Profile />
          ) : (
            <>
              <Link to={routes.login}>
                <div>로그인</div>
              </Link>
              <Link to={routes.signUp}>
                <div>회원가입</div>
              </Link>
              <div onClick={receivePermissionCode}>카카오 로그인</div>
            </>
          )}
        </Style.AuthBox>
      </Style.HeaderContentsBox>
    </Style.HeaderContainer>
  );
};

export default Header;
