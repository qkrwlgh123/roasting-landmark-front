import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 20px;
  background-color: #ffffff;
  width: 50%;
  @media (max-width: 1200px) {
    width: 90%;
  }
  height: 75%; /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;
export default { ModalBackground, ContentsContainer };
