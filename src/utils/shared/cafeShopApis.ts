import { FieldValues } from 'react-hook-form';
import { defaultInstance } from './axiosInstance';

// 모든 카페 목록 조회
export const getAllShops = async () => {
  try {
    const { data } = await defaultInstance.get(`/shop/shops`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 신규 카페 정보 등록
export const postCreateShop = async (data: FieldValues) => {
  try {
    const shop = await defaultInstance.post('shop/create', data);
    console.log(shop);
  } catch (error) {
    console.log(error);
  }
};
