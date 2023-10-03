import styled from 'styled-components';
const KeywordsListLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
`;

const KeywordsBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    overflow-x: scroll;
  }
`;

const Keyword = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${(props) =>
    props.isClicked ? '3px solid #D57F4D' : undefined};

  padding: 15px;
  margin-right: 10px;
  cursor: pointer;
  img {
    margin-bottom: 4px;
    width: 32px;
    @media (max-width: 800px) {
      width: 22px;
    }
  }
  span {
    color: ${(props) => (props.isClicked ? '#D57F4D' : '#747983')};
    font-weight: 300;
    font-size: 13px;
    @media (max-width: 800px) {
      font-size: 8px;
    }
  }
  &:hover {
    border-bottom: 3px solid #d57f4d;
  }
`;

export default { KeywordsListLayout, KeywordsBox, Keyword };
