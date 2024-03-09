import ButtonLink from "../../components/button-link";
import Article from "../../components/content-blocks/article";
import { HeadingBlock } from "../../components/content-blocks/heading-block";
import Layout from "../../components/layout";
import Section from "../../internal/components/section";

const ServicesPage: React.FC = () => (
  <Layout title="Services">
    <HeadingBlock heading="Gain the Competitive Edge" tag="h1" background="light-blue" />
    <Section bgColor="white">
      <Section.GridContainer>
        <Article>
          <h3>How We Increased Sign Ups By 297% For A Top B2B SAAS Startup</h3>
          <p>
            See how we helped an innovative technology Startup to grow their traffic
            exponentially by bringing together the power of content strategy, link
            building and digital PR alongside scaling sustainable content production.
          </p>
          <ButtonLink href="/our-work/how-we-increased-keywords-sign-ups-for-a-b2b-saas-startup">
            Learn More
          </ButtonLink>
        </Article>
        <Article>
          <h3>How We Increased Affiliate Revenue By Over 350%</h3>
          <p>
            See how Competitive Insight helped give one of the UK’s leading craft supply
            companies an increase in their affiliate revenue by over 350%, their sessions
            by over 350% and their total number of referral partners by a whopping 1200%
          </p>
          <ButtonLink href="/our-work/increase-affiliate-revenue-case-study">
            Learn More
          </ButtonLink>
        </Article>
        <Article>
          <h3>Netting Conversions For A New Ecommerce Brand</h3>
          <p>
            Discover how Competitive Insight helped a new eCommerce brand net scores of
            first-page rankings and win organic traffic in direct competition with
            established competitors as large as eBay and Etsy in our latest case study.
          </p>
          <ButtonLink href="/our-work/shopify-luxury-brand-small-business-case-study">
            Learn More
          </ButtonLink>
        </Article>
      </Section.GridContainer>
    </Section>
  </Layout>
);

export default ServicesPage;
