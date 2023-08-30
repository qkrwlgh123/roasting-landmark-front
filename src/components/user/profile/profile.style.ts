import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageBox = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`;

export default { ProfileContainer, ProfileImageBox };
