import { useEffect, useState } from 'react';
import Style from './searchByAddress.style';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../../../pages/cafeShop/createPage/cafeShopCreatePage.style';
import { getCurrentRegion } from '../../../utils/shared/api/geoLocation';
import CloseIcon from '../../../assets/images/close_icon.png';

const { kakao } = window;

const SearchByAddress = ({
  handleGetCurrentLocation,
  handleGetCurrentGegion,
  handleChangeSearchingState,
}: {
  handleGetCurrentLocation: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void;
  handleGetCurrentGegion: (region: string) => void;
  handleChangeSearchingState: () => void;
}) => {
  const [searchAddressKeyword, setSearchAddressKeyword] = useState('');

  const [searchedLocation, setSearchedLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 37.514575, longitude: 127.0495556 });

  const [clickedLocation, setClickedLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const [searchedAddressesList, setSearchedAddressesList] = useState<any>([]);

  const handleChangeSearchKeyword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchAddressKeyword(e.target.value);
  };

  // 입력한 주소 검색어로 검색 시작
  const handleStartSearchByKeyword = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (result: any, status: string) => {
      if (status === kakao.maps.services.Status.OK) {
        setSearchedAddressesList(result);
      }
    };
    geocoder.addressSearch(searchAddressKeyword, callback);
  };

  const handleClickAddressName = (latitude: string, longitude: string) => {
    setSearchedLocation({
      latitude: Number(latitude),
      longitude: Number(longitude),
    });
    setSearchedAddressesList([]);
  };

  const handleClickSubmit = () => {
    // 마커로 표시한 위도, 경도, 행정 동 이름 저장
    if (
      (clickedLocation?.latitude && clickedLocation?.longitude) ||
      (searchedLocation.latitude && searchedLocation.longitude)
    ) {
      const { latitude, longitude } = clickedLocation || searchedLocation;
      handleGetCurrentLocation({ latitude, longitude });
      getCurrentRegion({ latitude, longitude }, handleGetCurrentGegion);
      handleChangeSearchingState();
    }
  };

  useEffect(() => {
    if (searchAddressKeyword === '') setSearchedAddressesList([]);
    handleStartSearchByKeyword();
  }, [searchAddressKeyword]);

  // 지도 렌더링 및 마커 표시
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map');
    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(
        searchedLocation?.latitude,
        searchedLocation?.longitude
      ), //지도의 중심좌표.),
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치
    const markerPosition = new kakao.maps.LatLng(
      searchedLocation?.latitude,
      searchedLocation?.longitude
    );

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시
    marker.setMap(map); // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', (mouseEvent: any) => {
      // 클릭한 위도, 경도 정보를 가져옵니다
      const latlng = mouseEvent.latLng;
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      setClickedLocation({
        latitude: latlng.getLat(),
        longitude: latlng.getLng(),
      });
    });
  }, [searchedLocation]);

  return (
    <Style.ModalBackground>
      <Style.SearchAddressContainer>
        <Style.CloseIconBox onClick={handleChangeSearchingState}>
          <img src={CloseIcon} alt="close_icon" />
        </Style.CloseIconBox>
        <Style.AddressInputBox>
          <Style.AddressInput
            type="text"
            placeholder="주소를 입력하세요."
            value={searchAddressKeyword}
            onChange={handleChangeSearchKeyword}
          />
        </Style.AddressInputBox>
        {searchedAddressesList.length > 0 && (
          <Style.AutoCompletedWordsContainer>
            {searchedAddressesList.map((address: any) => (
              <Style.AutoCompletedWordBox
                key={address.address_name}
                onClick={() => handleClickAddressName(address.y, address.x)}
              >
                <span>{address.address_name}</span>
              </Style.AutoCompletedWordBox>
            ))}
          </Style.AutoCompletedWordsContainer>
        )}
        <Style.GuideTitleBox>
          <span>※지도를 드래그하거나 클릭하여 위치를 설정하세요.</span>
        </Style.GuideTitleBox>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
        <Style.SubmitButtonBox>
          <SubmitButtonContainer onClick={handleClickSubmit}>
            <SubmitButton>선택한 위치로 설정</SubmitButton>
          </SubmitButtonContainer>
        </Style.SubmitButtonBox>
      </Style.SearchAddressContainer>
    </Style.ModalBackground>
  );
};

export default SearchByAddress;
