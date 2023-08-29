import { CafeShopType } from '../../../../types/cafeShop';
import Style from './cafeShop.style';
import { Link } from 'react-router-dom';

const CafeShop = ({ shopInfos }: { shopInfos: CafeShopType }) => {
  console.log(shopInfos);
  return (
    <Link to={`/cafeShopDetail/${shopInfos.id}`}>
      <Style.CafeInfoBox>
        {shopInfos?.distance ? (
          <span>
            거리:
            {shopInfos?.distance > 1
              ? (shopInfos?.distance).toFixed(1) + 'km'
              : Math.round(shopInfos?.distance * 1000) + 'm'}
          </span>
        ) : null}
        <Style.CafeImageBox>
          <img src={shopInfos?.images[0]} />
        </Style.CafeImageBox>
        <span>{shopInfos.shopName}</span>
      </Style.CafeInfoBox>
    </Link>
  );
};

export default CafeShop;
