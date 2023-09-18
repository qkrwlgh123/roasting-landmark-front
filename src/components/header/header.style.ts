import { styled } from 'styled-components';

const HeaderContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: #ffffff;
`;

const HeaderContentsBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
`;

const LeftHeaderContentsBox = styled.div`
  display: flex;
  align-items: center;
`;

const RightHeaderContentsBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentBox = styled.li`
  cursor: pointer;
`;

const LogoBox = styled(ContentBox)`
  width: 170px;
  height: 56px;
  margin-right: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SearchComponentBox = styled(ContentBox)`
  width: 400px;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #f4f6f8;
  border-radius: 24px;
`;

const SearchCafeInput = styled.input`
  background-color: #f4f6f8;
  width: 90%;
  height: 100%;
  border-radius: 24px;
  &::placeholder {
    color: #adb2bb;
  }
  border: none;
  padding: 15px 25px;
`;

const ButtonBox = styled(ContentBox)`
  color: #383b40;
  border: 2px solid #adb2bb;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
`;

const AuthBox = styled(ContentBox)`
  display: flex;
`;

export default {
  HeaderContainer,
  HeaderContentsBox,
  LeftHeaderContentsBox,
  RightHeaderContentsBox,
  LogoBox,
  SearchComponentBox,
  SearchCafeInput,
  ButtonBox,
  AuthBox,
};
