import { CafeShopType } from '../../../../types/cafeShop';
import Style from './cafeShop.style';
import HeartIcon from '../../../../assets/images/btn_heart_off.png';
import DistanceIcon from '../../../../assets/images/btn_distance_bottom2.png';
import StarOffIcon from '../../../../assets/svg/star_off.svg';
import { Link } from 'react-router-dom';
import RateStars from '../../../cafeShop/rateStars/rateStars';

const CafeShop = ({ shopInfos }: { shopInfos: CafeShopType }) => {
  return (
    <Link to={`/cafeShopDetail/${shopInfos.id}`}>
      <Style.CafeInfoBox>
        <Style.CafeImageBox>
          <img src={shopInfos?.images[0]} alt="represent_image" />
        </Style.CafeImageBox>
        <Style.CafeInfosBox>
          <Style.CafeTitleBox>
            <span>{shopInfos?.shopName}</span>
            {/* <div>
              <img src={HeartIcon} alt="heart_icon" />
            </div> */}
          </Style.CafeTitleBox>
          <Style.CafeHashTagsBox>
            {shopInfos?.keywords?.map((keyword) => (
              <span key={keyword}>#{keyword}&nbsp; </span>
            ))}
          </Style.CafeHashTagsBox>
        </Style.CafeInfosBox>
        <Style.RatesDistanceInfoBox>
          <RateStars rate={shopInfos?.rate!} />
          {shopInfos?.distance ? (
            <Style.DistanceTextBox>
              <Style.DistanceIconBox>
                <img src={DistanceIcon} alt="distance_icon" />
              </Style.DistanceIconBox>
              <span>
                {shopInfos?.distance > 1
                  ? (shopInfos?.distance).toFixed(1) + 'km'
                  : Math.round(shopInfos?.distance * 1000) + 'm'}
              </span>
            </Style.DistanceTextBox>
          ) : null}
        </Style.RatesDistanceInfoBox>
      </Style.CafeInfoBox>
    </Link>
  );
};

export default CafeShop;
