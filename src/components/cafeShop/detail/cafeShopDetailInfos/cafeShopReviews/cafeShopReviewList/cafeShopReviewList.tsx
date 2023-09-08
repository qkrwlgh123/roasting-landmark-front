import { useEffect, useState } from 'react';
import { getReviewList } from '../../../../../../utils/shared/api/reviewApis';
import { ReviewType } from '../../../../../../types/review';
import CafeShopReview from '../cafeShopReview/cafeShopReview';

const CafeShopReviewList = ({ shopId }: { shopId: number }) => {
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);

  useEffect(() => {
    const fetchReviewList = async () => {
      const resultData = await getReviewList(shopId);
      setReviewList(resultData?.data);
    };
    fetchReviewList();
  }, []);

  return (
    <div>
      {reviewList?.length > 0 ? (
        reviewList?.map((reviewInfo: ReviewType) => (
          <CafeShopReview key={reviewInfo.username} reviewInfo={reviewInfo} />
        ))
      ) : (
        <span>후기가 없습니다</span>
      )}
      {}
    </div>
  );
};

export default CafeShopReviewList;
