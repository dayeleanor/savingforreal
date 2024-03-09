import { GridContainer, IGridContainerProps } from "./grid-container";
import { Header, IHeaderProps } from "./header";
import { Markdown } from "./markdown";
import { Statement, IStatementProps } from "./statement";
import { merge } from "../../../utils";

interface ISectionProps {
  children?: React.ReactNode | React.ReactNode[];
  bgColor?: BackgroundColour;
  className?: string;
  slim?: boolean;
}

interface ISection extends React.FC<ISectionProps> {
  Markdown: React.FC<{ children: string; includeToC: boolean }>;
  Header: React.FC<IHeaderProps>;
  Statement: React.FC<IStatementProps>;
  GridContainer: React.FC<IGridContainerProps>;
}

const Section: ISection = ({ className, children, slim, bgColor = "light" }) => {
  if (bgColor !== "light") {
    return (
      <div className={`bg-${bgColor}`}>
        <section className={merge([className, slim && "slim"])}>{children}</section>
      </div>
    );
  }

  return <section className={merge([className, slim && "slim"])}>{children}</section>;
};

Section.Markdown = Markdown;
Section.GridContainer = GridContainer;
Section.Header = Header;
Section.Statement = Statement;

export default Section;
