import styled from 'styled-components';

const MobileMenuBox = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIconBox = styled.div`
  margin-right: 15px;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileSearchComponentBox = styled.div`
  position: absolute;
  top: 80px;
  right: 10px;
  width: 300px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  background-color: #f4f6f8;
  border-radius: 12px;
`;

export const MobileSearchCafeInput = styled.input`
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

export default {
  MobileMenuBox,
  SearchIconBox,
  MobileSearchComponentBox,
  MobileSearchCafeInput,
};
