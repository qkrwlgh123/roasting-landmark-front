import styled from 'styled-components';

export const HoverInfoBox = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 50%;
  transition: opacity 0.5s ease;
`;

const CafeInfoBox = styled.div`
  position: relative;
  width: 290px;
  height: 335px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  line-height: 1;
  &:hover {
    scale: 1.1;
    ${HoverInfoBox} {
      opacity: 1;
    }
  }
  transition: scale 0.2s ease;
  @media (max-width: 1300px) {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 1150px) {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 400px;
  }
`;

const CafeImageBox = styled.div`
  height: 55%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`;

const CafeInfosBox = styled.div`
  padding: 25px;
  border-bottom: 1px solid #e5e8ec;
`;

const CafeTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #383b40;
    font-size: 20px;
    font-weight: 500;
  }
  margin-bottom: 15px;
`;

const CafeHashTagsBox = styled.div`
  span {
    color: #383b40;
    font-size: 13px;
    font-weight: 300;
  }
`;

const RatesDistanceInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  @media (max-width: 1300px) {
    height: 20%;
  }
`;

const DistanceTextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #737984;
  font-weight: 300;
`;

const DistanceIconBox = styled.div`
  margin-right: 3px;
`;

export default {
  CafeInfoBox,
  CafeImageBox,
  CafeInfosBox,
  CafeTitleBox,
  CafeHashTagsBox,
  RatesDistanceInfoBox,
  DistanceTextBox,
  DistanceIconBox,
  HoverInfoBox,
};
