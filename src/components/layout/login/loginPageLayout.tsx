import Style from './loginPageLayout.style';

const LoginPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.LoginLayoutContainer>
      <Style.LoginFormBox>{children}</Style.LoginFormBox>
    </Style.LoginLayoutContainer>
  );
};

export default LoginPageLayout;
