import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 10px 50px 10px;
  border-bottom: 1px solid black;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

const ProfileImageBox = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  margin-bottom: 10px;
`;

const ContentBox = styled.div`
  width: 70%;
`;

export default { ReviewContainer, UserInfoBox, ProfileImageBox, ContentBox };
