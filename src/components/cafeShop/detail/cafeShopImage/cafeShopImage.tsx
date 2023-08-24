import { CafeShopImageType } from '../../../../types/cafeShop';
import Style from './cafeShopImage.style';

const CafeShopImage = ({ src }: { src: CafeShopImageType }) => {
  return (
    <Style.CafeShopImageBox>
      <div>{src}</div>
    </Style.CafeShopImageBox>
  );
};

export default CafeShopImage;
