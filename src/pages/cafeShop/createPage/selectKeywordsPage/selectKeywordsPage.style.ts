import styled, { css, keyframes } from 'styled-components';

const TitleBox = styled.div<{ isPageVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #383b40;
  font-size: 30px;
  font-weight: 500;
  span:nth-child(2) {
    font-size: 20px;
  }
  opacity: ${(props) => (props.isPageVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isPageVisible ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
  @media (max-width: 1200px) {
    font-size: 20px;
    span:nth-child(2) {
      font-size: 15px;
    }
  }
`;

const KeywordsList = styled.div`
  padding: 30px 0 100px 0;
  display: grid;
  width: 30%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 생성 */
  grid-template-rows: repeat(3, 1fr); /* 3행 생성 */
  gap: 15px; /* 그리드 아이템 사이의 간격 설정 */
  color: #383b40;
  font-weight: 500;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px 15px;
    font-size: 15px;
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
`;

const Keyword = styled.div<{
  isPageVisible: boolean;
  isClicked: boolean;
  animationDelay: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 25px 15px;

  border: ${(props) =>
    props.isClicked ? '3px solid #D57F4D' : '1px solid rgb(221, 221, 221)'};
  span {
    color: ${(props) => (props.isClicked ? '#D57F4D' : '#747983')};
  }
  &:hover {
    border: 3px solid #d57f4d;
  }
  &:active {
    scale: 0.95;
    transition: scale ease 0.1s;
  }
  background-color: ${(props) =>
    props.isClicked ? 'rgb(247, 247, 247)' : '#FFFFFF'};
  border-radius: 8px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: ${(props) => props.animationDelay}s;

  img {
    width: 40px;
    margin-bottom: 2px;
  }
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default { TitleBox, KeywordsList, Keyword };
