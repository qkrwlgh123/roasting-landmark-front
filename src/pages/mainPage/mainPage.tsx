import { useEffect, useState } from 'react';
import CafeListLayout from '../../components/layout/cafeShop/cafeListLayout/cafeListLayout';
import CafeShopList from '../../components/mainPage/cafeShop/cafeShopList/cafeShopList';
import RecommendByLocation from '../../components/mainPage/recommendByLocation/recommendByLocation';
import { CafeShopType } from '../../types/cafeShop';
import { defaultInstance } from '../../utils/shared/api/axiosInstance';
import { useRecoilState } from 'recoil';
import { isLoggedInAtom, userInfoAtom } from '../../recoil/authAtoms';
import { UserInfoType } from '../../types/user';

const MainPage = () => {
  const [shopList, setShopList] = useState<CafeShopType[]>([]);
  const [loginInfo, setLoginInfo] = useRecoilState<UserInfoType>(userInfoAtom);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const handleSetShopList = (list: CafeShopType[]) => {
    setShopList(list);
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
  return (
    <>
      <RecommendByLocation
        shopList={shopList}
        handleSetShopList={handleSetShopList}
      />
      <CafeListLayout>
        <CafeShopList
          shopList={shopList}
          handleSetShopList={handleSetShopList}
        />
      </CafeListLayout>
    </>
  );
};

export default MainPage;
