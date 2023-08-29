import Style from './cafeShopIntro.style';

const CafeShopIntro = ({
  introInfo,
}: {
  introInfo: { shopName: string; rate: number };
}) => {
  return (
    <Style.CafeInfoContainer>
      <div>
        <Style.CafeName>{introInfo?.shopName}</Style.CafeName>
        {introInfo?.rate ? (
          <Style.CafeRate>{introInfo?.rate}</Style.CafeRate>
        ) : (
          <span>평점이 없습니다!</span>
        )}
      </div>
      <div>
        <span>찜 / </span>
        <span>공유</span>
      </div>
    </Style.CafeInfoContainer>
  );
};

export default CafeShopIntro;
