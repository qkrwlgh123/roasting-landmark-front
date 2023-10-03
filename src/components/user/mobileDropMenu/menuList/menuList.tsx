import { Link } from 'react-router-dom';
import { routes } from '../../../../routes';
import Style from './menuList.style';
import { useEffect, useRef } from 'react';

const MenuList = ({
  isClickMenuicon,
  handleClickMenu,
}: {
  isClickMenuicon: boolean;
  handleClickMenu: () => void;
}) => {
  const dropMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (
        isClickMenuicon &&
        e.target instanceof Node &&
        !dropMenuRef.current!.contains(e.target) &&
        e.target instanceof HTMLElement && // HTMLElement일 때만 tagName 속성 사용
        e.target.tagName !== 'IMG'
      ) {
        handleClickMenu();
      }
    };

    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, []);
  return (
    <Style.MenuContainer ref={dropMenuRef} onClick={handleClickMenu}>
      <Link to={routes.login}>
        <Style.MenuBox>로그인</Style.MenuBox>
      </Link>

      <a href="https://open.kakao.com/o/sw3zU1Hf" target="_blank">
        <Style.MenuBox>문의 남기기</Style.MenuBox>
      </a>
    </Style.MenuContainer>
  );
};

export default MenuList;
