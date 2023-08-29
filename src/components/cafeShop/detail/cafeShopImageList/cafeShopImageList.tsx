import CafeShopImage from '../cafeShopImage/cafeShopImage';
import Style from './cafeShopImageList.style';

const CafeShopImageList = ({ images }: { images: string[] }) => {
  return (
    <Style.ListBox>
      {images?.map((img) => (
        <CafeShopImage key={img} src={img} />
      ))}
    </Style.ListBox>
  );
};

export default CafeShopImageList;
