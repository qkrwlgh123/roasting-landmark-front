import { styled } from 'styled-components';

const KeywordsListLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const KeywordsBox = styled.div`
  display: flex;
  align-items: center;
`;

const Keyword = styled.div<{ isClicked: boolean }>`
  border: ${(props) =>
    props.isClicked ? '3px solid brown' : '1px solid black'};
  padding: 15px;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
`;

export default { KeywordsListLayout, KeywordsBox, Keyword };
