import { useEffect, useState } from 'react';
import CafeShop from '../cafeShop/cafeShop';
import Style from './cafeShopList.style';
import { getAllShops } from '../../../../utils/shared/cafeShopApis';
import { CafeShopType } from '../../../../types/cafeShop';

const CafeShopList = ({
  shopList,
  handleSetShopList,
}: {
  shopList: CafeShopType[];
  handleSetShopList: (list: CafeShopType[]) => void;
}) => {
  useEffect(() => {
    const fetchShopsList = async () => {
      const shopList = await getAllShops();
      handleSetShopList(shopList);
    };
    fetchShopsList();
  }, []);

  return (
    <Style.ListBox>
      {shopList?.map((shop: CafeShopType) => (
        <CafeShop key={shop.id} shopInfos={shop} />
      ))}
    </Style.ListBox>
  );
};

export default CafeShopList;
