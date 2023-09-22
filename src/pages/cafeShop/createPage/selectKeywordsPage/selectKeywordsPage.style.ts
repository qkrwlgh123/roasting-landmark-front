import styled, { css, keyframes } from 'styled-components';

const TitleBox = styled.div<{ isPageVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 30px;
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
  padding: 80px 0 100px 0;
  display: grid;
  width: 40%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 생성 */
  grid-template-rows: repeat(3, 1fr); /* 3행 생성 */
  gap: 10px; /* 그리드 아이템 사이의 간격 설정 */
  @media (max-width: 1200px) {
    width: 100%;
    padding: 80px 15px;
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
  width: 100%;
  height: 100px;
  padding: 15px;

  border: ${(props) =>
    props.isClicked ? '3px solid brown' : '1px solid black'};
  animation: ${(props) =>
    props.isClicked &&
    css`
      ${bounceAnimation} 0.15s ease-in-out
    `};
  border-radius: 8px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: ${(props) => props.animationDelay}s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default { TitleBox, KeywordsList, Keyword };
