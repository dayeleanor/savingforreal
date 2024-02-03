import styles from "./typography.module.scss";

interface IStatementProps {
  children: React.ReactNode | React.ReactNode[];
}

const Statement: React.FC<IStatementProps> = ({ children }) => (
  <p className={styles.statement}>{children}</p>
);

export default Statement;
