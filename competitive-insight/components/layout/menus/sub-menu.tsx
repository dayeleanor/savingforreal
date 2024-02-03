import Link from "next/link";
import styles from "./sub-menu.module.scss";

interface ISubMenuItemProps {
  title: string;
  children: string;
  href: string;
}

const SubMenuItem: React.FC<ISubMenuItemProps> = ({ title, children, href }) => (
  <li>
    <Link href={href}>
      <span>{title}</span>
      <p className="md-up">{children}</p>
    </Link>
  </li>
);

export interface ISubMenuProps {
  children?: React.ReactNode | React.ReactNode[];
  title: string;
}

interface ISubMenu extends React.FC<ISubMenuProps> {
  Item: React.FC<ISubMenuItemProps>;
}

const SubMenu: ISubMenu = ({ children }) => (
  <div className={styles.subMenuContainer}>
    <ul>{children}</ul>
  </div>
);

SubMenu.Item = SubMenuItem;

export default SubMenu;
