import Style from './cafeShopIntro.style';

const CafeShopIntro = () => {
  return (
    <Style.CafeInfoContainer>
      <div>
        <Style.CafeName>스타벅스 상봉점</Style.CafeName>
        <Style.CafeRate>4.9(1634)</Style.CafeRate>
      </div>
      <div>
        <span>찜 / </span>
        <span>공유</span>
      </div>
    </Style.CafeInfoContainer>
  );
};

export default CafeShopIntro;
