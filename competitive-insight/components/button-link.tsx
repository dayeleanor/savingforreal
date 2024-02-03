import Link from "next/link";
import styles from "./button-link.module.scss";

interface IButtonLinkProps {
  href: string;
  children: React.ReactNode | React.ReactNode[];
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ children, href }) => (
  <Link href={href} className={styles.buttonLink}>
    <>
      <span></span>
      {children}
    </>
  </Link>
);

export default ButtonLink;
