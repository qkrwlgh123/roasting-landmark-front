import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import CommonModal from '../../../../commonModal/commonModal';
import Style from './enlargedImages.style';
import CloseIcon from '../../../../commonModal/closeIcon/closeIcon';
import { Children, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const EnlargedImages = ({
  images,
  currentImageIndex,
  setCurrentImageindex,
  handleClickImage,
}: {
  images: string[];
  currentImageIndex: number;
  setCurrentImageindex: Dispatch<SetStateAction<number>>;
  handleClickImage: (imageIndex?: number) => void;
}) => {
  const renderSlides = images.map((image) => (
    <Style.ImageBox key={image}>
      <img src={image} alt="cafe_image" />
    </Style.ImageBox>
  ));

  return (
    <Style.ModalBackground>
      <Style.ContentsContainer>
        <CloseIcon onClickFunc={handleClickImage} isDark={true} />

        <Style.InnerContainer>
          <Style.IconBox
            onClick={() => setCurrentImageindex((prev) => prev - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="3x" />
          </Style.IconBox>
          <Style.ImagesListContainer>
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              transitionTime={200}
              showArrows={false}
              selectedItem={currentImageIndex}
              onChange={(index) => setCurrentImageindex(index)}
            >
              {renderSlides}
            </Carousel>
          </Style.ImagesListContainer>
          <Style.IconBox
            onClick={() => setCurrentImageindex((prev) => prev + 1)}
          >
            <FontAwesomeIcon icon={faChevronRight} size="3x" />
          </Style.IconBox>
        </Style.InnerContainer>
        <Style.ThumbsContainer>
          {images.map((image, index) => (
            <Style.ThumbBox
              key={image}
              $isSelected={currentImageIndex === index}
              onClick={() => setCurrentImageindex(index)}
            >
              <img src={image} alt="thumb_image" />
            </Style.ThumbBox>
          ))}
        </Style.ThumbsContainer>
      </Style.ContentsContainer>
    </Style.ModalBackground>
  );
};

export default EnlargedImages;
