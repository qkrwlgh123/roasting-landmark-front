import { useRecoilState } from 'recoil';
import Style from './dropMenu.style';
import { isLoggedInAtom, userInfoAtom } from '../../../recoil/authAtoms';
import { logout } from '../../../utils/shared/api/authAPis';
import { UserInfoType } from '../../../types/user';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';

const DropMenu = ({
  isClickProfile,
  handleClickProfile,
}: {
  isClickProfile: boolean;
  handleClickProfile: () => void;
}) => {
  const navigate = useNavigate();
  // 로그아웃 시 유저 정보, 로그인 상태 변경
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const [userInfo, setUserInfo] = useRecoilState<UserInfoType>(userInfoAtom);

  const handleLogout = () => {
    setIsLoggedIn((prev: boolean) => !prev);
    setUserInfo({
      userId: null,
      username: '',
      profileImage: '',
      profileDescription: '',
    });
    logout();
  };

  const handleClickMyListMenu = () => {
    navigate(routes.myCreatedList);
    handleClickProfile();
  };

  const handleClickCreateShop = () => {
    navigate(routes.selectKeywords);
    handleClickProfile();
  };

  const dropMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘

      if (
        isClickProfile &&
        e.target instanceof Node &&
        !dropMenuRef.current!.contains(e.target) &&
        e.target instanceof HTMLElement && // HTMLElement일 때만 tagName 속성 사용
        e.target.tagName !== 'IMG'
      ) {
        console.log('d');
        handleClickProfile();
      }
    };

    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, []);

  return (
    <Style.MenuContainer ref={dropMenuRef}>
      <Style.MobileMenuBox onClick={handleClickCreateShop}>
        신규 카페 등록
      </Style.MobileMenuBox>
      <Style.MenuBox onClick={handleClickMyListMenu}>등록한 카페</Style.MenuBox>
      <a href="https://open.kakao.com/o/sw3zU1Hf" target="_blank">
        <Style.MobileMenuBox>문의 남기기</Style.MobileMenuBox>
      </a>
      <Style.MenuBox onClick={handleLogout}>로그아웃</Style.MenuBox>
    </Style.MenuContainer>
  );
};

export default DropMenu;
