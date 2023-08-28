export interface CafeShopType {
  id: number;
  shopName: string;
  desertType?: string;
  roadAddress?: string;
  parcelAddress?: string;
  telNumber?: string;
  priceRange?: string;
  parkingType?: string;
  openTime?: { days: string; time: string }[];
  breakTime?: string;
  holiday?: string;
  rate: number;
  images?: string[];
  latitude?: number;
  longitude?: number;
  webSite?: string;
  menu?: { food: string; price: number }[];
  reviews?: string[]; // 타입 고쳐야한다.
}

export type CafeShopImageType = string;
