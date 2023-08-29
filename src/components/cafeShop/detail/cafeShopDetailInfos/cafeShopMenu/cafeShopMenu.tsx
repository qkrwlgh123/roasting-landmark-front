import { CafeShopType } from '../../../../../types/cafeShop';

const CafeShopMenu = ({
  menu,
}: {
  menu: { food: string; price: number }[];
}) => {
  console.log(menu);
  return <>{menu}</>;
};

export default CafeShopMenu;
