import { HeadingBlock } from "../components/content-blocks/heading-block";
import Layout from "../components/layout";
import Section from "../internal/components/section";

const TermsConditionsPage: React.FC = () => (
  <Layout title="Terms & Conditions">
    <HeadingBlock heading="Terms & Conditions" centered={false} />
    <Section bgColor="white">
      <Section.GridContainer>
        <div>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By engaging with Competitive Insight (&ldquo;CI&rdquo;), you agree to be bound
            by these Terms and Conditions. If you do not agree with any part of these
            terms, please do not use our services.
          </p>
        </div>
        <div>
          <h3>2. Services</h3>
          <p>
            CI agrees to provide marketing services as outlined in the agreed-upon
            proposal or contract. Any additional services requested by the client may
            result in additional fees.
          </p>
        </div>
        <div>
          <h3>3. Client Responsibilities</h3>
          <p>
            Clients are responsible for providing accurate and timely information required
            for the execution of marketing services. Failure to provide necessary
            information may result in delays or changes to the project timeline.
          </p>
        </div>
        <div>
          <h3>4. Fees and Payments</h3>
          <p>
            Clients agree to pay the fees outlined in the proposal or contract. Payments
            are due as specified, and failure to make timely payments may result in
            suspension of services or termination of the contract.
          </p>
        </div>
        <div>
          <h3>5. Intellectual Property</h3>
          <p>
            All intellectual property created by CI during the course of providing
            services, including but not limited to designs, content, and strategies, shall
            remain the property of CI until full payment is received.
          </p>
        </div>
        <div>
          <h3>6. Confidentiality</h3>
          <p>
            CI agrees to keep all client information confidential and will not disclose
            any confidential information to third parties without the client&apos;s
            explicit consent.
          </p>
        </div>
        <div>
          <h3>7. Termination</h3>
          <p>
            Either party may terminate the agreement with written notice if the other
            party breaches any material term of the agreement. Upon termination, the
            client is responsible for paying any outstanding fees for services provided up
            to the termination date.
          </p>
        </div>
        <div>
          <h3>8. Limitation of Liability</h3>
          <p>
            CI shall not be liable for any indirect, special, incidental, or consequential
            damages arising out of or related to the services provided, even if advised of
            the possibility of such damages.
          </p>
        </div>
        <div>
          <h3>9. Governing Law</h3>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance
            with the laws of the United Kingdom, and any disputes arising out of or in
            connection with these terms shall be subject to the exclusive jurisdiction of
            the courts of the United Kingdom.
          </p>
        </div>
        <div>
          <h3>10. Amendments</h3>
          <p>
            CI reserves the right to amend these Terms and Conditions at any time. Clients
            will be notified of any changes, and continued use of our services constitutes
            acceptance of the amended terms.
          </p>
          <p>
            By engaging with Competitive Insight, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions. If you have any
            questions, please contact us before proceeding with our services.
          </p>
        </div>
      </Section.GridContainer>
    </Section>
  </Layout>
);

export default TermsConditionsPage;
