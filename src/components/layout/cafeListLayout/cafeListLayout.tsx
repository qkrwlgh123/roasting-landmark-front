import Style from './cafeListLayout.style';

const CafeListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.Layout>
      <Style.ContentsLayout>{children}</Style.ContentsLayout>
    </Style.Layout>
  );
};

export default CafeListLayout;
