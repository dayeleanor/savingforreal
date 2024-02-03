import Layout from "../components/layout";
import Section from "../components/layout/section";
import gaImage from "../assets/ga.png";
import Image from "next/image";

const ServicesPage: React.FC = () => (
  <Layout title="Services">
    <Section bgColor="white">
      <Section.Header title="All About Competitive Insight" />
      <Section.Rows>
        <div>
          <p>
            Here at Competitive Insight, you&apos;ll find comprehensive services for
            competitive marketing research and analysis. To succeed online, businesses
            must stay ahead of the competition in the ever-evolving digital landscape. Our
            SEO professionals can help you improve your online visibility and gain a
            competitive edge.
          </p>
          <p>
            Competitive Insight realizes that effective SEO strategies require thorough
            research and analysis. Because of this, we specialize in providing in-depth
            competitive marketing research services that go beyond keyword analysis to
            uncover the intricacies of your industry and target market. Identifying your
            competitors&apos; strategies, strengths, and weaknesses allows us to develop a
            winning strategy tailored to your business needs.
          </p>
          <p>
            As part of our approach, we meticulously examine your competitors&apos; online
            presence, including their website structure, content strategy, and backlink
            profile. Using advanced tools and techniques, we gather valuable insights and
            identify opportunities for you to gain a competitive edge.
          </p>
          <p>
            To identify the most relevant and lucrative search terms for your industry,
            our SEO professionals conduct comprehensive keyword research. In order to
            attract more qualified organic traffic to your website, we analyze the
            keywords your competitors target and uncover untapped keyword opportunities.
          </p>
          <p>
            Aside from keyword research, we also analyze your competitor&apos;s content
            strategies. We examine the types of content and topics they cover, as well as
            the level of engagement they receive. Using this information, we help you
            create compelling and valuable content that resonates with your target
            audience. You can also position your brand as an industry authority with our
            help.
          </p>
          <p>
            Our goal at Competitive Insight is to provide our clients with actionable
            insights through transparency. We provide detailed reports and regular updates
            about the progress of your SEO campaigns and the impact they have on your
            online performance. By working closely with you, we refine our strategies,
            adapt to changes in the industry, and ensure optimal results for you.
          </p>
        </div>
      </Section.Rows>
    </Section>
  </Layout>
);

export default ServicesPage;
