import { Link } from 'react-router-dom';
import Style from './header.style';
import { routes } from '../../routes';

const Header = () => {
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
          <div>로그인</div>
          <div>회원가입</div>
        </Style.AuthBox>
      </Style.HeaderContentsBox>
    </Style.HeaderContainer>
  );
};

export default Header;
