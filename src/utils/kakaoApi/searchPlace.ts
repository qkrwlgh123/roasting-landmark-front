import { SearchResultShopType } from '../../types/kakaoSearchResult';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export const searchPlaces = (
  keyword: string,
  handleSetPlacesState: (list: SearchResultShopType[]) => void
) => {
  const ps = new kakao.maps.services.Places();
  const searchOption = {
    size: 5,
    category_group_code: 'CE7',
  };
  ps.keywordSearch(keyword, placesSearchCB, searchOption);
  // 키워드 검색 완료 시 호출되는 콜백함수
  function placesSearchCB(data: SearchResultShopType[], status: string) {
    if (status === kakao.maps.services.Status.OK) {
      handleSetPlacesState(data);
    }
  }
};
