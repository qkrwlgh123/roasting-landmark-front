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
  selectedMenu,
}: {
  shopId: number;
  detailInfo: CafeShopType;
  selectedMenu: string;
}) => {
  const handleRenderInfoBySelectedMenu = (selectedMenu: string) => {
    switch (selectedMenu) {
      case '소개':
        return <CafeShopDescription detailInfo={detailInfo} />;

      case '안내':
        return <CafeShopContacts detailInfo={detailInfo} />;

      case '위치':
        return <CafeShopLocation detailInfo={detailInfo} />;

      case '메뉴':
        return <CafeShopMenu detailInfo={detailInfo} />;

      case '후기':
        return <CafeShopReviewList shopId={shopId} />;

      default:
        return <div>알 수 없는 접근입니다.</div>;
    }
  };

  return (
    <Style.ShopDetailInfoContainer>
      {handleRenderInfoBySelectedMenu(selectedMenu)}
    </Style.ShopDetailInfoContainer>
  );
};

export default CafeShopDetailInfo;
