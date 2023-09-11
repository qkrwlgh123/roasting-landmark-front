import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../recoil/authAtoms';
import Style from './profile.style';
import { UserInfoType } from '../../../types/user';
import DropMenu from '../dropMenu/dropMenu';
import { useState } from 'react';
import ArrowIcon from '../../../assets/images/btn_arrow_header.png';

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
        <img src={ArrowIcon} onClick={handleClickProfile} alt="arrow_icon" />
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
