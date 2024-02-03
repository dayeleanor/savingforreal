import { merge } from "../../utils";
import BoldButtonLink from "../bold-button-link";
import CheckItem from "./check-item";
import styles from "./pricing-chart.module.scss";

const PricingChart: React.FC = () => (
  <div className={styles.container}>
    <ul className={styles.headerRow}>
      <li>
        <h2>Features and Deliverables</h2>
      </li>
      <li>
        <h3>Startup</h3>
        <p>$2,500 per month</p>
      </li>
      <li>
        <h3>Growth</h3>
        <p>$5000 per month</p>
      </li>
      <li>
        <h3>Industry Leader</h3>
        <p>$7,500 per month</p>
      </li>
    </ul>

    <ul className={styles.row}>
      <li>
        <h4>Linked Mentions</h4>
      </li>
      <CheckItem text="4" checked />
      <CheckItem text="7" checked />
      <CheckItem text="10" checked />
    </ul>

    <ul className={styles.row}>
      <li>
        <h4>Average Domain Authority</h4>
      </li>
      <CheckItem text="50 to 90" checked />
      <CheckItem text="60 to 90" checked />
      <CheckItem text="75 to 90" checked />
    </ul>

    <ul className={styles.row}>
      <li>
        <h4>Average Referring Site Traffic</h4>
      </li>
      <CheckItem text="25,000" checked />
      <CheckItem text="40,000" checked />
      <CheckItem text="65,000" checked />
    </ul>

    <ul className={styles.row}>
      <li>
        <h4>Strategic SEO Consulting Session</h4>
      </li>
      <CheckItem text="Per Quarter (excluding onboarding)" checked />
      <CheckItem text="Monthly" checked />
      <CheckItem text="On Demand" checked />
    </ul>

    <ul className={styles.row}>
      <li>
        <h4>Monthly Keyword Content Plan</h4>
      </li>
      <CheckItem text="For one primary service" checked />
      <CheckItem text="For three services" checked />
      <CheckItem text="Extensive product/service keyword gap analysis" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>On-Page Optimization Audits</h4>
      </li>
      <CheckItem text="Included" checked />
      <CheckItem text="Included" checked />
      <CheckItem text="Included" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>Outreach to journalists & thought leadership pitching</h4>
      </li>
      <CheckItem text="Quarterly" checked />
      <CheckItem text="Monthly" checked />
      <CheckItem text="Weekly Opportunities" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>HARO / Featured.com / SourceBottle / DotStarMedia Outreach</h4>
      </li>
      <CheckItem text="Not Included" />
      <CheckItem text="Included" checked />
      <CheckItem text="Included" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>Complimentary PPC Audit & Advisory</h4>
      </li>
      <CheckItem text="Not Included" />
      <CheckItem text="Included" checked />
      <CheckItem text="Included" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>Email Marketing Audit & Advisory</h4>
      </li>
      <CheckItem text="Not Included" />
      <CheckItem text="Not Included" />
      <CheckItem text="Included" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>Organic Penalty Assistance</h4>
      </li>
      <CheckItem text="Not Included" />
      <CheckItem text="Not Included" />
      <CheckItem text="Included" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>Social Media Assistance</h4>
      </li>
      <CheckItem text="Not Included" />
      <CheckItem text="Not Included" />
      <CheckItem text="Included" checked />
    </ul>
    <ul className={styles.row}>
      <li>
        <h4>Regular Reporting</h4>
      </li>
      <CheckItem text="Included" checked />
      <CheckItem text="Included" checked />
      <CheckItem text="Included" checked />
    </ul>
    {/* <ul className={styles.actionRow}>
      <li></li>
      <li>
        <BoldButtonLink
          href="https://competitiveinsigh.spp.io/pay/service/10"
          target="_blank"
          size="large"
          type="primary"
        >
          Subscribe
        </BoldButtonLink>
      </li>
      <li>
        <BoldButtonLink
          href="https://competitiveinsigh.spp.io/pay/service/11"
          target="_blank"
          size="large"
          type="primary"
        >
          Subscribe
        </BoldButtonLink>
      </li>
      <li>
        <BoldButtonLink
          href="https://competitiveinsigh.spp.io/pay/service/12"
          target="_blank"
          size="large"
          type="primary"
        >
          Subscribe
        </BoldButtonLink>
      </li>
    </ul> */}
    <ul className={merge([styles.actionRow, styles.lastRow])}>
      <li></li>
      <li>
        <BoldButtonLink
          href="https://calendly.com/eleanorbennett/30min?month=2023-11"
          target="_blank"
          size="large"
          type="secondary"
        >
          Book a Call
        </BoldButtonLink>
      </li>
      <li>
        <BoldButtonLink
          href="https://calendly.com/eleanorbennett/30min?month=2023-11"
          target="_blank"
          size="large"
          type="secondary"
        >
          Book a Call
        </BoldButtonLink>
      </li>
      <li>
        <BoldButtonLink
          href="https://calendly.com/eleanorbennett/30min?month=2023-11"
          target="_blank"
          size="large"
          type="secondary"
        >
          Book a Call
        </BoldButtonLink>
      </li>
    </ul>
  </div>
);

export default PricingChart;
