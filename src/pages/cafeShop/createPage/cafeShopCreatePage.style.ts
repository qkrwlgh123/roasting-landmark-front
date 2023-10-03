import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;
`;

const FormInnerBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
  margin-top: 50px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
  input,
  textarea {
    margin-bottom: 35px;
    border-radius: 4px;
    padding: 15px;
    border: 1px solid #d8dadd;
    color: #383b40;
    font-weight: 300;
    font-size: 13px;
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
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const SelectedShopNameBox = styled.div`
  color: #a05339;
  font-size: 15px;
  margin: -20px 0 30px 0;
`;

const AutoCompletedWordsContainer = styled.div`
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;

  margin-top: 80px;
  border-radius: 8px;
`;

const AutoCompletedWordBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 15px 250px 15px 20px;
  font-size: 13px;
  span {
    display: inline-block;
    color: #383b40;
    font-weight: 300;
  }
  span:first-child {
    margin-bottom: 0px;
    font-weight: 500;
  }
  &:hover {
    background-color: #fdf6f4;
  }
`;

const HolidayCheckboxsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  flex-wrap: wrap;
`;

const HolidayCheckbox = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #383b40;
  font-weight: 300;
  font-size: 13px;
`;

const ImagesTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 13px;
    display: inline-block;
    margin-bottom: 10px;
    color: #383b40;
    font-weight: 500;
  }

  span:nth-child(2) {
    color: #c9612d;
  }
`;

const ImageGuideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d8dadd;
  border-radius: 4px;
  padding: 8px 15px;
  span {
    color: #adb2bb;
    font-size: 13px;
    font-weight: 300;
  }
  label {
    margin: 0;
    cursor: pointer;
    background-color: #e5e8ec;
    border-radius: 4px;
    padding: 5px 15px;
    color: #383b40;
    font-weight: 300;
    font-size: 12px;
  }
`;

const ImageInputLabel = styled.label`
  border: 1px solid #d8dadd;
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ImageInput = styled.input`
  display: none;
`;

const PrevImagesContainer = styled.div`
  display: flex;
  margin: 10px 0 35px 0;
  flex-wrap: wrap;
`;

const PrevImageBox = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const MenuContainer = styled.div`
  span {
    display: inline-block;
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const MenuTitlesBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #383b40;
  font-weight: 500;
  span:nth-child(2) {
    color: #c9612d;
  }
`;

const MenuInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  input {
    margin: 0 10px 0 5px;
    width: 50%;
    &::placeholder {
      color: #adb2bb;
      font-weight: 300;
      font-size: 13px;
    }
  }
  button {
    margin-left: 10px;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
`;

export const SubmitButton = styled.button`
  background-color: #c9612d;
  color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  width: 136px;
  height: 40px;
  @media (max-width: 800px) {
    width: 100%;
    border-radius: 0;
  }
`;

export default {
  FormContainer,
  FormInnerBox,
  SelectedShopNameBox,
  AutoCompletedWordsContainer,
  AutoCompletedWordBox,
  HolidayCheckboxsContainer,
  HolidayCheckbox,
  ImagesTitleBox,
  ImageGuideTitle,
  ImageInputLabel,
  ImageInput,
  PrevImagesContainer,
  PrevImageBox,
  MenuTitlesBox,
  MenuContainer,
  MenuInputContainer,
  SubmitButtonContainer,
  SubmitButton,
};
