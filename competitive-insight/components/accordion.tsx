import styles from "./accordion.module.scss";
import Arrow from "../svgs/arrow.svg";

interface IChildrenProps {
  children: React.ReactNode | React.ReactNode[];
}

const Summary: React.FC<IChildrenProps> = ({ children }) => (
  <summary className={styles.summary}>
    {children}
    <Arrow width={26} height={15} />
  </summary>
);

const Details: React.FC<IChildrenProps> = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

interface IAccordion extends React.FC<IChildrenProps> {
  Summary: React.FC<IChildrenProps>;
  Details: React.FC<IChildrenProps>;
}

const Accordion: IAccordion = ({ children }) => (
  <details className={styles.details} open>
    {children}
  </details>
);

export const AccordionList: React.FC<IChildrenProps> = ({ children }) => (
  <div className={styles.accordionList}>{children}</div>
);

Accordion.Summary = Summary;
Accordion.Details = Details;

export default Accordion;
