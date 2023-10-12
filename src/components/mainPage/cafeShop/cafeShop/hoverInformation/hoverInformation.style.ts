import styled from 'styled-components';

const HoverInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #000000;
  opacity: 0.9;
  color: #ffffff;
  height: 100%;
  border-radius: 12px;
  border-top-left-radius: 0px;
  font-weight: 300;
  font-size: 15px;
`;

const TitleText = styled.span`
  font-weight: 500;
  display: inline-block;
  margin-bottom: 10px;
`;

const KeywordsBox = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
`;

const ReviewBox = styled.div`
  height: 100%;
  white-space: normal;
  font-size: 13px;
`;

const RateBox = styled.div`
  display: flex;
  margin-top: 15px;
`;

export default { HoverInnerBox, TitleText, KeywordsBox, ReviewBox, RateBox };
