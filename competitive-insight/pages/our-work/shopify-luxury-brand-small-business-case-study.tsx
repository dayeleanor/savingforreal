import Layout from "../../components/layout";
import Section from "../../components/layout/section";

const ServicesPage: React.FC = () => (
  <Layout title="Services">
    <Section bgColor="white">
      <Section.Header title="Ecommerce SEO Project" tag="h1" />
      <Section.Rows>
        <h2>Netting Conversions For A New Ecommerce Brand</h2>
        <p>
          Discover how Competitive Insight helped a new eCommerce brand net scores of
          first-page rankings and win organic traffic in direct competition with
          established competitors as large as eBay and Etsy in our latest case study.
        </p>
        <h3>Introduction</h3>
        <p>
          When a newly created eCommerce website operating in the jewellery and luxury
          goods niche needed to rapidly increase its organic traffic, Competitive Insight
          was brought in to develop a paid shopping strategy, content calendar, keyword
          targets and manage overall marketing activity.
        </p>
        <p>
          Competitive Insight also played a vital role in both product selection (by
          mapping product demand based upon keyword research), historical research and
          documentation discovery behind rare pieces as well as technical SEO optimisation
          for the website. These latter insights had to be made in whilst keeping
          Shopify’s unique website structure in mind.
        </p>
        <h3>Small Budgets, Huge Results</h3>
        <p>
          As this eCommerce brand was fully bootstrapped the large majority of their
          marketing spend was for the expertise of Competitive Insight’s research and
          outreach capabilities. Whilst initial placements and PPC campaigns were
          successful, we worked with the business’s co-founders to work towards a goal of
          long term sustainable organic traffic.
        </p>
        <p>
          Competitive Insight was able to build the majority of links, run competitions
          and generate press coverage from the likes of the Financial Times based upon
          existing contacts, honed outreach techniques and intelligent opportunity
          discovery through press outlet networks.
        </p>
        <h3>How Is Competitive Insight Different To Other eCommerce Agencies?</h3>
        <p>
          We are experienced with managing eCommerce growth campaigns build on both
          Magento and Shopify and have had shown radical success with minimal marketing
          budgets. Our primary focus is on netting our clients sustainable organic traffic
          that scales alongside your business’s goals.
        </p>
        <p>
          It all starts with competitive insight, email us today at
          hello@competitiveinsight.io to see how we can help your company’s growth.
        </p>
      </Section.Rows>
    </Section>
  </Layout>
);

export default ServicesPage;
