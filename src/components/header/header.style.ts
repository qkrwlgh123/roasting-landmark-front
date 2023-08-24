import { styled } from 'styled-components';

const HeaderContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: gray;
`;

const HeaderContentsBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentBox = styled.li`
  margin-right: 5rem;
  cursor: pointer;
`;

const LogoBox = styled(ContentBox)``;

const SearchComponentBox = styled(ContentBox)``;

const SearchCafeInput = styled.input``;

const CreateCafeBox = styled(ContentBox)``;

const AuthBox = styled(ContentBox)`
  display: flex;
`;

export default {
  HeaderContainer,
  HeaderContentsBox,
  LogoBox,
  SearchComponentBox,
  SearchCafeInput,
  CreateCafeBox,
  AuthBox,
};
