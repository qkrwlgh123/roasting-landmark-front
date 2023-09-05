export interface CafeShopType {
  id: number;
  shopName: string;
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
  reviews?: string[]; // 타입 고쳐야한다.
}

export type CafeShopImageType = string;

export type CafeShopMenuType = {
  food: string;
  price: string;
};
