import Section from "../../internal/components/section";
import styles from "./blog-page-banner.module.scss";

const BlogBanner: React.FC = () => (
  <Section>
    <Section.GridContainer columns={2}>
      <header>
        <h1>Get Cutting-Edge, Marketing Tips In Your Inbox</h1>
      </header>
      <div className={styles.subscribeCard}>
        <p className={styles.tagLine}>
          Sign up below to get our latest news and articles:
        </p>
        <form>
          <input
            className={styles.textfield}
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <input type="submit" value="Subscribe" className={styles.submitButton} />
        </form>
      </div>
    </Section.GridContainer>
  </Section>
);

export default BlogBanner;
