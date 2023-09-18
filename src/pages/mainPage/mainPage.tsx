import { useEffect, useState } from 'react';
import CafeListLayout from '../../components/layout/cafeShop/cafeListLayout/cafeListLayout';
import CafeShopList from '../../components/mainPage/cafeShop/cafeShopList/cafeShopList';
import RecommendByLocation from '../../components/mainPage/recommendByLocation/recommendByLocation';
import { CafeShopType } from '../../types/cafeShop';
import { defaultInstance } from '../../utils/shared/api/axiosInstance';
import { useRecoilState } from 'recoil';
import { isLoggedInAtom, userInfoAtom } from '../../recoil/authAtoms';
import { UserInfoType } from '../../types/user';
import { KEYWORDS_LIST } from '../../utils/shared/datas';
import Style from './mainPage.style';

const MainPage = () => {
  const [shopList, setShopList] = useState<CafeShopType[]>([]);
  const [loginInfo, setLoginInfo] = useRecoilState<UserInfoType>(userInfoAtom);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const handleSetShopList = (list: CafeShopType[]) => {
    setShopList(list);
  };

  // 선택한 키워드 리스트
  const [currentKeywords, setCurrentKeywords] = useState<string[]>([]);

  // 위도 및 경도
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  // 위도 및 경도가 설정 되었는지 여부
  const [isLocationSelected, setIsLocationSelected] = useState(false);

  // 위도 및 경도 설정 여부 및 값 변경
  const handleChangeLocationSelected = (value: boolean) => {
    setIsLocationSelected(value);
  };

  const handleChangeCurrentKeywords = (keyword: string) => {
    if (keyword === '전체') {
      setCurrentKeywords([]);
      return;
    }
    if (currentKeywords.some((item) => item === keyword)) {
      setCurrentKeywords((prev) => prev.filter((item) => item !== keyword));
      return;
    }
    setCurrentKeywords((prev) => [...prev, keyword]);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const params = new URL(document.location.toString()).searchParams;
      const code = params.get('code');
      const postKakao = async () => {
        try {
          const kakaoInfo = await defaultInstance.post('user/kakaoLogin', {
            code,
          });
          setLoginInfo({
            userId: kakaoInfo.data.result.id,
            username: kakaoInfo.data.result.properties.nickname,
            profileImage: kakaoInfo.data.result.properties.profile_image,
            profileDescription: '',
          });
          setIsLoggedIn((prev: boolean) => !prev);
          localStorage.setItem('token', kakaoInfo.data.token);
        } catch (err) {
          console.log(err);
        }
      };
      if (code) postKakao();
    }
  }, []);

  console.log(isLocationSelected, currentLocation);
  return (
    <>
      <RecommendByLocation
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        shopList={shopList}
        handleSetShopList={handleSetShopList}
        handleChangeLocationSelected={handleChangeLocationSelected}
      />

      <Style.KeywordsListLayout>
        <Style.KeywordsBox>
          <Style.Keyword
            isClicked={currentKeywords.length === 0}
            onClick={() => handleChangeCurrentKeywords('전체')}
          >
            전체
          </Style.Keyword>
          {KEYWORDS_LIST.map((keyword) => (
            <Style.Keyword
              isClicked={currentKeywords.some((item) => item === keyword)}
              onClick={() => handleChangeCurrentKeywords(keyword)}
            >
              {keyword}
            </Style.Keyword>
          ))}
        </Style.KeywordsBox>
      </Style.KeywordsListLayout>

      <CafeListLayout>
        <CafeShopList
          currentKeywords={currentKeywords}
          isLocationSelected={isLocationSelected}
          currentLocation={currentLocation}
          shopList={shopList}
          handleSetShopList={handleSetShopList}
        />
      </CafeListLayout>
    </>
  );
};

export default MainPage;
