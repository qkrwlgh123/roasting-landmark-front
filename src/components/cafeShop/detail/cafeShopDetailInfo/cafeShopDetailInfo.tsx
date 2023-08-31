import { CafeShopType } from '../../../../types/cafeShop';
import CafeShopDescription from '../cafeShopDetailInfos/cafeShopDescription/cafeShopDescription';
import CafeShopFacilities from '../cafeShopDetailInfos/cafeShopFacilities/cafeShopFacilities';
import CafeShopLocation from '../cafeShopDetailInfos/cafeShopLocation/cafeShopLocation';
import CafeShopMenu from '../cafeShopDetailInfos/cafeShopMenu/cafeShopMenu';
import CafeShopReviewList from '../cafeShopDetailInfos/cafeShopReviews/cafeShopReviewList/cafeShopReviewList';
import Style from './cafeShopDetailInfo.style';

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
        return <CafeShopDescription />;

      case '시설 안내':
        return <CafeShopFacilities parkingType={detailInfo?.parkingType!} />;

      case '위치':
        return <CafeShopLocation />;

      case '메뉴':
        return <CafeShopMenu menu={detailInfo?.menu!} />;

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
