import { CafeShopType } from '../../../../types/cafeShop';
import Style from './cafeShop.style';
import HeartIcon from '../../../../assets/images/btn_heart_off.png';
import DistanceIcon from '../../../../assets/images/btn_distance_bottom2.png';
import StarOffIcon from '../../../../assets/svg/star_off.svg';
import { Link } from 'react-router-dom';

const CafeShop = ({ shopInfos }: { shopInfos: CafeShopType }) => {
  console.log(shopInfos);
  return (
    <Link to={`/cafeShopDetail/${shopInfos.id}`}>
      <Style.CafeInfoBox>
        <Style.CafeImageBox>
          <img src={shopInfos?.images[0]} />
        </Style.CafeImageBox>
        <Style.CafeInfosBox>
          <Style.CafeTitleBox>
            <span>{shopInfos?.shopName}</span>
            <div>
              <img src={HeartIcon} />
            </div>
          </Style.CafeTitleBox>
          <Style.CafeHashTagsBox>
            <span>#해쉬</span>
            <span>#태그</span>
            <span>#더미</span>
          </Style.CafeHashTagsBox>
        </Style.CafeInfosBox>
        <Style.RatesDistanceInfoBox>
          <Style.RatesBox>
            <>
              <Style.RateIconsBox>
                {shopInfos?.rate ? (
                  <span>평점</span>
                ) : (
                  Array.from({ length: 5 }).map((star) => (
                    <img src={StarOffIcon} width={'16px'} alt="평점_아이콘" />
                  ))
                )}
              </Style.RateIconsBox>
              <span>0</span>
            </>
          </Style.RatesBox>
          {shopInfos?.distance ? (
            <Style.DistanceTextBox>
              <Style.DistanceIconBox>
                <img src={DistanceIcon} />
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
