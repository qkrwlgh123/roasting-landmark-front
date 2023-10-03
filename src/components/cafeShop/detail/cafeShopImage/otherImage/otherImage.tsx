import { CafeShopImageType } from '../../../../../types/cafeShop';
import Style from './otherImage.style';

const OtherImage = ({
  src,
  index,
  handleClickImage,
}: {
  src: CafeShopImageType;
  index: number;
  handleClickImage: (imageIndex: number) => void;
}) => {
  return (
    <Style.CafeShopImageBox onClick={() => handleClickImage(index + 1)}>
      <img src={src} alt="카페 이미지" />
    </Style.CafeShopImageBox>
  );
};

export default OtherImage;
