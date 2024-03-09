import { HeadingBlock } from "../components/content-blocks/heading-block";
import Layout from "../components/layout";
import Section from "../internal/components/section";

const AdvertisingDisclosurePage: React.FC = () => (
  <Layout title="Advertising Disclosure">
    <HeadingBlock heading="Advertising Disclosure" centered={false} />

    <Section bgColor="white">
      <Section.GridContainer>
        <p>
          Competitive Insight (referred to as &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo; throughout this page) furnishes links to various sources as
          part of our competitive intelligence services. We consider these links valuable
          for our clients and audience, and in return, we may receive compensation for
          featuring them on our platform.
        </p>

        <p>
          It is crucial for us to maintain transparency regarding our revenue streams, so
          we want to clarify the diverse ways in which we may be compensated for these
          links. Some of the links we incorporate could be affiliate links, implying that
          we earn a commission if you click on the link and make a purchase from the
          linked source. This commission doesn&apos;t impose any additional cost on you as
          the user and aids us in sustaining top-notch competitive intelligence services.
        </p>

        <p>
          Apart from affiliate links, we might also receive compensation from competitors
          for featuring sponsored content on our platform.
        </p>

        <p>
          It&apos;s important to note that we exclusively endorse products or services
          that we trust and have personally utilized. Our objective is to provide our
          clients and audience with precise and beneficial information, and we commit to
          revealing any financial interest we may have in the products or services we
          endorse.
        </p>

        <p>
          Should you have any inquiries or reservations regarding our competitive insight
          practices, please feel free to reach out to us. We highly value your input and
          are dedicated to upholding transparency and honesty with our clients and
          audience.
        </p>
      </Section.GridContainer>
    </Section>
  </Layout>
);

export default AdvertisingDisclosurePage;
