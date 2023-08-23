import Style from './recommendByLocation.style';

const RecommendByLocation = () => {
  return (
    <Style.RecommendContainer>
      <div>
        <Style.FirstTextBox>
          <span>
            당신을 위한 <br />
          </span>
        </Style.FirstTextBox>
        <div>
          <Style.CurrentAreaText>서울 노원구 </Style.CurrentAreaText>
          <Style.SecondText>추천 카페</Style.SecondText>
        </div>
      </div>
      <Style.ButtonsBox>
        <Style.SelectAnotherAreaButton>
          다른 지역 선택
        </Style.SelectAnotherAreaButton>
        <Style.SelectCurrentAreaButton>
          현 위치로 설정
        </Style.SelectCurrentAreaButton>
      </Style.ButtonsBox>
    </Style.RecommendContainer>
  );
};

export default RecommendByLocation;
