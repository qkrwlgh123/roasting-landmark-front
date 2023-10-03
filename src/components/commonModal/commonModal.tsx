import Style from './commonModal.style';

const CommonModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.ModalBackground>
      <Style.ContentsContainer>{children}</Style.ContentsContainer>
    </Style.ModalBackground>
  );
};

export default CommonModal;
