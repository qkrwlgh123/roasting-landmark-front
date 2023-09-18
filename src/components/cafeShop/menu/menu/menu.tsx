import { CafeShopMenuType } from '../../../../types/cafeShop';
import Style from './menu.style';

const Menu = ({
  menu,
  handleDeleteMenu,
}: {
  menu: CafeShopMenuType;
  handleDeleteMenu?: (menu: string) => void;
}) => {
  return (
    <Style.MenuBox>
      <Style.FoodTitle>
        <span>{menu.food}</span>
      </Style.FoodTitle>
      <Style.ConnectLine></Style.ConnectLine>
      <Style.PriceTitle>
        <span>
          {menu.price
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </Style.PriceTitle>
      {handleDeleteMenu && (
        <Style.DeleteBox onClick={() => handleDeleteMenu(menu.food)}>
          x
        </Style.DeleteBox>
      )}
    </Style.MenuBox>
  );
};

export default Menu;
