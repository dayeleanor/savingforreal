import styles from "./share-button.module.scss";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import LinkedinIcon from "react-share/lib/LinkedinIcon";
import TwitterIcon from "react-share/lib/TwitterIcon";
import WhatsappIcon from "react-share/lib/WhatsappIcon";
import EmailIcon from "react-share/lib/EmailIcon";
import RedditIcon from "react-share/lib/RedditIcon";
import WorkplaceShareButton from "react-share/lib/WorkplaceShareButton";
import WorkplaceIcon from "react-share/lib/WorkplaceIcon";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";

interface IShareButtonProps {
  href: string;
  buttonRef: RefObject<HTMLDivElement>;
}

const ShareButton: React.FC<IShareButtonProps> = ({ href, buttonRef: ref }) => {
  const [shown, setShown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = menuRef.current;

      if (menu && e.target) {
        const target = e.target as Node;

        if (menu === target || menu.contains(target)) {
          return;
        }
      }

      setShown(false);
    });
  }, []);

  const handleCopyButtonClick: React.MouseEventHandler = useCallback(() => {
    navigator.clipboard.writeText(href);
    const notifier = document.getElementById("notifier");

    if (notifier) {
      notifier.hidden = false;

      setTimeout(() => {
        notifier.hidden = true;
      }, 2500);
    }

    setShown(false);
  }, [href]);

  const handleToggleButtonClick: React.MouseEventHandler = useCallback(() => {
    setShown(!shown);
    console.log("Ok2");
  }, [shown]);

  const handleShareButtonClick: React.MouseEventHandler = useCallback(() => {
    setShown(false);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <button
        type="button"
        className={styles.button}
        title="Share Post"
        aria-label="Share Post"
        onClick={handleToggleButtonClick}
      >
        <span></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            className={styles.path}
            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
          />
        </svg>
      </button>
      <div
        ref={menuRef}
        className={shown ? styles.menu.concat(" ", styles.show) : styles.menu}
      >
        <span className="meta">Share Post</span>
        <ul>
          <li>
            <button type="button" onClick={handleCopyButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Z"
                />
              </svg>
              <span>Copy Url</span>
            </button>
          </li>
          <li>
            <FacebookShareButton url={href} onClick={handleShareButtonClick}>
              <FacebookIcon size={24} round />
              <span>Facebook</span>
            </FacebookShareButton>
          </li>
          <li>
            <LinkedinShareButton url={href} onClick={handleShareButtonClick}>
              <LinkedinIcon size={24} round />
              <span>LinkedIn</span>
            </LinkedinShareButton>
          </li>
          <li>
            <TwitterShareButton url={href} onClick={handleShareButtonClick}>
              <TwitterIcon size={24} round />
              <span>Twitter</span>
            </TwitterShareButton>
          </li>
          <li>
            <WhatsappShareButton url={href} onClick={handleShareButtonClick}>
              <WhatsappIcon size={24} round />
              <span>Whatsapp</span>
            </WhatsappShareButton>
          </li>
          <li>
            <EmailShareButton url={href} onClick={handleShareButtonClick}>
              <EmailIcon size={24} round />
              <span>Email</span>
            </EmailShareButton>
          </li>
          <li>
            <RedditShareButton url={href} onClick={handleShareButtonClick}>
              <RedditIcon size={24} round />
              <span>Reddit</span>
            </RedditShareButton>
          </li>
          <li>
            <WorkplaceShareButton url={href} onClick={handleShareButtonClick}>
              <WorkplaceIcon size={24} round />
              <span>Workplace</span>
            </WorkplaceShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareButton;
