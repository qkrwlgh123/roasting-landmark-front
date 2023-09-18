import { FieldValues } from 'react-hook-form';
import { defaultInstance, formDataInstance } from './axiosInstance';

// 모든 카페 목록 조회
export const getAllShops = async () => {
  try {
    const { data } = await defaultInstance.get(`/shop/shops`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 단욀 카페 목록 조회
export const getShopDetail = async (id: number) => {
  try {
    const { data } = await defaultInstance.get(`/shop/detail`, {
      params: {
        id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 신규 카페 정보 등록
export const postCreateShop = async (data: FormData) => {
  try {
    const shop = await formDataInstance.post('shop/create', data);
    return shop.data.id;
  } catch (error) {
    console.log(error);
  }
};

// 위치 기반(위도, 경도) 카페 리스트 조회
export const getRecommendByLocationShops = async (data: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const recommendedList = await defaultInstance.get(`/shop/shopsByLocation`, {
      params: {
        ...data,
      },
    });
    return recommendedList;
  } catch (error) {
    console.log(error);
  }
};

// 카페명 또는 지역 검색
export const searchByKeyword = async (keyword: string) => {
  try {
    const searchedList = await defaultInstance.get(`/shop/search`, {
      params: {
        keyword,
      },
    });

    return searchedList;
  } catch (err) {
    console.log(err);
  }
};
