import { useEffect } from 'react';
import Style from './cafeShopMap.style';
import { CafeShopType } from '../../../../../../types/cafeShop';
import CafeShopDetailInfosLayout from '../../cafeShopDetailInfosLayout/cafeShopDetailInfosLayout';
import {
  ContentBox,
  ParcelAddressBox,
} from '../../cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';

const { kakao } = window;

const CafeShopMap = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map');
    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(
        detailInfo?.latitude,
        detailInfo?.longitude
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치
    const markerPosition = new kakao.maps.LatLng(
      detailInfo?.latitude,
      detailInfo?.longitude
    );

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시
    marker.setMap(map);
  }, [detailInfo]);
  return (
    <CafeShopDetailInfosLayout>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <Style.AddressContainer>
        <ContentBox>
          <span>{detailInfo?.roadAddress}</span>
          <ParcelAddressBox>
            <div>
              <span>지번</span>
            </div>
            <span>{detailInfo?.parcelAddress}</span>
          </ParcelAddressBox>
        </ContentBox>
      </Style.AddressContainer>
    </CafeShopDetailInfosLayout>
  );
};

export default CafeShopMap;
