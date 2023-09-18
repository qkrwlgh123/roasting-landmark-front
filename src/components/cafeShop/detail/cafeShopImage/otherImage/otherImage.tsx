import { CafeShopImageType } from '../../../../../types/cafeShop';
import Style from './otherImage.style';

const OtherImage = ({ src }: { src: CafeShopImageType }) => {
  return (
    <Style.CafeShopImageBox>
      <img src={src} alt="카페 이미지" />
    </Style.CafeShopImageBox>
  );
};

export default OtherImage;
