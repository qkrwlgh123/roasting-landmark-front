import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  width: 80%;
  @media (max-width: 1200px) {
    width: 95%;
  }

  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  cursor: pointer;

  svg {
    color: gray;
    &:hover {
      color: #ffffff;
    }
    transition: color ease 0.3s;
  }
`;

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

    object-fit: contain;
  }
`;

const ThumbsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

const ThumbBox = styled.div<{ $isSelected: boolean }>`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin-right: 3px;
  opacity: ${(props) => (props.$isSelected ? '1' : '0.4')};
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export default {
  ModalBackground,
  ContentsContainer,
  InnerContainer,
  IconBox,
  ImagesListContainer,
  ImageBox,
  ThumbsContainer,
  ThumbBox,
};
