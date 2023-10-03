import { CafeShopType } from '../../../../types/cafeShop';
import CafeShopDescription from '../cafeShopDetailInfos/cafeShopDescription';
import CafeShopLocation from '../cafeShopDetailInfos/cafeShopLocation/cafeShopLocation';
import CafeShopMenu from '../cafeShopDetailInfos/cafeShopMenu';
import CafeShopReviewList from '../cafeShopDetailInfos/cafeShopReviews/cafeShopReviewList/cafeShopReviewList';
import Style from './cafeShopDetailInfo.style';
import CafeShopContacts from '../cafeShopDetailInfos/cafeShopContacts';

const CafeShopDetailInfo = ({
  shopId,
  detailInfo,
  participants,
}: {
  shopId: number;
  detailInfo: CafeShopType;
  participants: number;
}) => {
  return (
    <Style.ShopDetailInfoContainer>
      <CafeShopDescription detailInfo={detailInfo} />
      <CafeShopContacts detailInfo={detailInfo} />
      <CafeShopMenu detailInfo={detailInfo} />
      <CafeShopReviewList
        shopId={shopId}
        detailInfo={detailInfo}
        participants={participants}
        isCreator={detailInfo?.isCreator}
      />
    </Style.ShopDetailInfoContainer>
  );
};

export default CafeShopDetailInfo;
