import Style from './stepProgress.style';

const StepProgress = ({ step }: { step: number }) => {
  return (
    <div>
      <Style.ProgressBarContainer>
        <Style.StepContainer>
          <Style.StepNumber $active={step >= 1}>1</Style.StepNumber>
          <Style.StepLabel>키워드 선택</Style.StepLabel>
        </Style.StepContainer>
        <Style.StepContainer>
          <Style.StepNumber $active={step >= 2}>2</Style.StepNumber>
          <Style.StepLabel>정보 입력</Style.StepLabel>
        </Style.StepContainer>
        <Style.StepContainer>
          <Style.StepNumber $active={step === 3}>3</Style.StepNumber>
          <Style.StepLabel>완료</Style.StepLabel>
        </Style.StepContainer>
      </Style.ProgressBarContainer>
    </div>
  );
};

export default StepProgress;
