import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  margin-bottom: 25px;
  color: #383b40;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const ShopNameText = styled.span`
  color: #c9612d;
  font-size: 30px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const RateBox = styled.div`
  width: 150px;
  margin-bottom: 35px;
  select {
    width: 100px;
  }
`;

const FormInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  margin-top: 50px;
  width: 50%;
  input,
  textarea {
    margin-bottom: 35px;
    border-radius: 4px;
    padding: 15px;
    border: 1px solid #d8dadd;
    color: #383b40;
    font-weight: 300;
    &::placeholder {
      color: #adb2bb;
      font-weight: 300;
    }
  }
  textarea {
    height: 200px;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  label {
    color: #383b40;
    font-size: 13px;
    margin-bottom: 10px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default {
  FormContainer,
  TitleBox,
  ShopNameText,
  RateBox,
  FormInnerBox,
};
