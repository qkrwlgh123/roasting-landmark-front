import { ReviewAnswerType } from '../../../../../../types/review';
import Style from './reviewAnswer.style';

const ReviewAnswer = ({ answerInfo }: { answerInfo: ReviewAnswerType }) => {
  return (
    <Style.AnswerContainer>
      <div>
        <span>카페 운영자</span>
      </div>
      <div>
        <span>{answerInfo.content}</span>
      </div>
    </Style.AnswerContainer>
  );
};

export default ReviewAnswer;
