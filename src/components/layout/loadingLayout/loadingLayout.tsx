import Style from './loadingLayout.style';

const LoadingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.LoadingBackground>
      <Style.LoadingBox>{children}</Style.LoadingBox>
    </Style.LoadingBackground>
  );
};

export default LoadingLayout;
