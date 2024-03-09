import { useState, useEffect } from "react";
import renderMarkdown from "../../../render-markdown";

export const Markdown: React.FC<{ children: string; includeToC: boolean }> = ({
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
