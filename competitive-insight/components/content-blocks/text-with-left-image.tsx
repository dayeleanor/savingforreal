import Section from "../../internal/components/section";
import { merge } from "../../utils";
import styles from "./index.module.scss";

interface ITextWithLeftImageProps {
  children: React.ReactNode | React.ReactNode[];
  background: BackgroundColour;
  image: React.ReactNode;
  heading?: string;
}

export const TextWithLeftImage: React.FC<ITextWithLeftImageProps> = ({
  background,
  children,
  image,
  heading,
}) => (
  <Section bgColor={background}>
    <Section.GridContainer columns={2}>
      <div className={merge([styles.firstRow, styles.column])}>{image}</div>
      {heading ? (
        <div className={merge([styles.column])}>
          <h3 className={styles.heading}>{heading}</h3>
          {children}
        </div>
      ) : (
        <div className={styles.column}>{children}</div>
      )}
    </Section.GridContainer>
  </Section>
);
