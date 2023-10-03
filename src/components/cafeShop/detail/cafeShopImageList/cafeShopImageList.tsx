import { useState } from 'react';
import MobileImage from '../cafeShopImage/mobileImage/mobileImage';
import OtherImage from '../cafeShopImage/otherImage/otherImage';
import RepresentImage from '../cafeShopImage/representImage/representImage';
import Style from './cafeShopImageList.style';
import EnlargedImages from './enlargedImages/enlargedImages';

const CafeShopImageList = ({ images }: { images: string[] }) => {
  const [isClickImage, setIsClickImage] = useState(false);
  const [currentImageIndex, setCurrentImageindex] = useState(0);

  const handleClickImage = (imageIndex?: number) => {
    setIsClickImage((prev) => !prev);
    if (imageIndex) setCurrentImageindex(imageIndex);
  };

  return (
    <>
      {isClickImage && (
        <EnlargedImages
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageindex={setCurrentImageindex}
          handleClickImage={handleClickImage}
        />
      )}
      <Style.ListBox>
        <Style.DesktopImagesListBox>
          <Style.RepresentImageBox onClick={() => handleClickImage(0)}>
            {images && <RepresentImage src={images[0]} />}
          </Style.RepresentImageBox>
          <Style.OtherImagesBox>
            {images
              ?.filter((_, idx) => idx !== 0)
              .map((img, imageIndex) => (
                <OtherImage
                  key={img}
                  src={img}
                  index={imageIndex}
                  handleClickImage={handleClickImage}
                />
              ))}
          </Style.OtherImagesBox>
        </Style.DesktopImagesListBox>

        <Style.MobileImagesListBox>
          {images?.map((img, imageIndex) => (
            <MobileImage
              key={img}
              src={img}
              index={imageIndex}
              handleClickImage={handleClickImage}
            />
          ))}
        </Style.MobileImagesListBox>
      </Style.ListBox>
    </>
  );
};

export default CafeShopImageList;
