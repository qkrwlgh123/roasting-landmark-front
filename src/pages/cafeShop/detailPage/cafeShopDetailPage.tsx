import { useEffect, useState } from 'react';
import SelectInfoMenu from '../../../components/cafeShop/detail/cafeShopDetailInfos/selectInfoMenu/selectInfoMenu';
import CafeShopImageList from '../../../components/cafeShop/detail/cafeShopImageList/cafeShopImageList';
import CafeShopIntro from '../../../components/cafeShop/detail/cafeShopIntro/cafeShopIntro';
import CafeDetailLayout from '../../../components/layout/cafeShop/cafeDetailLayout/cafeDetailLayout';
import Style from './cafeShopDetailPage.style';
import CafeShopDetailInfo from '../../../components/cafeShop/detail/cafeShopDetailInfo/cafeShopDetailInfo';
import { getShopDetail } from '../../../utils/shared/cafeShopApis';
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
  console.log(shopInfo);
  return (
    <CafeDetailLayout>
      <CafeShopImageList images={shopInfo?.images!} />
      <CafeShopIntro
        introInfo={{ shopName: shopInfo?.shopName!, rate: shopInfo?.rate! }}
      />
      <SelectInfoMenu
        selectedMenu={selectedMenu}
        handleClickInfoMenu={handleClickInfoMenu}
      />

      <CafeShopDetailInfo detailInfo={shopInfo!} selectedMenu={selectedMenu} />
    </CafeDetailLayout>
  );
};

export default CafeShopDetailPage;
