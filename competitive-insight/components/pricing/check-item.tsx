import styles from "./pricing-chart.module.scss";

interface ICheckItemProps {
  text: string;
  checked?: boolean;
}

const CheckItem: React.FC<ICheckItemProps> = ({ text, checked }) => (
  <li className={styles.checkItem}>
    {checked ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18.457">
        <path
          d="M14.12,20.716l12.7-12.7a2.1,2.1,0,0,1,3.605,1.507,2.041,2.041,0,0,1-.592,1.507L15.627,25.237a2.081,2.081,0,0,1-3.013,0l-5.6-5.6a2.1,2.1,0,0,1,1.507-3.605,2.041,2.041,0,0,1,1.507.592l4.09,4.09Z"
          transform="translate(-6.425 -7.425)"
          fill="green"
        />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          d="M18.746,4.816a1.034,1.034,0,1,0-1.461-1.463L11.049,9.588,4.816,3.352A1.035,1.035,0,1,0,3.352,4.816l6.235,6.234L3.352,17.283a1.035,1.035,0,0,0,1.463,1.463l6.234-6.235,6.235,6.235a1.034,1.034,0,1,0,1.461-1.463l-6.235-6.234Z"
          transform="translate(-3.049 -3.049)"
          fill="red"
        />
      </svg>
    )}
    <span>{text}</span>
  </li>
);

export default CheckItem;
