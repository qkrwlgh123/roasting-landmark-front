import { useState } from 'react';
import {
  PostReviewAnswerType,
  ReviewType,
} from '../../../../../../types/review';
import Style from './cafeShopReview.style';
import { postReviewAnswer } from '../../../../../../utils/shared/api/reviewApis';
import ReviewAnswer from '../reviewAnswer/reviewAnswer';
import RateStars from '../../../../rateStars/rateStars';
import { convertCreatedDate } from '../../../../../../utils/shared/convert';

const CafeShopReview = ({ reviewInfo }: { reviewInfo: ReviewType }) => {
  const [isStartedWriteAnswer, setIsStartedWriteAnswer] = useState(false);
  const [answerContent, setAnswerContent] = useState('');

  const handleStartWriteAnswer = () => {
    setIsStartedWriteAnswer((prev) => !prev);
  };

  const handleInputAnswerContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnswerContent(e.target.value);
  };

  const handlePostReviewAnswer = async ({
    reviewId,
    content,
  }: PostReviewAnswerType) => {
    if (!content) {
      alert('답변 내용을 입력해주세요.');
      return;
    }
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
          <div>
            <Style.UsernameBox>
              <span>{reviewInfo.username}</span>
            </Style.UsernameBox>
            <Style.ReviewExtraInfoContainer>
              <RateStars rate={reviewInfo?.rate} />
              <Style.CreatedDateText>
                &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
                {convertCreatedDate(reviewInfo?.createdAt)}
              </Style.CreatedDateText>
            </Style.ReviewExtraInfoContainer>
          </div>
        </Style.UserInfoBox>

        <Style.ContentBox>
          <pre>{reviewInfo.content}</pre>
        </Style.ContentBox>

        <Style.AdditionalFeaturesBox>
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
      {/* 후기에 대한 답변 */}
      {reviewInfo?.answer ? (
        <ReviewAnswer answerInfo={reviewInfo?.answer} />
      ) : null}
      {/* 후기에 대한 답변이 없을시 작성 */}
      {isStartedWriteAnswer && (
        <div>
          <Style.AnswerInput
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
            <span>등록</span>
          </button>
        </div>
      )}
    </>
  );
};

export default CafeShopReview;
