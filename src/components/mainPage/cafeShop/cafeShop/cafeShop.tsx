import { CafeShopType } from '../../../types/cafeShop';
import Style from './cafeShop.style';

const CafeShop = ({ shopInfos }: { shopInfos: CafeShopType }) => {
  return (
    <Style.CafeShopBox>
      <div>{shopInfos.name}</div>
      <div>{shopInfos.rate}</div>
      <div></div>
    </Style.CafeShopBox>
  );
};

export default CafeShop;
