import { useEffect, useState } from 'react';
import { CafeShopType } from '../../../types/cafeShop';
import { searchByKeyword } from '../../../utils/shared/api/cafeShopApis';
import { useLocation, useParams } from 'react-router-dom';
import CafeShop from '../../../components/mainPage/cafeShop/cafeShop/cafeShop';
import Style from './searchResult.style';
import MyCreatedListLayout from '../../../components/layout/myCreatedListLayout/myCreatedListLayout';
import ExtendedCafeShopList from '../../../components/cafeShop/extended/extendedCafeShopList/extendedCafeShopList';

const SearchResult = () => {
  const { keyword } = useParams();

  const [searchedList, setSearchedList] = useState<CafeShopType[]>([]);

  useEffect(() => {
    if (keyword) {
      const fetchSearchedList = async (keyword: string) => {
        const list = await searchByKeyword(keyword);
        setSearchedList(list?.data);
      };
      fetchSearchedList(keyword);
    }
  }, [keyword]);
  return (
    <>
      <Style.TitleBox>
        <span>{keyword} 검색결과</span>
      </Style.TitleBox>
      <MyCreatedListLayout>
        <ExtendedCafeShopList myCreatedList={searchedList} />
      </MyCreatedListLayout>
    </>
  );
};

export default SearchResult;
