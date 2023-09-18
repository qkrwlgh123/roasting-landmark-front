import { useEffect, useState } from 'react';
import { postCreateShop } from '../../../utils/shared/api/cafeShopApis';
import Style from './cafeShopCreatePage.style';
import { FieldValues, useForm } from 'react-hook-form';
import { searchPlaces } from '../../../utils/kakaoApi/searchPlace';
import { SearchResultShopType } from '../../../types/kakaoApiResult';
import { CafeShopMenuType } from '../../../types/cafeShop';
import PlusIcon from '../../../assets/images/plus_icon.png';
import MenuInputIcon from '../../../assets/images/input_icon.png';
import CheckBox from '../../../components/cafeShop/create/checkBox/checkBox';
import { useLocation, useNavigate } from 'react-router-dom';
import StepProgress from '../../../components/cafeShop/create/stepProgress/stepProgress';
import Menu from '../../../components/cafeShop/menu/menu/menu';
import MenuList from '../../../components/cafeShop/menu/menuList/menuList';
import { routes } from '../../../routes';

const WEEK_DAY_LIST = [
  { order: 1, day: '월' },
  { order: 2, day: '화' },
  { order: 3, day: '수' },
  { order: 4, day: '목' },
  { order: 5, day: '금' },
  { order: 6, day: '토' },
  { order: 7, day: '일' },
];

