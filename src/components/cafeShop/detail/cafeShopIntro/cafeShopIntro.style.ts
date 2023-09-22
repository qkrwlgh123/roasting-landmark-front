import styled from 'styled-components';

const CafeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  border-bottom: 1px solid #e5e8ec;
  padding-bottom: 30px;
`;

const CafeRateBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  span {
    font-size: 16px;
  }
  img {
    width: 22px;
  }
`;

const CafeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 20px 0;
`;

const CafeName = styled.span`
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const CafeShareIconBox = styled.div`
  width: 30px;
  height: 30px;

  img {
    @media (max-width: 800px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const CafeKeywords = styled.div`
  display: flex;
  margin: 5px 0 40px 0;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const CafeDescriptionBox = styled.div`
  @media (max-width: 800px) {
    font-size: 13px;
  }
  pre {
    @media (max-width: 800px) {
      white-space: normal;
    }
  }
`;

const GuideLoginPage = styled.div`
  margin-top: 50px;
  font-size: 13px;
  font-weight: 400;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const SubmitReviewButton = styled.button`
  margin: 50px 0 15px 0;
  font-size: 15px;
  border: 1px solid black;
  padding: 5px;
`;

export default {
  CafeInfoContainer,
  CafeRateBox,
  CafeTitleContainer,
  CafeShareIconBox,
  CafeKeywords,
  CafeDescriptionBox,
  GuideLoginPage,
  CafeName,
  SubmitReviewButton,
};
