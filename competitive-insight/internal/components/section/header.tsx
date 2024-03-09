import { merge } from "../../../utils";
import styles from "./index.module.scss";
import { Statement } from "./statement";

export interface IHeaderProps {
  heading: string;
  tag?: HeaderTag;
  children?: React.ReactNode | React.ReactNode[];

  /**
   * Defaults to true
   */
  centered?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  heading,
  children,
  tag: Tag = "h2",
  centered = true,
}) => (
  <>
    <header className={merge([styles.header, centered && styles.center])}>
      <Tag>{heading}</Tag>
      {children && <Statement centered={centered}>{children}</Statement>}
    </header>
  </>
);
