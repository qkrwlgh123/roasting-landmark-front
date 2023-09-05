import { CafeShopType } from '../../../../../types/cafeShop';
import CafeShopMap from './cafeShopMap/cafeShopMap';

const CafeShopLocation = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  return <CafeShopMap detailInfo={detailInfo} />;
};

export default CafeShopLocation;
