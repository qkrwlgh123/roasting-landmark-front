import styled from 'styled-components';

const ShareToOthersBackground = styled.div`
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
  color: #383b40;
  align-items: center;
  position: absolute;
  padding: 20px;
  background-color: #ffffff;
  width: 20%;
  @media (max-width: 900px) {
    width: 60%;
  }
  height: 25%; /* 중앙 배치 */
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

const TitleBox = styled.div`
  margin: 20px 0 30px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-weight: 300;
  align-items: center;
  font-size: 15px;
  img {
    width: 70px;
    height: 70px;
  }
`;

const LinkLogoBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c0bb;
  border-radius: 10px;
`;

export default {
  ShareToOthersBackground,
  ContentsContainer,
  TitleBox,
  ButtonsContainer,
  ButtonBox,
  LinkLogoBox,
};
