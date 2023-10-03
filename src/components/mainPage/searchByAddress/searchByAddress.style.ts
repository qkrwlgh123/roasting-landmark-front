import styled from 'styled-components';

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

const AutoCompletedWordsContainer = styled.div`
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 47.4%;
  background-color: #ffffff;

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
  AddressInputBox,
  AddressInput,
  AutoCompletedWordsContainer,
  AutoCompletedWordBox,
  GuideTitleBox,
  SubmitButtonBox,
};
