import Style from './login.style';
import LoginPageLayout from '../../../components/layout/login/loginPageLayout';
import KakaoLoginLogo from '../../../assets/images/kakao_login_medium_wide.png';
import { receivePermissionCode } from '../../../utils/shared/api/socialLogin/kakaoLogin';

const Login = () => {
  return (
    <LoginPageLayout>
      <Style.TitleBox>
        <span>카카오 계정으로 간편 로그인하기</span>
      </Style.TitleBox>
      <Style.ButtonsBox>
        <div onClick={receivePermissionCode}>
          <img src={KakaoLoginLogo} alt="카카오_로그인_이미지" />
        </div>
      </Style.ButtonsBox>
    </LoginPageLayout>
  );
};

export default Login;
