import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCurrentLocation } from '../../../utils/shared/api/geoLocation';
import Style from './recommendByLocation.style';
import LoadingSpinner from '../../../utils/shared/loadingSpinner/loadingSpinner';
import { CafeShopType } from '../../../types/cafeShop';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../recoil/authAtoms';
import AnotherAreaIcon from '../../../assets/images/btn_another_area_bottom2.png';
import CurrentLocationIcon from '../../../assets/images/btn_current_location_bottom2.png';
import SearchByAddress from '../searchByAddress/searchByAddress';

const RecommendByLocation = ({
  currentLocation,
  setCurrentLocation,
  shopList,
  handleSetShopList,
  handleChangeLocationSelected,
}: {
  currentLocation: { latitude: number; longitude: number };
  setCurrentLocation: Dispatch<
    SetStateAction<{ latitude: number; longitude: number }>
  >;
  shopList: CafeShopType[];
  handleSetShopList: (list: CafeShopType[]) => void;
  handleChangeLocationSelected: (value: boolean) => void;
}) => {
  const { username } = useRecoilValue(userInfoAtom);

  const [isSearchingAddress, setIsSearchingAddress] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // 현재 지역 명
  const [currentRegion, setCurrentRegion] = useState('전체 지역');

  const handleChangeSearchingState = () => {
    setIsSearchingAddress((prev) => !prev);
  };

  const handleGetCurrentGegion = (region: string) => {
    setCurrentRegion(region);
  };

  const handleGetCurrentLocation = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setCurrentLocation({ latitude, longitude });
  };

  const handleChangleLoadingState = () => {
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    if (currentLocation.latitude !== 0 || currentLocation.longitude !== 0) {
      handleChangeLocationSelected(true);
    } else {
      handleChangeLocationSelected(false);
    }
  }, [currentLocation]);
  return (
    <>
      {isSearchingAddress && (
        <SearchByAddress
          handleGetCurrentLocation={handleGetCurrentLocation}
          handleGetCurrentGegion={handleGetCurrentGegion}
          handleChangeSearchingState={handleChangeSearchingState}
        />
      )}
      <Style.RecommendContainer>
        <div>
          <Style.FirstTextBox>
            {username ? (
              <span>
                {username}님을 위한 <br />
              </span>
            ) : (
              <span>
                당신을 위한 <br />
              </span>
            )}
          </Style.FirstTextBox>
          <div>
            <Style.CurrentAreaText>{currentRegion} </Style.CurrentAreaText>
            <Style.SecondText>추천 카페</Style.SecondText>
          </div>
        </div>
        <Style.ButtonsBox>
          <Style.SelectAnotherAreaButton onClick={handleChangeSearchingState}>
            <Style.IconBox>
              <img src={AnotherAreaIcon} alt="다른지역선택_아이콘" />
            </Style.IconBox>
            다른 지역 선택
          </Style.SelectAnotherAreaButton>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Style.SelectCurrentAreaButton
              onClick={() =>
                getCurrentLocation(
                  handleGetCurrentGegion,
                  handleGetCurrentLocation,
                  handleSetShopList,
                  handleChangleLoadingState
                )
              }
            >
              <Style.IconBox>
                <img src={CurrentLocationIcon} alt="현위치선택_아이콘" />
              </Style.IconBox>
              현 위치로 설정
            </Style.SelectCurrentAreaButton>
          )}
        </Style.ButtonsBox>
      </Style.RecommendContainer>
    </>
  );
};

export default RecommendByLocation;
