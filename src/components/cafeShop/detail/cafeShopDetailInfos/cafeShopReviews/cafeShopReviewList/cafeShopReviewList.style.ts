import styled from 'styled-components';

const ReviewListContainer = styled.div`
  margin-top: 40px;
`;

const ParticipantsText = styled.span`
  color: #383b40;
`;

const NoReviewText = styled.span`
  color: #383b40;
`;

const WriteReviewButtonBox = styled.div`
  margin: -35px 0 30px 0;
`;

const SubmitReviewButton = styled.button`
  font-size: 15px;
  border: 1px solid black;
  padding: 5px;
  color: #383b40;
`;

const GuideLoginPage = styled.div`
  font-size: 13px;
  font-weight: 400;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

export default {
  ReviewListContainer,
  ParticipantsText,
  NoReviewText,
  WriteReviewButtonBox,
  GuideLoginPage,
  SubmitReviewButton,
};
