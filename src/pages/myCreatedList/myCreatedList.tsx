import { useEffect, useState } from 'react';
import MyCreatedListLayout from '../../components/layout/myCreatedListLayout/myCreatedListLayout';
import { getMyShops } from '../../utils/shared/api/cafeShopApis';
import { CafeShopType } from '../../types/cafeShop';
import ExtendedCafeShopList from '../../components/cafeShop/extended/extendedCafeShopList/extendedCafeShopList';
import Style from './myCreatedList.style';

const MyCreatedList = () => {
  const [myCreatedList, setMyCreatedList] = useState<CafeShopType[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getMyShops();
      setMyCreatedList(list);
    };
    fetchList();
  }, []);

  return (
    <>
      <Style.TitleBox>
        <span>등록한 카페</span>
      </Style.TitleBox>
      <MyCreatedListLayout>
        <ExtendedCafeShopList myCreatedList={myCreatedList} />
      </MyCreatedListLayout>
    </>
  );
};

export default MyCreatedList;
