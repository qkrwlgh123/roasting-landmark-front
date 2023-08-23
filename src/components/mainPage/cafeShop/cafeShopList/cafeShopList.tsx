import CafeShop from '../cafeShop/cafeShop';
import Style from './cafeShopList.style';

const DUMMY_DATAS = [
  { id: 1, name: '테스트1', rate: 4.5 },
  { id: 2, name: '테스트2', rate: 4.2 },
  { id: 3, name: '테스트3', rate: 4.1 },
  { id: 4, name: '테스트4', rate: 3.9 },
];

const CafeShopList = () => {
  return (
    <Style.ListBox>
      {DUMMY_DATAS.map((shop) => (
        <CafeShop shopInfos={shop} />
      ))}
    </Style.ListBox>
  );
};

export default CafeShopList;
