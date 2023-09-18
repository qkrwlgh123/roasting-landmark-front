import { useEffect, useState } from 'react';
import { getReviewList } from '../../../../../../utils/shared/api/reviewApis';
import { ReviewType } from '../../../../../../types/review';
import CafeShopReview from '../cafeShopReview/cafeShopReview';
import {
  DescriptionContainer,
  DescriptionSubjectBox,
} from '../../cafeShopDetailInfosLayout/cafeShopDetailInfosLayout.style';
import Style from './cafeShopReviewList.style';

const CafeShopReviewList = ({
  shopId,
  participants,
}: {
  shopId: number;
  participants: number;
}) => {
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
        <span>({participants})</span>
      </DescriptionContainer>
      {reviewList?.length > 0 ? (
        reviewList?.map((reviewInfo: ReviewType) => (
          <CafeShopReview key={reviewInfo.username} reviewInfo={reviewInfo} />
        ))
      ) : (
        <span>후기가 없습니다</span>
      )}
      {}
    </Style.ReviewListContainer>
  );
};

export default CafeShopReviewList;
