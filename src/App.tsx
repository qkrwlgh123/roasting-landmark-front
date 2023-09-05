import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import MainPage from './pages/mainPage/mainPage';
import GlobalStyles from './styles/globalStyles';
import MainLayout from './components/layout/mainLayout/mainLayout';
import CafeShopDetailPage from './pages/cafeShop/detailPage/cafeShopDetailPage';
import CafeShopCreatePage from './pages/cafeShop/createPage/cafeShopCreatePage';
import SignUp from './pages/auth/signUp/signUp';
import Login from './pages/auth/login/login';
import { useEffect } from 'react';
import { handleValidateToken } from './utils/shared/api/authAPis';
import { useRecoilState } from 'recoil';
import { isLoggedInAtom, userInfoAtom } from './recoil/authAtoms';
import { UserInfoType } from './types/user';
import SubmitReview from './pages/cafeShop/review/submitReview/submitReview';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [userInfo, setUserInfo] = useRecoilState<UserInfoType>(userInfoAtom);

  // 토큰 변조 방지를 위한 유효성 검사
  // useEffect(() => {
  //   const handleRetrieveUserInfo = async () => {
  //     const token = localStorage.getItem('token');
  //     if (token && isLoggedIn) {
  //       const isValidate = await handleValidateToken();

  //       if (!isValidate) {
  //         alert('유효하지 않은 접근입니다.');
  //         localStorage.removeItem('token');
  //         setIsLoggedIn(false);
  //         setUserInfo({
  //           userId: null,
  //           username: '',
  //           profileImage: '',
  //           profileDescription: '',
  //         });
  //       }
  //     }
  //   };
  //   handleRetrieveUserInfo();
  // }, []);
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.login} element={<Login />} />
          <Route
            path={routes.cafeShopDetail}
            element={<CafeShopDetailPage />}
          />
          <Route path={routes.writeReview} element={<SubmitReview />} />
          <Route
            path={routes.cafeShopCreate}
            element={<CafeShopCreatePage />}
          />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
