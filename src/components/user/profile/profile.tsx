import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../recoil/authAtoms';
import Style from './profile.style';
import { UserInfoType } from '../../../types/user';
import DropMenu from '../dropMenu/dropMenu';
import { useState } from 'react';

const Profile = () => {
  const userInfo = useRecoilValue<UserInfoType>(userInfoAtom);

  const [isClickProfile, setIsClickProfile] = useState(false);

  const handleClickProfile = () => {
    setIsClickProfile((prev: boolean) => !prev);
  };

  return (
    <Style.ProfileContainer>
      <Style.ProfileImageBox onClick={handleClickProfile}>
        <img src={userInfo.profileImage} alt="profile_image" />
      </Style.ProfileImageBox>
      <div>
        <span>안녕하세요. {userInfo.username}님!</span>
      </div>
      {isClickProfile && (
        <DropMenu
          isClickProfile={isClickProfile}
          handleClickProfile={handleClickProfile}
        />
      )}
    </Style.ProfileContainer>
  );
};

export default Profile;
