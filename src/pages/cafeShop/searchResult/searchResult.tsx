import { useEffect, useState } from 'react';
import { CafeShopType } from '../../../types/cafeShop';
import { searchByKeyword } from '../../../utils/shared/api/cafeShopApis';
import { useLocation, useParams } from 'react-router-dom';
import CafeShop from '../../../components/mainPage/cafeShop/cafeShop/cafeShop';

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
    <div>
      <span>{keyword} 검색 결과</span>
      <div>
        {searchedList.map((shop) => (
          <div key={shop.id}>
            <CafeShop shopInfos={shop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
