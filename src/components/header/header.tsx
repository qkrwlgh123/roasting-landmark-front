import Style from './header.style';

const Header = () => {
  return (
    <Style.HeaderContainer>
      <Style.HeaderContentsBox>
        <Style.LogoBox>로고</Style.LogoBox>
        <Style.SearchComponentBox>
          <Style.SearchCafeInput placeholder="지역 또는 카페명 입력" />
        </Style.SearchComponentBox>
        <Style.CreateCafeBox>카페 정보 등록</Style.CreateCafeBox>
        <Style.AuthBox>
          <div>로그인</div>
          <div>회원가입</div>
        </Style.AuthBox>
      </Style.HeaderContentsBox>
    </Style.HeaderContainer>
  );
};

export default Header;
