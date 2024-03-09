import Section from "../../internal/components/section";

interface IStatementBlockProps {
  background?: BackgroundColour;
  slim?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const StatementBlock: React.FC<IStatementBlockProps> = ({
  background,
  children,
  slim,
}) => (
  <Section bgColor={background} slim={slim}>
    <Section.Statement centered>{children}</Section.Statement>
  </Section>
);
