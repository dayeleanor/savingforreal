import Link from "next/link";
import styles from "./bold-button-link.module.scss";
import { HTMLAttributeAnchorTarget } from "react";
import { merge } from "../utils";

interface IBoldButtonLinkProps {
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  size?: "small" | "normal" | "large";
  type?: "primary" | "secondary";
  children: React.ReactNode | React.ReactNode[];
}

const BoldButtonLink: React.FC<IBoldButtonLinkProps> = ({
  children,
  href,
  target,
  size = "normal",
  type = "primary",
}) => {
  let sizeClass = styles.normal;

  if (size === "small") {
    sizeClass = styles.small;
  } else if (size === "large") {
    sizeClass = styles.large;
  }

  const typeClass = type === "primary" ? styles.primary : styles.secondary;

  const classes = merge([styles.buttonLink, sizeClass, typeClass]);

  return (
    <Link href={href} target={target} className={classes}>
      <>
        <span></span>
        {children}
      </>
    </Link>
  );
};

export default BoldButtonLink;
