import { Link } from 'react-router-dom';
import { routes } from '../../../../routes';
import Style from './menuList.style';

const MenuList = ({
  isClickMenuicon,
  handleClickMenu,
}: {
  isClickMenuicon: boolean;
  handleClickMenu: () => void;
}) => {
  return (
    <Style.MenuContainer onClick={handleClickMenu}>
      <Link to={routes.login}>
        <Style.MenuBox>로그인</Style.MenuBox>
      </Link>

      <Style.MenuBox>
        <a href="https://open.kakao.com/o/sw3zU1Hf" target="_blank">
          문의 남기기
        </a>
      </Style.MenuBox>
    </Style.MenuContainer>
  );
};

export default MenuList;
