import { ReviewAnswerType } from '../../../../../../types/review';
import { convertCreatedDate } from '../../../../../../utils/shared/convert';
import { CreatedDateText } from '../cafeShopReview/cafeShopReview.style';
import Style from './reviewAnswer.style';
import AnswerArrow from '../../../../../../assets/images/answer_arrow.png';

const ReviewAnswer = ({ answerInfo }: { answerInfo: ReviewAnswerType }) => {
  return (
    <Style.AnswerContainer>
      <Style.AnswerUpsideAreaBox>
        <Style.ArrowIconBox>
          <img src={AnswerArrow} alt="answer_arrow_icon" />
        </Style.ArrowIconBox>
        <span>후기 답변&nbsp;</span>
        <CreatedDateText>
          &nbsp;{convertCreatedDate(answerInfo?.createdAt)}
        </CreatedDateText>
      </Style.AnswerUpsideAreaBox>
      <Style.AnswerContentBox>
        <pre>{answerInfo.content}</pre>
      </Style.AnswerContentBox>
    </Style.AnswerContainer>
  );
};

export default ReviewAnswer;
