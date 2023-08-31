import styled from 'styled-components';

const CafeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0 0 0;
  width: 75%;
`;

const CafeName = styled.span`
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 20px;
  margin: 0 10px 20px 0;
`;

const CafeRate = styled.span``;

const SubmitReviewButton = styled.button`
  margin: 5px 0 15px 0;
  font-size: 15px;
  border: 1px solid black;
  padding: 5px;
`;

export default { CafeInfoContainer, CafeName, CafeRate, SubmitReviewButton };
