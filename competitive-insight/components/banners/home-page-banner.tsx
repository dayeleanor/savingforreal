import Image from "next/image";
import bannerImg from "../../public/assets/home-page/banner-new.png";
import Section from "../../internal/components/section";
import styles from "./home-page-banner.module.scss";
import Link from "next/link";

const HomePageBanner: React.FC = () => (
  <div className={styles.header}>
    <Image src={bannerImg} alt="Banner" className={styles.banner} priority />
    <Section className={styles.bannerContent}>
      <Section.Header
        tag="h1"
        heading="Unlock The Secrets Of Their Success"
        centered={false}
      >
        <p>
          Experience the Power of Data-Driven Marketing with our Competitive Research
          Services.
        </p>
        <Link href={"/our-work"} className={styles.largeBtn}>
          View Our Work
        </Link>
      </Section.Header>
    </Section>
  </div>
);

export default HomePageBanner;
