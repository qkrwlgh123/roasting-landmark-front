import { CafeShopImageType } from '../../../../types/cafeShop';
import Style from './cafeShopImage.style';

const CafeShopImage = ({ src }: { src: CafeShopImageType }) => {
  return (
    <Style.CafeShopImageBox>
      <img src={src} />
    </Style.CafeShopImageBox>
  );
};

export default CafeShopImage;
