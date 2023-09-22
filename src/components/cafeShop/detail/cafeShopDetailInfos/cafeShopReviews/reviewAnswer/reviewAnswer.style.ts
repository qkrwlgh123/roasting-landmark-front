import styled from 'styled-components';

const AnswerContainer = styled.div`
  background-color: #f4f6f8;
  margin: -40px 0 50px 20px;
  padding: 30px;
  border-radius: 8px;
  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

const AnswerUpsideAreaBox = styled.div`
  display: flex;
`;

const ArrowIconBox = styled.div`
  margin-right: 10px;
`;

const AnswerContentBox = styled.div`
  padding: 15px 0;
`;

export default {
  AnswerContainer,
  AnswerUpsideAreaBox,
  ArrowIconBox,
  AnswerContentBox,
};
