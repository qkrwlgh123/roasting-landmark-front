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

export default { FormContainer, FormInnerBox };
