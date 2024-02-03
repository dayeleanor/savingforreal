import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./layout-navbar.module.scss";
import ServicesMenu from "./menus/services-menu";
import logoImg from "../../public/assets/logo.png";
import MobileShowMoreButton from "./menus/mobile-show-more-button";

const TEST_MENU = false;

type MenuFadeHandler = {
  name: string;
  timer: any;
};

const LayoutNavBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [showMore, setShowMore] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [fadingHandler, setFadingMenuHandler] = useState<MenuFadeHandler | null>(null);

  useEffect(() => {
    const scroller = () => {
      const body = document.body;
      const container = containerRef.current;

      if (container) {
        if (window.scrollY >= 100) {
          body.classList.add("shrink");
        } else if (window.scrollY < 80) {
          body.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", scroller);

    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  const setSubListShown = (item: HTMLLIElement, show: boolean) => {
    const menus = item.getElementsByClassName(styles.menu);
    setShowMore(show);

    if (menus.length > 0) {
      const menu = menus.item(0) as HTMLElement;

      if (menu) {
        if (show) {
          // show it!
          if (fadingHandler) {
            clearTimeout(fadingHandler.timer);
            menu.setAttribute("hidden", "");
            setFadingMenuHandler(null);
          }
          menu.removeAttribute("hidden");
        } else {
          if (window.innerWidth < 576) {
            menu.setAttribute("hidden", "");
          } else {
            setFadingMenuHandler({
              name: menu.dataset.name || "",
              timer: setTimeout(() => {
                menu.setAttribute("hidden", "");
              }, 251),
            });
          }
        }
      }
    }
  };

  const handleItemEnter: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      const item = e.currentTarget;
      setSubListShown(item, true);
    }
  };

  const handleItemLeave: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (TEST_MENU) {
      return;
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      const item = e.currentTarget;
      setSubListShown(item, false);
    }
  };

  const openBurgerMenu = () => {
    setBurgerMenuOpen(true);
    document.body.classList.add("mobile-menu");
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);

    if (containerRef.current) {
      const menus = Array.from(containerRef.current.getElementsByClassName(styles.menu));
      menus.forEach((menu) => menu.setAttribute("hidden", ""));
    }

    document.body.classList.remove("mobile-menu");
  };

  const containerClasses = [styles.container];

  if (burgerMenuOpen) {
    containerClasses.push(styles.open);
  }

  if (TEST_MENU) {
    containerClasses.push(styles.forceShow);
  }

  return (
    <>
      {burgerMenuOpen && (
        <button
          type="button"
          onClick={closeBurgerMenu}
          className={styles.fadedBackground}
          title="Close Menu"
          aria-label="Close Menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z" />
          </svg>
        </button>
      )}

      <div className={styles.mobileToggleBar}>
        <button
          type="button"
          className={styles.burgerMenuButton}
          onClick={openBurgerMenu}
          title="Open Menu"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>
        <Link href="/services">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 10v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2h1m0 16V8H5v11h14M9 14v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2Z" />
          </svg>
          <span>Book a Meeting</span>
        </Link>
      </div>
      <div ref={containerRef} className={containerClasses.join(" ")}>
        <nav className={styles.navBar} aria-label="Website navigation">
          <Link className={styles.logoContainer} href="/">
            <Image src={logoImg} alt="Logo" width={200} height={46} draggable={false} />
          </Link>
          <ul className={styles.navList}>
            <li className={styles.item}>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/our-work">
                <span>Our Work</span>
              </Link>
            </li>
            {/* <li
              data-name="services"
              className={styles.item}
              role="presentation"
              onMouseEnter={handleItemEnter}
              onMouseLeave={handleItemLeave}
            >
              <Link href="/services" className="md-up">
                <span>Services</span>
              </Link>
              {burgerMenuOpen && (
                <MobileShowMoreButton
                  onShowMore={setSubListShown}
                  label="Services"
                  showMore={showMore}
                />
              )}
              <ServicesMenu hidden={!TEST_MENU} />
            </li>
             <li className={styles.item}>
              <Link href="/services">
                <span>Industries</span>
              </Link>
              </li> */}
            <li className={styles.item}>
              <Link href="/pricing">
                <span>Pricing</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/about">
                <span>About</span>
              </Link>
            </li>
          </ul>
          <div className={styles.item + " " + styles.bookMeeting}>
            <Link href="https://calendly.com/eleanorbennett/30min">
              <span>Book A Meeting</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LayoutNavBar;
