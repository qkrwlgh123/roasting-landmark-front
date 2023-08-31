import { Link } from 'react-router-dom';
import { routes } from '../../../../routes';
import Style from './cafeShopIntro.style';

const CafeShopIntro = ({
  introInfo,
}: {
  introInfo: {
    shopId: number;
    shopName: string;
    rate: number;
    participants: number;
  };
}) => {
  return (
    <Style.CafeInfoContainer>
      <div>
        <div>
          <Style.CafeName>{introInfo?.shopName}</Style.CafeName>
          {introInfo?.rate ? (
            <Style.CafeRate>
              평점: {introInfo?.rate.toFixed(1)}({introInfo?.participants})
            </Style.CafeRate>
          ) : (
            <span>평점이 없습니다!</span>
          )}
        </div>
        <div>
          <Link to={routes.writeReview} state={introInfo}>
            <Style.SubmitReviewButton>후기 작성</Style.SubmitReviewButton>
          </Link>
        </div>
      </div>
      <div>
        <span>찜 / </span>
        <span>공유</span>
      </div>
    </Style.CafeInfoContainer>
  );
};

export default CafeShopIntro;
