import styles from "./section.module.scss";
import { isValidString, merge } from "../../utils";
import React, { useEffect, useState } from "react";
import renderMarkdown from "../../render-markdown";

interface IRowsProps {
  /**
   * Defaults to 1 column
   */
  columns?: number;
  children?: React.ReactNode | React.ReactNode[];
  className?: string | boolean;
}

interface IHeaderProps extends IRowsProps {
  title?: string;
  center?: boolean;
  tag?: HeaderTag;
}

const Markdown: React.FC<{ children: string; includeToC: boolean }> = ({
  children: markdown,
  includeToC,
}) => {
  const [renderedContent, setRenderedContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    renderMarkdown(markdown, includeToC).then((rendered) => {
      setRenderedContent(rendered);
    });
  }, [includeToC, markdown]);

  if (!renderedContent) {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>;
};

const Container: React.FC<IRowsProps> = ({ children, columns = 1, className }) => {
  if (React.Children.toArray(children).length <= 1 || columns === 1) {
    if (isValidString(className)) {
      return <div className={merge([styles.singleColumn, className])}>{children}</div>;
    }

    return <div className={styles.singleColumn}>{children}</div>;
  }

  return (
    <div className={merge([styles.grid, styles[`col${columns}`], className])}>
      {children}
    </div>
  );
};

const Rows: React.FC<IRowsProps> = ({ children, columns = 1, className }) => (
  <Container columns={columns} className={className}>
    {children}
  </Container>
);

const Header: React.FC<IHeaderProps> = ({
  title,
  children,
  center,
  tag: Tag = "h2",
  columns = 1,
  className,
}) => (
  <>
    <header className={merge([styles.header, center && styles.center])}>
      {title && <Tag>{title}</Tag>}
      {children && (
        <Container
          columns={columns}
          className={merge([center && styles.center, className])}
        >
          {children}
        </Container>
      )}
    </header>
  </>
);

interface ISectionProps {
  children?: React.ReactNode | React.ReactNode[];
  bgColor?: "white" | "light" | "medium" | "dark";
  className?: string;
}

interface ISection extends React.FC<ISectionProps> {
  Rows: React.FC<IRowsProps>;
  Markdown: React.FC<{ children: string; includeToC: boolean }>;
  Header: React.FC<IHeaderProps>;
}

const Section: ISection = ({ className, children, bgColor = "light" }) => {
  if (bgColor !== "light") {
    return (
      <div className={`bg-${bgColor}`}>
        <section className={className}>{children}</section>
      </div>
    );
  }

  return <section className={className}>{children}</section>;
};

Section.Rows = Rows;
Section.Markdown = Markdown;
Section.Header = Header;

export default Section;
