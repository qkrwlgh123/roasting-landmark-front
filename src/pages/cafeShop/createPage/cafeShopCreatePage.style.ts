import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
`;

const FormInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  margin-top: 50px;
  width: 50%;
  input {
    margin-bottom: 10px;
  }
`;

const ImageInputLabel = styled.label`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const ImageInput = styled.input`
  display: none;
`;

const PrevImagesContainer = styled.div`
  display: flex;
`;

const PrevImageBox = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default {
  FormContainer,
  FormInnerBox,
  ImageInputLabel,
  ImageInput,
  PrevImagesContainer,
  PrevImageBox,
};
