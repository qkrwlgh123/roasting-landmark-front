import { useRecoilState } from 'recoil';
import Style from './dropMenu.style';
import { isLoggedInAtom, userInfoAtom } from '../../../recoil/authAtoms';
import { logout } from '../../../utils/shared/api/authAPis';
import { UserInfoType } from '../../../types/user';
import { useEffect, useRef } from 'react';

const DropMenu = ({
  isClickProfile,
  handleClickProfile,
}: {
  isClickProfile: boolean;
  handleClickProfile: () => void;
}) => {
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

  const dropMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClose = (e: any) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (
        isClickProfile &&
        !dropMenuRef.current!.contains(e.target) &&
        e.target.tagName !== 'IMG'
      ) {
        handleClickProfile();
      }
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, []);

  return (
    <Style.MenuContainer ref={dropMenuRef}>
      <Style.MenuBox>등록한 카페</Style.MenuBox>
      <Style.MenuBox onClick={handleLogout}>로그아웃</Style.MenuBox>
    </Style.MenuContainer>
  );
};

export default DropMenu;
