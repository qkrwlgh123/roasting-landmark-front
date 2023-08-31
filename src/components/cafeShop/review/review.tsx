import { ReviewType } from '../../../types/review';
import Style from './review.style';

const Review = ({ reviewInfo }: { reviewInfo: ReviewType }) => {
  return (
    <Style.ReviewContainer>
      <Style.UserInfoBox>
        <Style.ProfileImageBox>
          <img src={reviewInfo.profileImage} alt="프로필사진" />
        </Style.ProfileImageBox>

        <span>{reviewInfo.username}</span>
      </Style.UserInfoBox>
      <Style.ContentBox>
        <div>{reviewInfo.content}</div>
      </Style.ContentBox>
      <div>
        <div>평점:{reviewInfo.rate}</div>
      </div>
    </Style.ReviewContainer>
  );
};

export default Review;
