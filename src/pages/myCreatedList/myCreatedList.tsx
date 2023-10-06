import { useEffect, useState } from 'react';
import MyCreatedListLayout from '../../components/layout/myCreatedListLayout/myCreatedListLayout';
import { getMyShops } from '../../utils/shared/api/cafeShopApis';
import { CafeShopType } from '../../types/cafeShop';
import ExtendedCafeShopList from '../../components/cafeShop/extended/extendedCafeShopList/extendedCafeShopList';
import Style from './myCreatedList.style';
import { useNavigate } from 'react-router-dom';

const MyCreatedList = () => {
  const navigate = useNavigate();
  const [myCreatedList, setMyCreatedList] = useState<CafeShopType[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const resData = await getMyShops();
      if (resData?.response?.status === 401) {
        navigate('/404');
        return null;
      }
      if (resData) setMyCreatedList(resData);
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