const CafeShopCreatePage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  // 키워드 페이지에서 받아온 키워드 리스트
  const keywordList = location.state;

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

  // 휴일 목록
  const [holidayList, setHolidayList] = useState<
    { day: string; order: number }[]
  >([]);

  console.log(keywordList);
  const handleChangeHolidayList = (e: React.ChangeEvent<HTMLInputElement>) => {
    let dayList = [...holidayList];
    if (e.target.checked) {
      const inputedDayIndex = WEEK_DAY_LIST.findIndex(
        (dayObject) => dayObject.day === e.target.value
      );
      const dayObject = WEEK_DAY_LIST[inputedDayIndex];
      dayList.push(dayObject);
      dayList.sort((prev, after) => prev.order - after.order);
      setHolidayList(dayList);
    } else {
      setHolidayList((prev) =>
        prev.filter((dayObject) => dayObject.day !== e.target.value)
      );
    }
  };

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
    if (currentTypingMenu?.food === '' || currentTypingMenu?.price === '') {
      return;
    }
    if (menuList.some((item) => item.food === currentTypingMenu.food)) {
      alert('이미 존재하는 메뉴입니다.');
      return;
    }
    setMenuList((prev: CafeShopMenuType[]) => [...prev, currentTypingMenu]);
    setCurrentTypingMenu({ food: '', price: '' });
  };

  // 메뉴 삭제 함수
  const handleDeleteMenu = (menu: string) => {
    setMenuList((prev) => prev.filter((item) => item.food !== menu));
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

  const handleDeleteImage = (index: number) => {
    setUploadImagesList((prev) => prev.filter((_, idx) => idx !== index));
    setPrevImagesList((prev) => prev.filter((_, idx) => idx !== index));
  };

  const onValid = async (data: FieldValues) => {
    if (!selectedShopInfo?.place_name) {
      alert('등록할 카페를 선택해주세요.');
      return;
    }
    if (uploadImagesList.length === 0) {
      alert('사진을 한 장 이상 등록해주세요.');
      return;
    }
    if (menuList.length === 0) {
      alert('메뉴를 한 가지 이상 등록해주세요.');
      return;
    }
    const postInfo = {
      ...data,
      keywords: JSON.stringify(keywordList),
      holiday: holidayList.map((dayObject) => dayObject.day).join(', '),
      shopName: selectedShopInfo?.place_name,
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
    const shopId = await postCreateShop(formData);
    navigate(routes.createComplete, { state: shopId });
  };

  useEffect(() => {
    setSelectedShopInfo({});
    if (changedShopName === '' || !changedShopName) {
      setSearchedPlacesList([]);
      return;
    }

    searchPlaces(changedShopName, handleSetPlacesState);
  }, [changedShopName]);

  // 키워드 선택하지 않았을 경우 404 리다이렉트
  if (!keywordList) {
    navigate('/404');
    return null;
  }

  return (
    <>
      <StepProgress step={2} />
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
            <Style.SelectedShopNameBox>
              <span>설정된 카페 : {selectedShopInfo?.place_name}</span>
            </Style.SelectedShopNameBox>
          ) : (
            searchedPlacesList.length > 0 && (
              <Style.AutoCompletedWordsContainer>
                {searchedPlacesList?.map((place: SearchResultShopType) => (
                  <Style.AutoCompletedWordBox
                    key={place.id}
                    onClick={() => handleClickShopname(place)}
                  >
                    <span>{place.place_name}</span>
                    <span>{place.road_address_name}</span>
                  </Style.AutoCompletedWordBox>
                ))}
              </Style.AutoCompletedWordsContainer>
            )
          )}

          <label htmlFor="description">카페 소개</label>
          <textarea
            id="description"
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

          <Style.HolidayCheckboxsContainer>
            {WEEK_DAY_LIST.map((dayObject) => (
              <Style.HolidayCheckbox key={dayObject.order}>
                <CheckBox
                  isChecked={holidayList.some(
                    (day) => day.day === dayObject.day
                  )}
                  dayObject={dayObject}
                  handleChangeHolidayList={handleChangeHolidayList}
                />
              </Style.HolidayCheckbox>
            ))}
          </Style.HolidayCheckboxsContainer>
          <Style.ImagesTitleBox>
            <span>사진 등록</span>
            <span>※사진을 클릭하면 목록에서 삭제됩니다.</span>
          </Style.ImagesTitleBox>
          <Style.ImageGuideTitle>
            <span>사진은 5장까지 등록가능합니다.</span>

            {prevImagesList.length < 5 && (
              <label htmlFor="addImg">첨부하기</label>
            )}
          </Style.ImageGuideTitle>
          <Style.ImageInput
            type="file"
            onChange={handleInputImage}
            multiple
            id="addImg"
          />
          <Style.PrevImagesContainer>
            {prevImagesList.map((img: string, index: number) => (
              <Style.PrevImageBox
                key={index}
                onClick={() => handleDeleteImage(index)}
              >
                <img src={img} alt="미리보기 이미지" />
              </Style.PrevImageBox>
            ))}
            {prevImagesList.length < 5 && (
              <Style.ImageInputLabel htmlFor="addImg">
                <img src={PlusIcon} alt="사진추가_아이콘" />
              </Style.ImageInputLabel>
            )}
          </Style.PrevImagesContainer>
          <Style.MenuContainer>
            <Style.MenuTitlesBox>
              <span>메뉴</span>
              <span>※메뉴 입력후 우측에 + 버튼을 클릭하세요.</span>
            </Style.MenuTitlesBox>
            <Style.MenuInputContainer>
              <input
                type="text"
                value={currentTypingMenu?.food}
                onChange={handleTypingFood}
                placeholder="상품"
              />
              <input
                type="number"
                value={currentTypingMenu?.price}
                onChange={handleTypingPrice}
                placeholder="가격"
              />
              <button type="button" onClick={handleClickAddMenu}>
                <img src={MenuInputIcon} alt="메뉴추가_아이콘" />
              </button>
            </Style.MenuInputContainer>
            <div>
              <MenuList
                menuList={menuList}
                handleDeleteMenu={handleDeleteMenu}
              />
            </div>
          </Style.MenuContainer>

          <label htmlFor="website">웹 사이트</label>
          <input
            id="website"
            type="text"
            placeholder="웹 사이트"
            {...register('website')}
          />
          <Style.SubmitButtonContainer>
            <Style.SubmitButton type="submit">
              카페 정보 등록
            </Style.SubmitButton>
          </Style.SubmitButtonContainer>
        </Style.FormInnerBox>
      </Style.FormContainer>
    </>
  );
};

export default CafeShopCreatePage;
