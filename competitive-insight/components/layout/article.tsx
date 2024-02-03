import styles from "./article.module.scss";

interface IArticleProps {
  children: React.ReactNode | React.ReactNode[];
}

const Article: React.FC<IArticleProps> = ({ children }) => (
  <article className={styles.article}>{children}</article>
);

export default Article;
