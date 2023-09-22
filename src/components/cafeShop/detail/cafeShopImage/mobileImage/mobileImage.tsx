import Style from './mobileImage.style';

const MobileImage = ({ src }: { src: string }) => {
  return (
    <Style.CafeShopImageBox>
      <img src={src} alt="카페 이미지" />
    </Style.CafeShopImageBox>
  );
};

export default MobileImage;
