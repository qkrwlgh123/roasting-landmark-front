import { routes } from '../../../../routes';
import { CafeShopType } from '../../../../types/cafeShop';
import Style from './cafeShop.style';
import { Link } from 'react-router-dom';

const CafeShop = ({ shopInfos }: { shopInfos: CafeShopType }) => {
  return (
    <Link to={`/cafeShopDetail/${shopInfos.id}`}>
      <Style.CafeShopBox>
        <div>{shopInfos.name}</div>
        <div>{shopInfos.rate}</div>
        <div></div>
      </Style.CafeShopBox>
    </Link>
  );
};

export default CafeShop;
