import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import MainPage from './pages/mainPage/mainPage';
import GlobalStyles from './styles/globalStyles';
import MainLayout from './components/layout/mainLayout/mainLayout';
import CafeShopDetailPage from './pages/cafeShop/detailPage/cafeShopDetailPage';
import CafeShopCreatePage from './pages/cafeShop/createPage/cafeShopCreatePage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route
            path={routes.cafeShopDetail}
            element={<CafeShopDetailPage />}
          />
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
