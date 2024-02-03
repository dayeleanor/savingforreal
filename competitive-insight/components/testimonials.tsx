import Image from "next/image";
import ciscoSrc from "../public/images/testimonials/cisco.png";
import charlieLogo from "../public/images/testimonials/kigen.png";
import davidLogo from "../public/images/testimonials/trash-cans.png";
import sofiaLogo from "../public/images/testimonials/hybr.png";
import styles from "./testimonials.module.scss";

interface ITestimonialCardProps {
  children: React.ReactNode | React.ReactNode[];
  name: string;
  profilePic?: React.ReactNode;
  position: string;
  logo: React.ReactNode;
}

const TestimonialCard: React.FC<ITestimonialCardProps> = ({
  children,
  name,
  position,
  profilePic,
  logo,
}) => (
  <div className={styles.card}>
    {logo}
    <div className={styles.cardContent}>
      <svg
        className={styles.quotesLeft}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
        />
      </svg>
      <p className={styles.content}>{children}</p>
      <svg
        className={styles.quotesRight}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          d="M21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
          fill="currentColor"
        />
      </svg>
    </div>
    <footer className={styles.footer}>
      {profilePic}
      <div style={{ textAlign: profilePic ? "left" : "center" }}>
        <p className={styles.person}>{name}</p>
        <span>{position}</span>
      </div>
    </footer>
  </div>
);

const Testimonials: React.FC = () => (
  <div className={styles.container}>
    <ul className={styles.testimonialList}>
      <li className={styles.left}>
        <TestimonialCard
          logo={<Image alt="Cisco" src={davidLogo} height={100} width={100} />}
          name="Dave Frazier"
          position="Marketing Director"
        >
          Our partnership with Competitive Insight has not only delivered substantial SEO
          improvements and enhanced rankings for RecycleAway.com and
          TrashcansWarehouse.com but has also introduced a wealth of e-commerce expertise
          and innovative digital marketing concepts. Moreover, they excel in attentive
          communication, consistently prioritizing our goals and limitations.
        </TestimonialCard>
      </li>
      <li className={styles.raised}>
        <TestimonialCard
          logo={<Image alt="Kigen" src={charlieLogo} height={100} width={100} />}
          name="Charlie Harrisson"
          position="Senior Marketing Manager"
        >
          Competitive Insight swiftly grasped the project requirements and our B2B lead
          nurturing goals. They efficiently simplified complex product terminology related
          to data security and identity for connected IoT devices. Competitive Insight
          delivered a well-structured lead nurturing path, complete with content
          recommendations for the CTAs. Their collaborative and dependable approach made
          the experience seamless.
        </TestimonialCard>
      </li>
      <li className={styles.right}>
        <TestimonialCard
          logo={<Image alt="Hybr" src={sofiaLogo} height={100} width={100} />}
          name="Sofia Barroso"
          position="Head of Growth at Hybr"
        >
          Competitive Insight is everything you need in an SEO agency! They are experts in
          both the technical and content aspects of SEO. They are exceptionally organized
          and analytical, with impressive strategy and communication skills. They have
          exceeded our project expectations by a wide margin. I would wholeheartedly
          recommend them to anyone in search of an SEO agency!
        </TestimonialCard>
      </li>
    </ul>
  </div>
);

export default Testimonials;
