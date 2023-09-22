import styled from 'styled-components';

const ListBox = styled.div`
  display: flex;
  width: 75%;
  height: 400px;
  margin-bottom: 45px;
  @media (max-width: 1000px) {
    height: 230px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const RepresentImageBox = styled.div`
  width: 50%;
  margin-right: 20px;
`;

const OtherImagesBox = styled.div`
  width: 50%;
  display: grid;
  height: 400px;
  grid-template-columns: repeat(2, 50%); /* 2열의 균일한 너비 설정 */
  grid-template-rows: repeat(2, 50%); /* 2열의 균일한 너비 설정 */
  gap: 3px; /* 열과 행 사이의 간격을 설정합니다. 원하는 값으로 조정할 수 있습니다. */
`;

const DesktopImagesListBox = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileImagesListBox = styled.div`
  display: flex;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export default {
  ListBox,
  RepresentImageBox,
  OtherImagesBox,
  DesktopImagesListBox,
  MobileImagesListBox,
};
