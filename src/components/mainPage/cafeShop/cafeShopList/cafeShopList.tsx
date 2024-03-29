import { useEffect, useState } from 'react';
import CafeShop from '../cafeShop/cafeShop';
import Style from './cafeShopList.style';
import {
  getAllShops,
  getRecommendByLocationShops,
} from '../../../../utils/shared/api/cafeShopApis';
import { CafeShopType } from '../../../../types/cafeShop';
import NotResult from '../../../cafeShop/noResult/notResult';

const CafeShopList = ({
  currentKeywords,
  isLocationSelected,
  currentLocation,
  shopList,
  handleSetShopList,
}: {
  currentKeywords: string[];
  isLocationSelected: boolean;
  currentLocation: { latitude: number; longitude: number };
  shopList: CafeShopType[];
  handleSetShopList: (list: CafeShopType[]) => void;
}) => {
  useEffect(() => {
    const fetchShopsList = async () => {
      let shopList;
      if (isLocationSelected) {
        const response = await getRecommendByLocationShops(currentLocation);
        shopList = response?.data;
      } else {
        shopList = await getAllShops();
      }
      if (currentKeywords.length > 0) {
        const filteredList = shopList.filter((shop: CafeShopType) =>
          shop.keywords!.some((keyword: string) =>
            currentKeywords.includes(keyword)
          )
        );
        handleSetShopList(filteredList);
        return;
      }
      handleSetShopList(shopList);
    };

    fetchShopsList();
  }, [currentKeywords, currentLocation, isLocationSelected]);

  return (
    <>
      {shopList?.length > 0 ? (
        <Style.ListBox>
          {shopList?.map((shop: CafeShopType) => (
            <CafeShop key={shop.id} shopInfos={shop} />
          ))}
        </Style.ListBox>
      ) : (
        <NotResult message="해당 지역 또는 키워드에 일치하는 카페가 없습니다" />
      )}
    </>
  );
};

export default CafeShopList;
