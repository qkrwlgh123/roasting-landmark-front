import Style from './cafeDetail.style';

const CafeDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.Layout>
      <Style.ContentsLayout>{children}</Style.ContentsLayout>
    </Style.Layout>
  );
};

export default CafeDetailLayout;
