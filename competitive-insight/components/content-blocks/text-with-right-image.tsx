import Section from "../../internal/components/section";
import { merge } from "../../utils";
import styles from "./index.module.scss";

interface ITextWithRightImageProps {
  children: React.ReactNode | React.ReactNode[];
  background: BackgroundColour;
  image: React.ReactNode;
  heading?: string;
}

export const TextWithRightImage: React.FC<ITextWithRightImageProps> = ({
  background,
  children,
  image,
  heading,
}) => (
  <Section bgColor={background}>
    <Section.GridContainer columns={2}>
      {heading ? (
        <div className={merge([styles.column, styles.firstRow])}>
          <h3 className={styles.heading}>{heading}</h3>
          {children}
        </div>
      ) : (
        <div className={merge([styles.firstRow, styles.column])}>{children}</div>
      )}
      <div className={styles.column}>{image}</div>
    </Section.GridContainer>
  </Section>
);
