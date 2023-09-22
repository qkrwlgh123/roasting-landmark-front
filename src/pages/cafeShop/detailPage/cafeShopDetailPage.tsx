import { useEffect, useState } from 'react';
import SelectInfoMenu from '../../../components/cafeShop/detail/cafeShopDetailInfos/selectInfoMenu/selectInfoMenu';
import CafeShopImageList from '../../../components/cafeShop/detail/cafeShopImageList/cafeShopImageList';
import CafeShopIntro from '../../../components/cafeShop/detail/cafeShopIntro/cafeShopIntro';
import CafeDetailLayout from '../../../components/layout/cafeShop/cafeDetailLayout/cafeDetailLayout';
import Style from './cafeShopDetailPage.style';
import CafeShopDetailInfo from '../../../components/cafeShop/detail/cafeShopDetailInfo/cafeShopDetailInfo';
import { getShopDetail } from '../../../utils/shared/api/cafeShopApis';
import { useParams } from 'react-router-dom';
import { CafeShopType } from '../../../types/cafeShop';
import CafeShopLocation from '../../../components/cafeShop/detail/cafeShopDetailInfos/cafeShopLocation/cafeShopLocation';
import {
  DescriptionContainer,
  DescriptionSubjectBox,
} from '../../../components/cafeShop/detail/cafeShopDetailInfos/cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';

const CafeShopDetailPage = () => {
  const params = useParams();
  const shopId = Number(params.id);
  const [shopInfo, setShopInfo] = useState<CafeShopType>();

  useEffect(() => {
    const fetchShopDetail = async (id: number) => {
      const shopDetail = await getShopDetail(id);
      setShopInfo(shopDetail);
    };
    fetchShopDetail(shopId);
  }, []);

  return (
    <CafeDetailLayout>
      <CafeShopImageList images={shopInfo?.images!} />
      <Style.DetailInfoWholeArea>
        <Style.DetailLeftAreaContainer>
          <CafeShopIntro
            introInfo={{
              shopId,
              shopName: shopInfo?.shopName!,
              rate: shopInfo?.rate!,
              participants: shopInfo?.participants!,
              description: shopInfo?.description!,
              keywords: shopInfo?.keywords!,
            }}
          />
          <CafeShopDetailInfo
            shopId={shopId}
            detailInfo={shopInfo!}
            participants={shopInfo?.participants!}
          />
        </Style.DetailLeftAreaContainer>
        <Style.DetailLocationAreaContainer>
          <Style.DetailLocationBox>
            <DescriptionContainer>
              <DescriptionSubjectBox>카페 위치</DescriptionSubjectBox>
            </DescriptionContainer>
            <CafeShopLocation detailInfo={shopInfo!} />
          </Style.DetailLocationBox>
        </Style.DetailLocationAreaContainer>
      </Style.DetailInfoWholeArea>
    </CafeDetailLayout>
  );
};

export default CafeShopDetailPage;
