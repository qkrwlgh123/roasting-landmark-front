import OtherImage from '../cafeShopImage/otherImage/otherImage';
import RepresentImage from '../cafeShopImage/representImage/representImage';
import Style from './cafeShopImageList.style';

const CafeShopImageList = ({ images }: { images: string[] }) => {
  return (
    <Style.ListBox>
      <Style.RepresentImageBox>
        {images && <RepresentImage src={images[0]} />}
      </Style.RepresentImageBox>
      <Style.OtherImagesBox>
        {images
          ?.filter((_, idx) => idx !== 0)
          .map((img) => (
            <OtherImage key={img} src={img} />
          ))}
      </Style.OtherImagesBox>
    </Style.ListBox>
  );
};

export default CafeShopImageList;
