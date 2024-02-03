import { useState } from "react";
import styles from "./sub-menu.module.scss";
import layoutStyles from "../layout-navbar.module.scss";
import SubMenu, { ISubMenuProps } from "./sub-menu";
import MobileShowMoreButton from "./mobile-show-more-button";

interface IMenuProps {
  hidden?: boolean;
}

const ServicesMenu: React.FC<IMenuProps> = ({ hidden }) => {
  const [shownSubMenu, setShownSubMenu] = useState(-1);

  const subMenus: React.ReactElement<ISubMenuProps>[] = [
    <SubMenu key={0} title="Our Services">
      <SubMenu.Item title="Something" href="/fudge">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime earum harum,
        commodi odit quam.
      </SubMenu.Item>
    </SubMenu>,
  ];

  const handleSubMenuItemEntered = (index: number) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setShownSubMenu(index);
    }
  };

  return (
    <div className={layoutStyles.menu} hidden={hidden}>
      <div className={styles.menuInner}>
        <ul className={styles.list}>
          {subMenus.map((subMenu, index) => (
            <li
              key={index}
              className={
                styles.item + (index == shownSubMenu ? ` ${styles.selected}` : "")
              }
              role="presentation"
              onMouseEnter={() => handleSubMenuItemEntered(index)}
            >
              <MobileShowMoreButton
                onShowMore={(_, shown) => setShownSubMenu(shown ? index : -1)}
                showMore={shownSubMenu == index}
                label={subMenu.props.title}
              >
                {subMenu}
              </MobileShowMoreButton>
            </li>
          ))}
        </ul>

        <div className={styles.subMenuSideArea}>
          {shownSubMenu >= 0 ? subMenus[shownSubMenu] : subMenus[0]}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
