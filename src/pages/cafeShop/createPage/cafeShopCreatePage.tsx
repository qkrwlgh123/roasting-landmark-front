import { useEffect, useState } from 'react';
import { postCreateShop } from '../../../utils/shared/api/cafeShopApis';
import Style from './cafeShopCreatePage.style';
import { FieldValues, useForm } from 'react-hook-form';
import { searchPlaces } from '../../../utils/kakaoApi/searchPlace';
import { SearchResultShopType } from '../../../types/kakaoApiResult';

const CafeShopCreatePage = () => {
  const [searchedPlacesList, setSearchedPlacesList] = useState<
    SearchResultShopType[]
  >([]);

  const [isClickPlace, setIsClickPlace] = useState(false);

  const [selectedShopInfo, setSelectedShopInfo] =
    useState<SearchResultShopType>();

  const handleSetPlacesState = (list: SearchResultShopType[]) => {
    setSearchedPlacesList(list);
  };

  const handleClickShopname = (place: SearchResultShopType) => {
    setIsClickPlace(true);
    setSearchedPlacesList([]);
    setValue('shopName', place.place_name);
    setSelectedShopInfo(place);
  };
  const { register, watch, setValue, handleSubmit } = useForm();

  const changedShopName = watch().shopName;

  const onValid = (data: FieldValues) => {
    const postInfo = {
      ...data,
      images: undefined,
      latitude: Number(selectedShopInfo!.y),
      longitude: Number(selectedShopInfo!.x),
      roadAddress: selectedShopInfo!.road_address_name,
      parcelAddress: selectedShopInfo!.address_name,
      telNumber: selectedShopInfo!.phone,
    };
    const formData = new FormData();
    formData.append('image', data.images[0]); //files[0] === upload file
    formData.append('data', JSON.stringify(postInfo));
    postCreateShop(formData);
  };

  useEffect(() => {
    if (isClickPlace) return;
    if (changedShopName?.length === 0) setSearchedPlacesList([]);

    searchPlaces(changedShopName, handleSetPlacesState);
  }, [changedShopName]);

  return (
    <Style.FormContainer onSubmit={handleSubmit(onValid)}>
      <Style.FormInnerBox>
        <label htmlFor="shopName">카페명</label>
        <input
          id="shopName"
          type="text"
          placeholder="카페명"
          {...register('shopName')}
        />
        <div>
          {searchedPlacesList?.map((place: SearchResultShopType) => (
            <div key={place.id} onClick={() => handleClickShopname(place)}>
              <div>{place.place_name}</div>
              <div>{place.road_address_name}</div>
            </div>
          ))}
        </div>
        <label htmlFor="desertType">디저트 종류</label>
        <input
          id="desertType"
          type="text"
          placeholder="ex) 베이커리 / 파스타"
          {...register('desertType')}
        />
        <label htmlFor="priceRange">가격대</label>
        <input
          id="priceRange"
          type="text"
          placeholder="ex) 2만원 ~ 3만원"
          {...register('priceRange')}
        />
        <label htmlFor="parkingType">주차</label>
        <input
          id="parkingType"
          type="text"
          placeholder="ex) 주차공간없음 / 매장 내 주차 가능"
          {...register('parkingType')}
        />
        <label htmlFor="openTime">영업시간</label>
        <input
          id="openTime"
          type="text"
          placeholder="ex) 10:00 - 22:00"
          {...register('openTime')}
        />
        <label htmlFor="breakTime">브레이크 타임</label>
        <input
          id="breakTime"
          type="text"
          placeholder="ex) 13:00 - 14:00"
          {...register('breakTime')}
        />
        <label htmlFor="holiday">휴일</label>
        <input
          id="holiday"
          type="text"
          placeholder="ex) 월"
          {...register('holiday')}
        />
        <label htmlFor="images">사진</label>
        <input
          id="image"
          type="file"
          multiple
          placeholder="사진"
          {...register('images')}
        />
        <label htmlFor="menu">메뉴</label>
        <input
          id="menu"
          type="text"
          placeholder="웹 사이트"
          {...register('menu')}
        />
        <label htmlFor="website">웹 사이트</label>
        <input
          id="website"
          type="text"
          placeholder="웹 사이트"
          {...register('website')}
        />
        <button type="submit">카페 정보 등록</button>
      </Style.FormInnerBox>
    </Style.FormContainer>
  );
};

export default CafeShopCreatePage;
