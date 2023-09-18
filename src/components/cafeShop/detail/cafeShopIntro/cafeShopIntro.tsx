import { Link } from 'react-router-dom';
import { routes } from '../../../../routes';
import Style from './cafeShopIntro.style';
import ShareToOthers from './shareToOthers/shareToOthers';
import { useState } from 'react';
import RateStars from '../../rateStars/rateStars';
import HeartIcon from '../../../../assets/images/heart.png';
import ShareIcon from '../../../../assets/images/share.png';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../../../../recoil/authAtoms';

const CafeShopIntro = ({
  introInfo,
}: {
  introInfo: {
    shopId: number;
    shopName: string;
    rate: number;
    participants: number;
    description: string;
    keywords: string[];
  };
}) => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const [isShareToOthersModal, setIsShareToOthersModal] = useState(false);
  const handleSwitchShareModel = () => {
    setIsShareToOthersModal((prev) => !prev);
  };
  return (
    <Style.CafeInfoContainer>
      {isShareToOthersModal && <ShareToOthers />}
      <div>
        <Style.CafeRateBox>
          <RateStars rate={introInfo?.rate} />
          <span>({introInfo?.participants})</span>
        </Style.CafeRateBox>
        <Style.CafeTitleContainer>
          <Style.CafeName>{introInfo?.shopName}</Style.CafeName>
          <div>
            <button onClick={handleSwitchShareModel}>
              <img src={ShareIcon} alt="share_icon" />
            </button>
          </div>
        </Style.CafeTitleContainer>
        <Style.CafeKeywords>
          {introInfo?.keywords?.map((keyword) => (
            <div key={keyword}>
              <span>#{keyword}&nbsp;</span>
            </div>
          ))}
        </Style.CafeKeywords>
        <div>
          <pre>{introInfo?.description}</pre>
        </div>
        <div>
          {isLoggedIn ? (
            <Link to={routes.writeReview} state={introInfo}>
              <Style.SubmitReviewButton>후기 작성</Style.SubmitReviewButton>
            </Link>
          ) : (
            <Style.GuideLoginPage>
              <span>로그인 후, 후기를 작성해보세요.</span>
            </Style.GuideLoginPage>
          )}
        </div>
      </div>
    </Style.CafeInfoContainer>
  );
};

export default CafeShopIntro;
