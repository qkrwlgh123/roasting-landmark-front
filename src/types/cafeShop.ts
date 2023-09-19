import { ReviewType } from './review';

export interface CafeShopType {
  id: number;
  shopName: string;
  keywords?: string[];
  desertType?: string;
  description?: string;
  roadAddress?: string;
  parcelAddress?: string;
  telNumber?: string;
  priceRange?: string;
  parkingType?: string;
  openTime?: string;
  breakTime?: string;
  holiday?: string;
  rate?: number;
  participants?: number;
  images: string[];
  latitude?: number;
  longitude?: number;
  website?: string;
  menu?: { food: string; price: string }[];
  distance?: number;
  reviews?: string[];
  shop_review?: ReviewType[];
  isCreator: boolean;
}

export type CafeShopImageType = string;

export type CafeShopMenuType = {
  food: string;
  price: string;
};
