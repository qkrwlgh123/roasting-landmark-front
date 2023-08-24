import { useState } from 'react';
import SelectInfoMenu from '../../../components/cafeShop/detail/cafeShopDetailInfos/selectInfoMenu/selectInfoMenu';
import CafeShopImageList from '../../../components/cafeShop/detail/cafeShopImageList/cafeShopImageList';
import CafeShopIntro from '../../../components/cafeShop/detail/cafeShopIntro/cafeShopIntro';
import CafeDetailLayout from '../../../components/layout/cafeShop/cafeDetailLayout/cafeDetailLayout';
import Style from './cafeShopDetailPage.style';
import CafeShopDetailInfo from '../../../components/cafeShop/detail/cafeShopDetailInfo/cafeShopDetailInfo';

const CafeShopDetailPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('소개');
  const handleClickInfoMenu = (menu: string) => {
    setSelectedMenu(menu);
  };
  return (
    <CafeDetailLayout>
      <CafeShopImageList />
      <CafeShopIntro />
      <SelectInfoMenu
        selectedMenu={selectedMenu}
        handleClickInfoMenu={handleClickInfoMenu}
      />

      <CafeShopDetailInfo selectedMenu={selectedMenu} />
    </CafeDetailLayout>
  );
};

export default CafeShopDetailPage;
