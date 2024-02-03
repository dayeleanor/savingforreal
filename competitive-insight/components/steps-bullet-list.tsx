import styles from "./steps-bullet-list.module.scss";

interface IStepProps {
  text: string;
  step: number;
}

const Step: React.FC<IStepProps> = ({ step, text }) => (
  <li>
    <div className={styles.circle}>{step}</div>
    <span>{text}</span>
  </li>
);

interface IStepsBulletListProps {
  children: React.ReactNode | React.ReactNode[];
}

interface IStepsBulletList extends React.FC<IStepsBulletListProps> {
  Step: React.FC<IStepProps>;
}

const StepsBulletList: IStepsBulletList = ({ children }) => (
  <ul className={styles.ul}>{children}</ul>
);

StepsBulletList.Step = Step;

export default StepsBulletList;
