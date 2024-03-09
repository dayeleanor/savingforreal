import HomePageBanner from "../components/banners/home-page-banner";
import CardList from "../components/card-list";
import Layout from "../components/layout";
import PackageSvg from "../svgs/package-box.svg";
import StartUpSvg from "../svgs/startup.svg";
import AnalyticsSvg from "../svgs/analytics.svg";
import TwoColumnBulletList from "../components/two-column-bullet-list";
import Section from "../internal/components/section";
import StepsBulletList from "../components/steps-bullet-list";
import BlogCard from "../components/blog/blog-card";
import ButtonLink from "../components/button-link";
import { getAllBlogPostCards, type IBlogPostCardData } from "../contentful/queries";
import Testimonials from "../components/testimonials";
import { StatementBlock } from "../components/content-blocks/statement-block";
import Article from "../components/content-blocks/article";

interface IHomePageProps {
  posts: IBlogPostCardData[];
}

const Home: React.FC<IHomePageProps> = ({ posts }) => (
  <Layout title="Home">
    <HomePageBanner />
    <StatementBlock slim>
      <p>
        We assist ambitious brands in acquiring high-authority backlinks and utilizing the
        power of SEO as the driving force behind their customer growth. Our expertise
        enables brands spanning various industries, including B2B, B2C, FinTech, and SaaS
        to achieve exponential organic growth.
      </p>
    </StatementBlock>
    <Section>
      <Section.GridContainer>
        <Testimonials />
      </Section.GridContainer>
    </Section>

    <Section bgColor="medium">
      <Section.GridContainer>
        <CardList>
          <CardList.Card
            title="Competitor Benchmarking"
            icon={<PackageSvg height={20} />}
            togglable
          >
            <p>
              Our competitor benchmarking services are a valuable tool for businesses
              looking to stay competitive in their industry. By utilizing our service to
              understand how you stack up against your competitor&apos;s content,
              backlinks and overal marketing strategy, your company can identify areas for
              improvement and take steps to stay ahead of the curve.
            </p>
          </CardList.Card>
          <CardList.Card title="Increase Organic Traffic" icon={<StartUpSvg />} togglable>
            <p>
              Our SEO services are built on a solid foundation of SEO best practices,
              which have been honed and refined over years of experience in the industry.
              We start by conducting a thorough audit of your website to identify any
              technical issues that may be hindering your organic search visibility. From
              there, we&apos;ll work closely with you to develop a comprehensive strategy
              that is tailored to your unique business goals and objectives.
            </p>
          </CardList.Card>
          <CardList.Card title="Affiliate Marketing" icon={<AnalyticsSvg />} togglable>
            <p>
              Our service is designed to help businesses rapidly increase their active
              referral partners and improve their revenue from existing affiliates. We
              understand that having a strong network of referral partners or affiliates
              is essential to growing your business and achieving your revenue goals.
            </p>
          </CardList.Card>
        </CardList>
      </Section.GridContainer>
    </Section>

    <TwoColumnBulletList title="How We Can Help You" white>
      <TwoColumnBulletList.Item label="Competitor Analysis">
        Our consultancy service identifies all of your key competitors, gathering data on
        their marketing strategies, and analysing their online presence. This full service
        audit then provides your business with a detailed report outlining the findings,
        along with detailed recommendations on how to improve your marketing strategy to
        gain a competitive advantage.
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="Fractional CMO Consultancy">
        Our fractional CMOs provide businesses with access to high-level marketing
        expertise without the need to hire a full-time CMO. This service is typically
        offered on a part-time or project basis, allowing businesses to receive the
        strategic guidance and tactical support they need, as and when they need it.
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="Digital PR Strategy">
        Our team of experienced PR professionals has a proven track record of securing
        media coverage for a variety of businesses across multiple industries. Whether
        you&apos;re launching a new product, promoting a new service, or looking to build
        your brand&apos;s authority, we can help you achieve your goals.
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="Email Marketing Optimisation">
        Our email marketing optimisation service can help you achieve higher email open
        rates, click-through rates, and conversion rates, resulting in increased revenue
        for your business.
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="On-page optimization">
        We will work to ensure that your website&apos;s content is fully optimized for the
        keywords we&apos;ve identified, including optimizing your page titles, meta
        descriptions, header tags, and body copy.
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="Keyword research">
        We are able to conduct thorough keyword research to identify the search terms and
        phrases that potential customers are using to find products or services like
        yours.
      </TwoColumnBulletList.Item>
    </TwoColumnBulletList>
    <Section>
      <Section.GridContainer>
        <CardList borders="off" columns={3} align="left">
          <CardList.Card
            title="Training For Junior SEOs"
            icon={<PackageSvg height={20} />}
          >
            <p>
              Our consultancy and training services offer tailored support and
              personalized insights to junior SEOs looking to grow their expertise.
            </p>
            <ButtonLink href="/">Learn More</ButtonLink>
          </CardList.Card>
          <CardList.Card title="Deluxe SEO Audit" icon={<StartUpSvg />}>
            <p>
              Our comprehensive audits provide detailed insights into your website&apos;s
              technical, on-page, and off-page SEO factors, enabling you to optimize your
              website for maximum performance.
            </p>
            {/* <ButtonLink href="/">Learn More</ButtonLink> */}
          </CardList.Card>

          <CardList.Card title="Content Gap Analysis" icon={<AnalyticsSvg />}>
            <p>
              We are able to provide a detailed analysis of your website&apos;s content
              and identifies areas where you can fill in the gaps to rank higher in search
              engine results and engage your audience more effectively.
            </p>
            {/* <ButtonLink href="/">Learn More</ButtonLink> */}
          </CardList.Card>
        </CardList>
      </Section.GridContainer>
    </Section>
    <Section bgColor="white">
      <Section.GridContainer columns={2}>
        <Article>
          <h2>The 6 Guiding Principles We Apply To Ensure Organic Growth</h2>
          <p>
            We&apos;ve outlined the top level strategies for growth that result in rapid
            organic traffic growth and increased leads. Our marketing consultancy is
            designed to help organizations achieve their marketing objectives efficiently
            and effectively. Our team of experienced marketers and digital strategists
            work with clients to identify their goals, develop customized marketing
            strategies, and implement tactics that drive growth.
          </p>
          <p>
            Whether it comes down to us training your existing marketing team or providing
            solutions and consultancy we&apos;ll help you to follow the steps we&apos;ve
            outlined for organic growth success.
          </p>
        </Article>
        <StepsBulletList>
          <StepsBulletList.Step step={1} text="Conduct Detailed Competitor Analysis" />
          <StepsBulletList.Step step={2} text="Identify Your Key USPs" />
          <StepsBulletList.Step step={3} text="Refine Your Target Audience" />
          <StepsBulletList.Step step={4} text="Create Compelling Content" />
          <StepsBulletList.Step step={5} text="Monitor & Refine" />
          <StepsBulletList.Step step={6} text="Optimise Lead Conversion Rates" />
        </StepsBulletList>
      </Section.GridContainer>
    </Section>

    <Section>
      <Section.Header heading="Recent Blog Posts" tag="h3" />
      <Section.GridContainer columns={3}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            key={post.title}
            tags={post.tags}
            lastUpdated={post.lastUpdated}
            slug={post.slug}
            thumbnail={post.thumbnail}
            readingTime={post.readingTime}
          >
            {post.excerpt}
          </BlogCard>
        ))}
      </Section.GridContainer>
    </Section>
  </Layout>
);

export default Home;

export async function getStaticProps() {
  const posts = await getAllBlogPostCards(3);

  return {
    props: { posts },
  };
}
