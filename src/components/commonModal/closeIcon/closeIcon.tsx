import Style from './closeIcon.style';
import Icon from '../../../assets/images/close_icon.png';

const CloseIcon = ({
  onClickFunc,
  isDark,
}: {
  onClickFunc?: () => void;
  isDark?: boolean;
}) => {
  return (
    <Style.CloseIconBox
      onClick={onClickFunc}
      {...(isDark && { $isDark: true })}
    >
      <img src={Icon} alt="close_icon" />
    </Style.CloseIconBox>
  );
};

export default CloseIcon;
