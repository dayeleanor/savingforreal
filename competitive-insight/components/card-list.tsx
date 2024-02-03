import Card, { ICardProps } from "./card";
import styles from "./card-list.module.scss";

interface ICardListProps {
  children: React.ReactNode | React.ReactNode[];
  borders?: "on" | "off";
  columns?: number;
  align?: "left" | "center";
}

interface ICardList extends React.FC<ICardListProps> {
  Card: React.FC<ICardProps>;
}

const CardList: ICardList = ({
  children,
  borders = "on",
  columns = 3,
  align = "center",
}) => {
  const classes = [styles.cardList, styles[`col${columns}`], styles[`align-${align}`]];

  if (borders === "off") {
    classes.push(styles.noBorders);
  }

  return <ul className={classes.join(" ")}>{children}</ul>;
};

CardList.Card = Card;

export default CardList;
