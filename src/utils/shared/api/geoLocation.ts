import { Dispatch, SetStateAction } from 'react';
import { getCurrentPositionResultType } from '../../../types/kakaoApiResult';
import { getRecommendByLocationShops } from './cafeShopApis';
import { CafeShopType } from '../../../types/cafeShop';

const { kakao } = window;

// 현재 위도, 경도 기반 한글 주소 검색
export const getCurrentLocation = (
  handleGetCurrentGegion: (region: string) => void,
  handleGetCurrentLocation: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void,
  handleSetShopList: (list: CafeShopType[]) => void,
  handleChangleLoadingState: () => void
) => {
  if ('geolocation' in navigator) {
    handleChangleLoadingState();
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        handleGetCurrentLocation({ latitude, longitude });
        const recommendedList = await getRecommendByLocationShops({
          latitude,
          longitude,
        });

        handleSetShopList(recommendedList?.data);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2RegionCode(
          longitude,
          latitude,
          (result: getCurrentPositionResultType, status: string) => {
            handleGetCurrentGegion(result[0].address_name);
            handleChangleLoadingState();
          }
        );
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  } else {
    console.log('Geolocation is not available in this browser.');
  }
};
