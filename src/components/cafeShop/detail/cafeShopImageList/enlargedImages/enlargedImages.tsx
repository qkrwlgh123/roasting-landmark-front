import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import CommonModal from '../../../../commonModal/commonModal';
import Style from './enlargedImages.style';
import CloseIcon from '../../../../commonModal/closeIcon/closeIcon';
import { Children, Dispatch, SetStateAction } from 'react';

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
    <CommonModal>
      <CloseIcon onClickFunc={handleClickImage} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span onClick={() => setCurrentImageindex((prev) => prev - 1)}>
          prev
        </span>
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
        <span onClick={() => setCurrentImageindex((prev) => prev + 1)}>
          after
        </span>
      </div>
      <Style.ThumbsContainer>
        {images.map((image, index) => (
          <Style.ThumbBox
            isSelected={currentImageIndex === index}
            onClick={() => setCurrentImageindex(index)}
          >
            <img src={image} alt="thumb_image" />
          </Style.ThumbBox>
        ))}
      </Style.ThumbsContainer>
    </CommonModal>
  );
};

export default EnlargedImages;
