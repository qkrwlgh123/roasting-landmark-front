import { useEffect, useState } from 'react';
import { postCreateShop } from '../../../utils/shared/api/cafeShopApis';
import Style from './cafeShopCreatePage.style';
import { FieldValues, useForm } from 'react-hook-form';
import { searchPlaces } from '../../../utils/kakaoApi/searchPlace';
import { SearchResultShopType } from '../../../types/kakaoApiResult';
import { CafeShopMenuType } from '../../../types/cafeShop';

const CafeShopCreatePage = () => {
  const [searchedPlacesList, setSearchedPlacesList] = useState<
    SearchResultShopType[]
  >([]);

  const [selectedShopInfo, setSelectedShopInfo] =
    useState<SearchResultShopType>();

  const handleSetPlacesState = (list: SearchResultShopType[]) => {
    setSearchedPlacesList(list);
  };

  const handleClickShopname = (place: SearchResultShopType) => {
    setSearchedPlacesList([]);

    setSelectedShopInfo(place);
  };

  const { register, watch, setValue, handleSubmit } = useForm();

  const changedShopName = watch().shopName;

  // 현재 입력중인 상품, 가격
  const [currentTypingMenu, setCurrentTypingMenu] = useState({
    food: '',
    price: '',
  });

  // 상품 입력값 반영하는 함수
  const handleTypingFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTypingMenu((prev) => ({ ...prev, food: e.target.value }));
  };

  // 가격 입력값 반영하는 함수
  const handleTypingPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTypingMenu((prev) => ({ ...prev, price: e.target.value }));
  };

  // 입력완료된 메뉴 리스트
  const [menuList, setMenuList] = useState<CafeShopMenuType[]>([]);

  // 입력 완료 버튼 누르면 발동하는 함수
  const handleClickAddMenu = () => {
    setMenuList((prev: CafeShopMenuType[]) => [...prev, currentTypingMenu]);
    setCurrentTypingMenu({ food: '', price: '' });
  };

  // 사진 업로드 리스트
  const [uploadImagesList, setUploadImagesList] = useState<File[]>([]);

  // 사진 미리보기 리스트
  const [prevImagesList, setPrevImagesList] = useState<string[]>([]);

  // 사진 입력 변경 감지 함수
  const handleInputImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    let currentPrevList = [...prevImagesList];
    let currentUploadList = [...uploadImagesList];

    for (const file of files!) {
      const currentUrl = URL.createObjectURL(file);
      currentPrevList.push(currentUrl);
      currentUploadList.push(file);
    }

    // 목록에 5장 이상 존재할경우 처음부터 5장까지 자르기
    if (currentPrevList.length > 5) {
      currentPrevList = currentPrevList.slice(0, 5);
      currentUploadList = currentUploadList.slice(0, 5);
    }

    setPrevImagesList(currentPrevList);
    setUploadImagesList(currentUploadList);
  };

  const onValid = (data: FieldValues) => {
    const postInfo = {
      ...data,
      menu: JSON.stringify(menuList),
      latitude: Number(selectedShopInfo!.y),
      longitude: Number(selectedShopInfo!.x),
      roadAddress: selectedShopInfo!.road_address_name,
      parcelAddress: selectedShopInfo!.address_name,
      telNumber: selectedShopInfo!.phone,
    };
    const formData = new FormData();
    uploadImagesList.forEach((image: File) => {
      formData.append('image', image);
    });
    formData.append('data', JSON.stringify(postInfo));
    postCreateShop(formData);
  };

  useEffect(() => {
    setSelectedShopInfo({});
    if (changedShopName === '' || !changedShopName) {
      setSearchedPlacesList([]);
      return;
    }

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
        {selectedShopInfo?.place_name ? (
          <div>설정된 카페 : {selectedShopInfo?.place_name}</div>
        ) : (
          <div>
            {searchedPlacesList?.map((place: SearchResultShopType) => (
              <div key={place.id} onClick={() => handleClickShopname(place)}>
                <div>{place.place_name}</div>
                <div>{place.road_address_name}</div>
              </div>
            ))}
          </div>
        )}

        <label htmlFor="description">카페 소개</label>
        <input
          id="description"
          type="text"
          placeholder="ex) 저희 카페는 ~에 위치한 ~한 카페입니다."
          {...register('description')}
        />
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
        <div>사진 등록</div>
        <span>사진은 5장까지 등록가능합니다.</span>
        <Style.ImageInputLabel htmlFor="addImg">+</Style.ImageInputLabel>
        <Style.ImageInput
          type="file"
          onChange={handleInputImage}
          multiple
          id="addImg"
        />
        <Style.PrevImagesContainer>
          {prevImagesList.map((img: string, index: number) => (
            <Style.PrevImageBox key={index}>
              <img src={img} alt="미리보기 이미지" />
            </Style.PrevImageBox>
          ))}
        </Style.PrevImagesContainer>
        <div>
          <span>메뉴</span>
          <button type="button" onClick={handleClickAddMenu}></button>

          <div>
            <span>상품</span>
            <input
              type="text"
              value={currentTypingMenu?.food}
              onChange={handleTypingFood}
            />
            <span>가격</span>
            <input
              type="number"
              value={currentTypingMenu?.price}
              onChange={handleTypingPrice}
            />
            <button type="button" onClick={handleClickAddMenu}>
              입력 완료
            </button>
          </div>
          <div>
            <span>입력된 메뉴</span>
            {menuList?.map((menu: CafeShopMenuType) => (
              <div>
                <span>{menu.food} - </span>
                <span>
                  {menu.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </span>
              </div>
            ))}
          </div>
        </div>

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
