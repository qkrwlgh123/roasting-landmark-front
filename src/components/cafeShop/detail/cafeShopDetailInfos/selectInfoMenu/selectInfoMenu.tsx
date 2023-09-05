import Style from './selectInfoMenu.style';

const INFO_MENU_LIST = ['소개', '안내', '위치', '메뉴', '후기'];

const SelectInfoMenu = ({
  selectedMenu,
  handleClickInfoMenu,
}: {
  selectedMenu: string;
  handleClickInfoMenu: (menu: string) => void;
}) => {
  return (
    <Style.InfoMenuContainer>
      <ul>
        {INFO_MENU_LIST.map((menu) => (
          <Style.InfoMenu
            key={menu}
            isselected={selectedMenu === menu}
            onClick={() => handleClickInfoMenu(menu)}
          >
            {menu}
          </Style.InfoMenu>
        ))}
      </ul>
    </Style.InfoMenuContainer>
  );
};

export default SelectInfoMenu;
