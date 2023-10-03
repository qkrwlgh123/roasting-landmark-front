import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 20px auto 0 auto;
  color: #383b40;
`;

const StepContainer = styled.div`
  flex: 1;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: -50%;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    background-color: #383b40;
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
  border: 2px solid #383b40;
  border-radius: 50%;
  margin: 0 auto 10px;
  line-height: 30px;
  background-color: white;

  ${(props) =>
    props.active &&
    `
    background-color: #383b40;
    color: white;
  `}
`;

const StepLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #383b40;
`;

export default { ProgressBarContainer, StepContainer, StepNumber, StepLabel };
