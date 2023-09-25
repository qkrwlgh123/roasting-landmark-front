import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../recoil/authAtoms';
import Style from './profile.style';
import { UserInfoType } from '../../../types/user';
import DropMenu from '../dropMenu/dropMenu';
import { useState } from 'react';
import ArrowIcon from '../../../assets/images/btn_arrow_header.png';
import SearchIcon from '../../../assets/images/btn_search.png';
import {
  MobileSearchCafeInput,
  MobileSearchComponentBox,
  SearchIconBox,
} from '../mobileDropMenu/mobileDropMenu.style';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue<UserInfoType>(userInfoAtom);

  const [isClickProfile, setIsClickProfile] = useState(false);
  const [isClickSearchIcon, setIsClickSearchIcon] = useState(false);

  const handleClickSearchIcon = () => {
    setIsClickSearchIcon((prev: boolean) => !prev);
    setIsClickProfile(false);
  };
  const handleClickProfile = () => {
    setIsClickProfile((prev: boolean) => !prev);
    setIsClickSearchIcon(false);
  };

  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleStartSearch = () => {
    if (searchKeyword === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    navigate(`/search/${searchKeyword}`);
  };
  return (
    <Style.ProfileContainer>
      <SearchIconBox onClick={handleClickSearchIcon}>
        <img src={SearchIcon} alt="search_icon" />
      </SearchIconBox>
      {isClickSearchIcon && (
        <MobileSearchComponentBox>
          <MobileSearchCafeInput
            value={searchKeyword}
            onChange={handleInputKeyword}
            placeholder="카페 또는 지역명으로 검색해보세요."
          />
          <div onClick={handleStartSearch}>
            <img src={SearchIcon} alt="검색아이콘" />
          </div>
        </MobileSearchComponentBox>
      )}
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
