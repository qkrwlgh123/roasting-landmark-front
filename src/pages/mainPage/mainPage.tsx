import { useState } from 'react';
import CafeListLayout from '../../components/layout/cafeShop/cafeListLayout/cafeListLayout';
import CafeShopList from '../../components/mainPage/cafeShop/cafeShopList/cafeShopList';
import RecommendByLocation from '../../components/mainPage/recommendByLocation/recommendByLocation';
import { CafeShopType } from '../../types/cafeShop';

const MainPage = () => {
  const [shopList, setShopList] = useState<CafeShopType[]>([]);
  const handleSetShopList = (list: CafeShopType[]) => {
    setShopList(list);
  };
  return (
    <>
      <RecommendByLocation
        shopList={shopList}
        handleSetShopList={handleSetShopList}
      />
      <CafeListLayout>
        <CafeShopList
          shopList={shopList}
          handleSetShopList={handleSetShopList}
        />
      </CafeListLayout>
    </>
  );
};

export default MainPage;
