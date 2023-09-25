import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const AddressInputBox = styled.div`
  width: 50%;
  @media (max-width: 1200px) {
    width: 80%;
  }
`;

const AddressInput = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  border: 1px solid #d8dadd;
  color: #383b40;
  font-weight: 300;
  &::placeholder {
    color: #adb2bb;
  }
`;

const SearchAddressContainer = styled.div`
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

const CloseIconBox = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;

const AutoCompletedWordsContainer = styled.div`
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 47.4%;
  background-color: #ffffff;
  padding: 10px 0;
  margin-top: 40px;
  border-radius: 8px;
  z-index: 2;
  @media (max-width: 1200px) {
    width: 70%;
  }
`;

const AutoCompletedWordBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 15px 250px 15px 20px;
  font-size: 15px;
  span {
    display: inline-block;
    color: #383b40;
    font-weight: 500;
  }
  span:first-child {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #fdf6f4;
  }
`;

const GuideTitleBox = styled.div`
  margin: 60px 0 15px 0;
  color: #c9612d;
  font-weight: 500;
`;

const SubmitButtonBox = styled.div`
  margin-top: 30px;
`;

export default {
  ModalBackground,
  AddressInputBox,
  AddressInput,
  SearchAddressContainer,
  CloseIconBox,
  AutoCompletedWordsContainer,
  AutoCompletedWordBox,
  GuideTitleBox,
  SubmitButtonBox,
};
