import styled from 'styled-components';

const DetailInfoLayout = styled.div`
  margin-top: 40px;
  border-bottom: 1px solid #e5e8ec;
  padding-bottom: 30px;
`;

export const DescriptionContainer = styled.div`
  font-size: 22px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  span:nth-child(2) {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 18px;
    @media (max-width: 800px) {
      font-size: 13px;
    }
  }
`;

export const DescriptionSubjectBox = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 16px;
  }
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
      @media (max-width: 800px) {
        font-size: 13px;
      }
    }
  }
  /* 지번 주소 내용 */
  span:nth-child(2) {
    font-size: 15px;
    font-weight: 300;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export const CategoryBox = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export const SubjectBox = styled.div`
  width: 110px;
  font-weight: 300;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

export const ContentBox = styled.div`
  a {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 13px;
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
