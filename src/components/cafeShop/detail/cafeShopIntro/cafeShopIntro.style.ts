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
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #383b40;
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
  font-weight: 500;
  color: #383b40;
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
  margin: -18px 0 40px 0;
  color: #383b40;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const CafeDescriptionBox = styled.div`
  color: #383b40;
  font-size: 14px;
  font-weight: 300;
  margin-top: -20px;
  padding-right: 10px;

  pre {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }
  pre {
    @media (max-width: 800px) {
      white-space: pre-wrap;
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
  color: #383b40;
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
