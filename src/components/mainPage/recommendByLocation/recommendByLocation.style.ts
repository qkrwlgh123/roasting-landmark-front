import styled from 'styled-components';

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 240px;
  background-color: skyblue;
`;

const FirstTextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
`;

const SecondText = styled.span`
  font-size: 21px;
`;

const CurrentAreaText = styled(SecondText)`
  color: white;
  font-weight: 600;
`;

const ButtonsBox = styled.div`
  margin-top: 30px;
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
`;

const SelectAnotherAreaButton = styled(Button)`
  background-color: #19b7c2;
  margin-right: 10px;
`;

const SelectCurrentAreaButton = styled(Button)`
  background-color: #2c87f1;
`;

export default {
  RecommendContainer,
  FirstTextBox,
  SecondText,
  CurrentAreaText,
  ButtonsBox,
  Button,
  SelectAnotherAreaButton,
  SelectCurrentAreaButton,
};
