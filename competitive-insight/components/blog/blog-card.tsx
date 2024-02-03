import Image from "next/image";
import styles from "./blog-card.module.scss";
import buttonStyles from "../button-link.module.scss";
import ShareButton from "../share-button";
import { IBlogPostThumbnail } from "../../contentful/queries";
import Link from "next/link";
import { useRef } from "react";

interface IBlogCardProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  slug: string;
  tags: string[];
  lastUpdated: string;
  readingTime: string;
  thumbnail: IBlogPostThumbnail;
}

const BlogCard: React.FC<IBlogCardProps> = ({
  children,
  slug,
  title,
  tags,
  lastUpdated,
  readingTime,
  thumbnail,
}) => {
  const href = `/blog/${slug}`;
  const shareUrl = `https://www.competitiveinsight.io${href}`;
  const shareButtonRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shareButtonRef.current && e.target instanceof Node) {
      const shareBtn = shareButtonRef.current;

      if (shareBtn.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  return (
    <Link className={`${styles.card} card-link`} href={href} onClick={handleClick}>
      <Image
        alt={thumbnail.title}
        src={thumbnail.url}
        width={thumbnail.width}
        height={thumbnail.height}
      />
      <header className={styles.header}>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h5>{title}</h5>
        <div className={styles.meta}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Zm7 6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"
            />
          </svg>
          <span>{lastUpdated}</span>
        </div>
      </header>
      <p className={styles.content}>{children}</p>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <button className={buttonStyles.buttonLink}>
            <span></span>
            Read More
          </button>

          <div className={styles.meta}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
              />
              <path fill="currentColor" d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z" />
            </svg>
            <span>{readingTime}</span>
          </div>
        </div>

        <ShareButton href={shareUrl} buttonRef={shareButtonRef} />
      </footer>
    </Link>
  );
};

export default BlogCard;
