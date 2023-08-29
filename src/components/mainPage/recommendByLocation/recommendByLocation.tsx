import { Dispatch, SetStateAction, useState } from 'react';
import { getCurrentLocation } from '../../../utils/shared/geoLocation';
import Style from './recommendByLocation.style';
import LoadingSpinner from '../../../utils/shared/loadingSpinner/loadingSpinner';
import { CafeShopType } from '../../../types/cafeShop';

const RecommendByLocation = ({
  shopList,
  handleSetShopList,
}: {
  shopList: CafeShopType[];
  handleSetShopList: (list: CafeShopType[]) => void;
}) => {
  console.log(shopList);
  const [currentRegion, setCurrentRegion] = useState('전체 지역');
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Style.RecommendContainer>
      <div>
        <Style.FirstTextBox>
          <span>
            당신을 위한 <br />
          </span>
        </Style.FirstTextBox>
        <div>
          <Style.CurrentAreaText>{currentRegion} </Style.CurrentAreaText>
          <Style.SecondText>추천 카페</Style.SecondText>
        </div>
      </div>
      <Style.ButtonsBox>
        <Style.SelectAnotherAreaButton>
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
            현 위치로 설정
          </Style.SelectCurrentAreaButton>
        )}
      </Style.ButtonsBox>
    </Style.RecommendContainer>
  );
};

export default RecommendByLocation;
