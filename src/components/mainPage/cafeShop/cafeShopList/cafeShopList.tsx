import { useEffect, useState } from 'react';
import CafeShop from '../cafeShop/cafeShop';
import Style from './cafeShopList.style';
import { getAllShops } from '../../../../utils/shared/cafeShopApis';
import { CafeShopType } from '../../../../types/cafeShop';

const CafeShopList = () => {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    const fetchShopsList = async () => {
      const shopList = await getAllShops();
      setShopList(shopList);
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
