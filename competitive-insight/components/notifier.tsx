import styles from "./notifier.module.scss";

const Notifier: React.FC = () => (
  <div id="notifier" className={styles.notifier} hidden>
    Copied Url!
  </div>
);

export default Notifier;
