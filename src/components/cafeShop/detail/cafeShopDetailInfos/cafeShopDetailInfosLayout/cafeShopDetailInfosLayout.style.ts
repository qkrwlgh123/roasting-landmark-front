import styled from 'styled-components';

const DetailInfoLayout = styled.div`
  margin-top: 15px;
`;

export const DescriptionContainer = styled.div`
  border-bottom: 1px solid red;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const DescriptionSubjectBox = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const DescriptionContentBox = styled.div``;

export const CategoriesContainer = styled.ul``;

export const ParcelAddressBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  /* 지번 탭 */
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border: 1px solid black;
    padding: 2px;
    font-weight: 300;
    span {
      font-size: 13px;
    }
  }
  /* 지번 주소 내용 */
  span:nth-child(2) {
    font-size: 15px;
    font-weight: 300;
  }
`;

export const CategoryBox = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

export const SubjectBox = styled.div`
  width: 110px;
  font-weight: 300;
`;

export const ContentBox = styled.div`
  a {
    text-decoration: underline;
  }
`;

export const MenuContainer = styled.div`
  width: 40%;
`;

export const MenuInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export default { DetailInfoLayout };
