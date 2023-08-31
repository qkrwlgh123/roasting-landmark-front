import { useEffect, useState } from 'react';
import { getReviewList } from '../../../../../../utils/shared/api/reviewApis';
import Review from '../../../../review/review';
import { ReviewType } from '../../../../../../types/review';

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
          <Review key={reviewInfo.username} reviewInfo={reviewInfo} />
        ))
      ) : (
        <span>후기가 없습니다</span>
      )}
      {}
    </div>
  );
};

export default CafeShopReviewList;
