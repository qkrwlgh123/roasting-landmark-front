import { useEffect, useState } from 'react';
import { getReviewList } from '../../../../../../utils/shared/api/reviewApis';
import { ReviewType } from '../../../../../../types/review';
import CafeShopReview from '../cafeShopReview/cafeShopReview';
import {
  DescriptionContainer,
  DescriptionSubjectBox,
} from '../../cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';
import Style from './cafeShopReviewList.style';
import { Link } from 'react-router-dom';
import { routes } from '../../../../../../routes';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../../../../../../recoil/authAtoms';
import { CafeShopType } from '../../../../../../types/cafeShop';

const CafeShopReviewList = ({
  shopId,
  detailInfo,
  participants,
  isCreator,
}: {
  shopId: number;
  detailInfo: CafeShopType;
  participants: number;
  isCreator: boolean;
}) => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const [reviewList, setReviewList] = useState<ReviewType[]>([]);

  useEffect(() => {
    const fetchReviewList = async () => {
      const resultData = await getReviewList(shopId);
      setReviewList(resultData?.data);
    };
    fetchReviewList();
  }, []);

  return (
    <Style.ReviewListContainer>
      <DescriptionContainer>
        <DescriptionSubjectBox>방문 후기&nbsp;</DescriptionSubjectBox>
        <Style.ParticipantsText>({participants})</Style.ParticipantsText>
      </DescriptionContainer>
      <Style.WriteReviewButtonBox>
        {isLoggedIn ? (
          <Link to={routes.writeReview} state={detailInfo}>
            <Style.SubmitReviewButton>후기 작성</Style.SubmitReviewButton>
          </Link>
        ) : (
          <Style.GuideLoginPage>
            <span>로그인 후, 후기를 작성해보세요.</span>
          </Style.GuideLoginPage>
        )}
      </Style.WriteReviewButtonBox>
      {reviewList?.length > 0 ? (
        reviewList?.map((reviewInfo: ReviewType) => (
          <CafeShopReview
            key={reviewInfo.id}
            reviewInfo={reviewInfo}
            isCreator={isCreator}
          />
        ))
      ) : (
        <Style.NoReviewText>등록된 후기가 없습니다</Style.NoReviewText>
      )}
      {}
    </Style.ReviewListContainer>
  );
};

export default CafeShopReviewList;
