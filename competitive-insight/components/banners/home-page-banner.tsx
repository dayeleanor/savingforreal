import Image from "next/image";
import bannerImg from "../../public/assets/home-page/banner-new.png";
import Section from "../layout/section";
import styles from "./home-page-banner.module.scss";
import Link from "next/link";
import Statement from "../typography";

const HomePageBanner: React.FC = () => (
  <div className={styles.header}>
    <Image src={bannerImg} alt="Banner" className={styles.banner} priority />
    <Section className={styles.bannerContent}>
      <Section.Header tag="h1" title="Unlock The Secrets Of Their Success">
        <Statement>
          Experience the power of data-driven marketing with our competitive research
          services.
        </Statement>
        <Link href={"/our-work"} className={styles.largeBtn}>
          View Our Work
        </Link>
      </Section.Header>
    </Section>
  </div>
);

export default HomePageBanner;
