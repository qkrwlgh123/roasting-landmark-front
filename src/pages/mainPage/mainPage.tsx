import CafeListLayout from '../../components/layout/cafeListLayout/cafeListLayout';
import CafeShopList from '../../components/mainPage/cafeShop/cafeShopList/cafeShopList';
import RecommendByLocation from '../../components/mainPage/recommendByLocation/recommendByLocation';

const MainPage = () => {
  return (
    <>
      <RecommendByLocation />
      <CafeListLayout>
        <CafeShopList />
      </CafeListLayout>
    </>
  );
};

export default MainPage;
