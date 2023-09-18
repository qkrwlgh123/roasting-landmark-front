import { CafeShopImageType } from '../../../../../types/cafeShop';
import Style from './representImage.style';

const RepresentImage = ({ src }: { src: CafeShopImageType }) => {
  return (
    <Style.CafeShopImageBox>
      <img src={src} alt="카페 이미지" />
    </Style.CafeShopImageBox>
  );
};

export default RepresentImage;
