import Layout from "../../components/layout";
import Section from "../../components/layout/section";
import gaImage from "../../assets/ga.png";
import Image from "next/image";

const ServicesPage: React.FC = () => (
  <Layout title="Services">
    <Section bgColor="white">
      <Section.Rows columns={2}>
        <div>
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
        </div>
        <Image src={gaImage} alt="ga screenshot" />
      </Section.Rows>
      <Section.Rows columns={2}>
        <Image src={gaImage} alt="ga screenshot" />
        <div>
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
        </div>
      </Section.Rows>
    </Section>
  </Layout>
);

export default ServicesPage;
