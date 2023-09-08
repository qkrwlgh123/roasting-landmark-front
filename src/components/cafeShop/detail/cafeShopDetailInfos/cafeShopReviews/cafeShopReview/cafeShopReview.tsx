import { useState } from 'react';
import {
  PostReviewAnswerType,
  ReviewType,
} from '../../../../../../types/review';
import Style from './cafeShopReview.style';
import { postReviewAnswer } from '../../../../../../utils/shared/api/reviewApis';
import ReviewAnswer from '../reviewAnswer/reviewAnswer';

const CafeShopReview = ({ reviewInfo }: { reviewInfo: ReviewType }) => {
  const [isStartedWriteAnswer, setIsStartedWriteAnswer] = useState(false);
  const [answerContent, setAnswerContent] = useState('');

  const handleStartWriteAnswer = () => {
    setIsStartedWriteAnswer((prev) => !prev);
  };

  const handleInputAnswerContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerContent(e.target.value);
  };

  const handlePostReviewAnswer = async ({
    reviewId,
    content,
  }: PostReviewAnswerType) => {
    try {
      await postReviewAnswer({ reviewId, content });
      setIsStartedWriteAnswer(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
        <Style.AdditionalFeaturesBox>
          <div>평점:{reviewInfo.rate}</div>
          {!reviewInfo?.answer && (
            <div onClick={handleStartWriteAnswer}>
              {isStartedWriteAnswer ? (
                <button>작성 취소</button>
              ) : (
                <button>답변 작성</button>
              )}
            </div>
          )}
        </Style.AdditionalFeaturesBox>
      </Style.ReviewContainer>
      {reviewInfo?.answer ? (
        <ReviewAnswer answerInfo={reviewInfo?.answer} />
      ) : null}
      {isStartedWriteAnswer && (
        <div>
          <Style.AnswerInput
            type="text"
            value={answerContent}
            onChange={handleInputAnswerContent}
          />
          <button
            onClick={() =>
              handlePostReviewAnswer({
                reviewId: reviewInfo?.id,
                content: answerContent,
              })
            }
          >
            <span>답변 등록</span>
          </button>
        </div>
      )}
    </>
  );
};

export default CafeShopReview;
