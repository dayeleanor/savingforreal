import Section from "../../internal/components/section";

interface IHeadingBlockProps {
  children?: React.ReactNode | React.ReactNode[];
  background?: BackgroundColour;
  heading: string;
  tag?: HeaderTag;
  /**
   * Defaults to true
   */
  centered?: boolean;
}

export const HeadingBlock: React.FC<IHeadingBlockProps> = ({
  background,
  children,
  heading,
  tag,
  centered = true,
}) => (
  <Section bgColor={background}>
    <Section.Header heading={heading} centered={centered} tag={tag}>
      {children}
    </Section.Header>
  </Section>
);
