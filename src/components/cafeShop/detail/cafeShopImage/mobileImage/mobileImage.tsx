import Style from './mobileImage.style';

const MobileImage = ({
  src,
  index,
  handleClickImage,
}: {
  src: string;
  index: number;
  handleClickImage: (imageIndex: number) => void;
}) => {
  return (
    <Style.CafeShopImageBox onClick={() => handleClickImage(index)}>
      <img src={src} alt="카페 이미지" />
    </Style.CafeShopImageBox>
  );
};

export default MobileImage;
