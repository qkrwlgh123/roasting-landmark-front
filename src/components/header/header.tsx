import { Link } from 'react-router-dom';
import Style from './header.style';
import { routes } from '../../routes';
import { isLoggedInAtom } from '../../recoil/authAtoms';
import { useRecoilValue } from 'recoil';
import Profile from '../user/profile/profile';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  return (
    <Style.HeaderContainer>
      <Style.HeaderContentsBox>
        <Link to={routes.mainPage}>
          <Style.LogoBox>로고</Style.LogoBox>
        </Link>
        <Style.SearchComponentBox>
          <Style.SearchCafeInput placeholder="지역 또는 카페명 입력" />
        </Style.SearchComponentBox>
        <Link to={routes.cafeShopCreate}>
          <Style.CreateCafeBox>카페 정보 등록</Style.CreateCafeBox>
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
            </>
          )}
        </Style.AuthBox>
      </Style.HeaderContentsBox>
    </Style.HeaderContainer>
  );
};

export default Header;
