import Style from './myCreatedListLayout.style';

const MyCreatedListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.Layout>
      <Style.InnerContainer>{children}</Style.InnerContainer>
    </Style.Layout>
  );
};

export default MyCreatedListLayout;
