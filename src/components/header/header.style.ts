import { styled } from 'styled-components';

const HeaderContainer = styled.nav<{ isDown: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: ${(props) => (props.isDown ? '' : '#ffffff')};
`;

const HeaderContentsBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const LeftHeaderContentsBox = styled.div`
  display: flex;
  align-items: center;
`;

const RightHeaderContentsBox = styled.div<{ isDown: boolean }>`
  display: ${(props) => (props.isDown ? 'none' : 'flex')};
  align-items: center;
`;

const ContentBox = styled.li`
  cursor: pointer;
  font-weight: 500;
`;

const LogoBox = styled(ContentBox)<{ isDown: boolean }>`
  width: 170px;
  height: 56px;
  margin-right: 30px;
  img {
    width: ${(props) => (props.isDown ? '0%' : '100%')};
    height: ${(props) => (props.isDown ? '0%' : '100%')};
  }
`;

const SearchComponentBox = styled(ContentBox)`
  width: 400px;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #f4f6f8;
  border-radius: 24px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const SearchCafeInput = styled.input`
  background-color: #f4f6f8;
  width: 90%;
  height: 100%;
  border-radius: 24px;
  color: #383b40;
  font-weight: 300;
  &::placeholder {
    color: #adb2bb;
    font-weight: 300;
  }
  border: none;
  padding: 15px 25px;
`;

const ButtonBox = styled(ContentBox)`
  color: #383b40;
  border: 1px solid #adb2bb;
  padding: 7px 20px;
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    background-color: #c9612d;
    color: #ffffff;
  }
  @media (max-width: 1000px) {
    display: none;
  }
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
