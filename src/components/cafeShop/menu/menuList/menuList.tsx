import { CafeShopMenuType } from '../../../../types/cafeShop';
import Menu from '../menu/menu';
import Style from './menuList.style';

const MenuList = ({
  menuList,
  handleDeleteMenu,
}: {
  menuList: CafeShopMenuType[];
  handleDeleteMenu?: (menu: string) => void;
}) => {
  return (
    <Style.ListBox>
      {menuList?.map((menu: CafeShopMenuType) => (
        <Menu menu={menu} key={menu.food} handleDeleteMenu={handleDeleteMenu} />
      ))}
    </Style.ListBox>
  );
};

export default MenuList;
