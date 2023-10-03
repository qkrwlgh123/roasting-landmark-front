import styled from 'styled-components';

const ImagesListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 630px;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const ThumbsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

const ThumbBox = styled.div<{ isSelected: boolean }>`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin-right: 3px;
  opacity: ${(props) => (props.isSelected ? '1' : '0.4')};
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export default { ImagesListContainer, ImageBox, ThumbsContainer, ThumbBox };
