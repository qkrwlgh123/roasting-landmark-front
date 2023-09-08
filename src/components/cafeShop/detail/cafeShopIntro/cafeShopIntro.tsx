import { Link } from 'react-router-dom';
import { routes } from '../../../../routes';
import Style from './cafeShopIntro.style';
import ShareToOthers from './shareToOthers/shareToOthers';
import { useState } from 'react';

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
  const [isShareToOthersModal, setIsShareToOthersModal] = useState(false);
  const handleSwitchShareModel = () => {
    setIsShareToOthersModal((prev) => !prev);
  };
  return (
    <Style.CafeInfoContainer>
      {isShareToOthersModal && <ShareToOthers />}

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
        <button>
          <span>찜 버튼</span>
        </button>
        <button onClick={handleSwitchShareModel}>
          <span>공유 버튼</span>
        </button>
      </div>
    </Style.CafeInfoContainer>
  );
};

export default CafeShopIntro;
