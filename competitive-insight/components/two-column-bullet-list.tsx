import styles from "./two-column-bullet-list.module.scss";

interface IItemProps {
  children: React.ReactNode | React.ReactNode[];
  label: string;
}

const Item: React.FC<IItemProps> = ({ children, label }) => (
  <li className={styles.item}>
    <span>{label}: </span>
    {children}
  </li>
);

interface ITwoColumnBulletListProps {
  title: string;
  tag?: HeaderTag;
  white?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

interface ITwoColumnBulletList extends React.FC<ITwoColumnBulletListProps> {
  Item: React.FC<IItemProps>;
}

const TwoColumnBulletList: ITwoColumnBulletList = ({
  title,
  children,
  tag: Tag = "h2",
  white = false,
}) => {
  if (white) {
    return (
      <div className={"bg-white"}>
        <section>
          <header>
            <Tag>{title}</Tag>
          </header>
          <ul className={styles.list}>{children}</ul>
        </section>
      </div>
    );
  }

  return (
    <section>
      <header>
        <Tag>{title}</Tag>
      </header>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
};

TwoColumnBulletList.Item = Item;
export default TwoColumnBulletList;
