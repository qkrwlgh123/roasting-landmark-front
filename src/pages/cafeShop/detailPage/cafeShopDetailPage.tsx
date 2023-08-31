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

const CafeShopDetailPage = () => {
  const params = useParams();
  const shopId = Number(params.id);
  const [shopInfo, setShopInfo] = useState<CafeShopType>();
  const [selectedMenu, setSelectedMenu] = useState('소개');

  const handleClickInfoMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

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
      <CafeShopIntro
        introInfo={{
          shopId,
          shopName: shopInfo?.shopName!,
          rate: shopInfo?.rate!,
          participants: shopInfo?.participants!,
        }}
      />
      <SelectInfoMenu
        selectedMenu={selectedMenu}
        handleClickInfoMenu={handleClickInfoMenu}
      />

      <CafeShopDetailInfo
        shopId={shopId}
        detailInfo={shopInfo!}
        selectedMenu={selectedMenu}
      />
    </CafeDetailLayout>
  );
};

export default CafeShopDetailPage;
