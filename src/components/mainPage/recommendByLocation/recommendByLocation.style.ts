import styled from 'styled-components';
import bgImg from '../../../assets/images/png_bg.png';

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-size: 35px;
`;

const FirstTextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
`;

const SecondText = styled.span``;

const CurrentAreaText = styled(SecondText)`
  font-weight: 600;
`;

const ButtonsBox = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 10px 35px;
  color: #ffffff;
`;

const IconBox = styled.div`
  margin-right: 3px;
`;

const SelectAnotherAreaButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #be6134;
  margin-right: 15px;
`;

const SelectCurrentAreaButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #794734;
`;

export default {
  RecommendContainer,
  FirstTextBox,
  SecondText,
  CurrentAreaText,
  ButtonsBox,
  Button,
  IconBox,
  SelectAnotherAreaButton,
  SelectCurrentAreaButton,
};
