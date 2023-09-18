import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 20px auto 0 auto;
`;

const StepContainer = styled.div`
  flex: 1;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: -50%;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    background-color: #333;
    z-index: -1;
  }

  &:first-child::before {
    display: none;
  }
`;

const StepNumber = styled.span<{ active: boolean }>`
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid #333;
  border-radius: 50%;
  margin: 0 auto 10px;
  line-height: 30px;
  background-color: white;

  ${(props) =>
    props.active &&
    `
    background-color: #333;
    color: white;
  `}
`;

const StepLabel = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default { ProgressBarContainer, StepContainer, StepNumber, StepLabel };
