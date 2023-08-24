import CafeShopImage from '../cafeShopImage/cafeShopImage';
import Style from './cafeShopImageList.style';

const DUMMY_DATAS = [
  { id: 1, src: '테스트 이미지' },
  { id: 2, src: '테스트 이미지' },
  { id: 3, src: '테스트 이미지' },
  { id: 4, src: '테스트 이미지' },
  { id: 5, src: '테스트 이미지' },
];

const CafeShopImageList = () => {
  return (
    <Style.ListBox>
      {DUMMY_DATAS.map((img) => (
        <CafeShopImage key={img.id} src={img.src} />
      ))}
    </Style.ListBox>
  );
};

export default CafeShopImageList;
