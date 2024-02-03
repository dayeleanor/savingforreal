import { cloneElement, useState } from "react";
import styles from "./card-list.module.scss";
import { merge } from "../utils";
import Arrow from "../svgs/arrow.svg";

export interface ICardProps {
  icon?: React.ReactElement;
  children: React.ReactNode | React.ReactNode[];
  title: string;
  togglable?: boolean;
}

const Card: React.FC<ICardProps> = ({ children, icon, title, togglable = false }) => {
  const [hidden, setHidden] = useState(togglable);

  const cardIcon =
    icon &&
    cloneElement(icon, {
      className: styles.cardIcon,
    });

  return (
    <li className={merge([styles.card, hidden && styles.hidden])}>
      {cardIcon && cardIcon}
      <h3>{title}</h3>
      {children}
      {togglable && (
        <button
          type="button"
          title={hidden ? "Show more" : "Show less"}
          className={merge([styles.arrow, !hidden && styles.up])}
          onClick={() => setHidden(!hidden)}
        >
          <Arrow width={26} height={15} />
        </button>
      )}
    </li>
  );
};

export default Card;
