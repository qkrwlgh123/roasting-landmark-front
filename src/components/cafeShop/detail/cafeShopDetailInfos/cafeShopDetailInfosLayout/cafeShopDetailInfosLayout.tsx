import Style from './cafeShopDetailInfosLayout.style';

const CafeShopDetailInfosLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Style.DetailInfoLayout>{children}</Style.DetailInfoLayout>;
};

export default CafeShopDetailInfosLayout;
