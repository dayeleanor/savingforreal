import styles from "./mobile-show-more-button.module.scss";
import Arrow from "../../../svgs/arrow.svg";

interface IMobileShowMoreButtonProps {
  label: string;
  showMore?: boolean;
  children?: React.ReactNode;
  onShowMore: (item: HTMLLIElement, shown: boolean) => void;
}

const MobileShowMoreButton: React.FC<IMobileShowMoreButtonProps> = ({
  onShowMore,
  showMore,
  children,
  label,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const item = btn.parentElement as HTMLLIElement;
    const newShown = !showMore;
    onShowMore(item, newShown);
  };

  const classes = [styles.btn];

  if (showMore) {
    classes.push(styles.open);
  }

  return (
    <>
      <button className={classes.join(" ")} type="button" onClick={handleClick}>
        <span>{label}</span>
        <Arrow width={20} height={20} />
      </button>
      {showMore && children}
    </>
  );
};

export default MobileShowMoreButton;
