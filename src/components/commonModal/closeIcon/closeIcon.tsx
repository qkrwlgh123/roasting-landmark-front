import Style from './closeIcon.style';
import Icon from '../../../assets/images/close_icon.png';

const CloseIcon = ({ onClickFunc }: { onClickFunc?: () => void }) => {
  return (
    <Style.CloseIconBox onClick={onClickFunc}>
      <img src={Icon} alt="close_icon" />
    </Style.CloseIconBox>
  );
};

export default CloseIcon;
