import Layout from "../components/layout";
import Section from "../components/layout/section";

const PrivacyPolicyPage: React.FC = () => (
  <Layout title="Privacy Policy">
    <Section bgColor="white">
      <Section.Header title="Privacy Policy">
        <p>Effective Date: 4/12/23</p>
        <h3>1. Introduction</h3>
        <p>
          Welcome to Competitive Insight Marketing Agency (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;). This Privacy Policy is designed to help
          you understand how we collect, use, disclose, and safeguard your personal
          information. By using our website, services, or engaging with us, you consent to
          the practices described in this Privacy Policy.
        </p>
      </Section.Header>
      <Section.Rows>
        <div>
          <h3>2. Information We Collect</h3>
          <h4>2.1. Personal Information</h4>
          <p>We may collect personal information, including but not limited to:</p>
          <ul>
            <li>Contact Information (e.g., name, email address, phone number)</li>
            <li>Company Information (e.g., company name, industry)</li>
            <li>Professional Information (e.g., job title, responsibilities)</li>
            <li>Payment Information (if applicable)</li>
          </ul>
          <h4>2.2 Non-Personal Information</h4>
          <p>We may also collect non-personal information, such as:</p>
          <ul>
            <li>Browser type</li>
            <li>Device type</li>
            <li>IP address</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </div>
        <div>
          <h3>3. How We Use Your Information</h3>
          <p>We may use your information for the following purposes:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you</li>
            <li>Customizing content and advertising</li>
            <li>Analyzing website usage and trends</li>
            <li>Ensuring the security of our website and services</li>
          </ul>
        </div>
        <div>
          <h3>4. Sharing Your Information</h3>
          <p>We may share your information with:</p>
          <ul>
            <li>Third-party service providers</li>
            <li>Business partners</li>
            <li>Legal authorities when required</li>
            <li>We do not sell your personal information to third parties</li>
          </ul>
        </div>
        <div>
          <h3>5. Cookies and Similar Technologies</h3>
          <p>
            We use cookies and similar technologies to enhance your experience on our
            website. You can manage your cookie preferences through your browser settings.
          </p>
        </div>
        <div>
          <h3>6. Your Choices</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Delete your account (if applicable)</li>
          </ul>
        </div>
        <div>
          <h3>7. Security</h3>
          <p>
            We implement reasonable security measures to protect your information.
            However, no method of transmission over the Internet or electronic storage is
            100% secure.
          </p>
        </div>
        <div>
          <h3>8. Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes through our website or other communication channels.
          </p>
        </div>
        <div>
          <h3>9. Contact Us</h3>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us
            at info@competitiveinsight.io.
          </p>
        </div>
      </Section.Rows>
    </Section>
  </Layout>
);

export default PrivacyPolicyPage;
