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
import SearchResult from './pages/cafeShop/searchResult/searchResult';
import SelectKeywordsPage from './pages/cafeShop/createPage/selectKeywordsPage/selectKeywordsPage';
import NotFound from './pages/notFound/notFound';
import CompletePage from './pages/cafeShop/createPage/completePage/completePage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.login} element={<Login />} />
          <Route
            path={routes.selectKeywords}
            element={<SelectKeywordsPage />}
          />
          <Route
            path={routes.cafeShopCreate}
            element={<CafeShopCreatePage />}
          />
          <Route path={routes.createComplete} element={<CompletePage />} />
          <Route
            path={routes.cafeShopDetail}
            element={<CafeShopDetailPage />}
          />
          <Route path={routes.writeReview} element={<SubmitReview />} />
          <Route path={routes.searchResult} element={<SearchResult />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
