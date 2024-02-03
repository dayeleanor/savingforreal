import BoldButtonLink from "../bold-button-link";
import styles from "./special-offer-bar.module.scss";

const SpecialOfferBar: React.FC = () => (
  <div className={styles.bar}>
    <div className={styles.content}>
      <p>
        Get a 60 minute audit and follow up report for just $199!{" "}
        <BoldButtonLink
          target="_blank"
          href="https://calendly.com/eleanorbennett/marketing-consultancy-introduction"
          size="small"
        >
          Request Your Audit
        </BoldButtonLink>
      </p>
    </div>
  </div>
);

export default SpecialOfferBar;
