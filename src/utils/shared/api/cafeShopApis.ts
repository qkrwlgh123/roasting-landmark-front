import { FieldValues } from 'react-hook-form';
import {
  authInstance,
  defaultInstance,
  formDataInstance,
  getAuthorizationHeader,
} from './axiosInstance';
import imageCompression from 'browser-image-compression';

// 모든 카페 목록 조회
export const getAllShops = async () => {
  try {
    const { data } = await defaultInstance.get(`/shop/shops`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 내가 등록한 카페 목록 조회
export const getMyShops = async () => {
  try {
    const { data } = await authInstance.get(`/shop/myList`, {
      headers: { Authorization: getAuthorizationHeader() },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// 단욀 카페 조회
export const getShopDetail = async (id: number) => {
  try {
    const { data } = await authInstance.get(`/shop/detail`, {
      params: {
        id,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// 신규 카페 정보 등록
export const postCreateShop = async (data: FormData) => {
  try {
    const shop = await formDataInstance.post('shop/create', data, {
      headers: { Authorization: getAuthorizationHeader() },
    });
    return shop.data.id;
  } catch (error) {
    console.log(error);
  }
};

// 여러 이미지 압축하는 함수
export const handleImagesCompress = async (images: File[]) => {
  const options = {
    maxSizeMB: 0.2, // 이미지 최대 용량
    maxWidthOrHeight: 1920, // 최대 넓이(혹은 높이)
    useWebWorker: true,
  };
  const compressedBlobs: Blob[] = [];

  try {
    for (const image of images) {
      const compressedFile = await imageCompression(image, options);
      compressedBlobs.push(compressedFile);
    }
    return compressedBlobs;
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
    const searchedList = await authInstance.get(`/shop/search`, {
      params: {
        keyword,
      },
    });

    return searchedList;
  } catch (err) {
    console.log(err);
  }
};
