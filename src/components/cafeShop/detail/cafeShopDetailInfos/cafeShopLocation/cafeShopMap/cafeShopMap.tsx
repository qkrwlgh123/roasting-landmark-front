import { useEffect, useState } from 'react';
import Style from './cafeShopMap.style';
import { CafeShopType } from '../../../../../../types/cafeShop';
import CafeShopDetailInfosLayout from '../../cafeShopDetailInfosLayout/cafeShopDetailInfosLayout';
import {
  ContentBox,
  ParcelAddressBox,
  RoadAddressText,
} from '../../cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';
import EnlargedMap from './enlargedMap/enlargedMap';
import LocationIcon from '../../../../../../assets/images/location.png';

const { kakao } = window;

const CafeShopMap = ({ detailInfo }: { detailInfo: CafeShopType }) => {
  const [isClickMap, setIsClickMap] = useState(false);

  const handleClickMap = () => {
    setIsClickMap((prev) => !prev);
  };

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
      draggable: false,
    };
    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    // 마커 이미지 생성
    const imageSrc = LocationIcon,
      imageSize = new kakao.maps.Size(54, 59),
      imageOption = { offset: new kakao.maps.Point(26, 61) };

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    // 마커가 표시될 위치
    const markerPosition = new kakao.maps.LatLng(
      detailInfo?.latitude,
      detailInfo?.longitude
    );

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    // 마커가 지도 위에 표시
    marker.setMap(map);
  }, [detailInfo]);

  return (
    <>
      {isClickMap && (
        <EnlargedMap detailInfo={detailInfo} handleClickMap={handleClickMap} />
      )}
      <CafeShopDetailInfosLayout>
        <div
          id="map"
          style={{ width: '100%', height: '300px', cursor: 'pointer' }}
          onClick={handleClickMap}
        ></div>
        <Style.AddressContainer>
          <ContentBox>
            <RoadAddressText>{detailInfo?.roadAddress}</RoadAddressText>
            <ParcelAddressBox>
              <div>
                <span>지번</span>
              </div>
              <span>{detailInfo?.parcelAddress}</span>
            </ParcelAddressBox>
          </ContentBox>
        </Style.AddressContainer>
      </CafeShopDetailInfosLayout>
    </>
  );
};

export default CafeShopMap;
