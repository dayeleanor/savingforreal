import NProgress from "nprogress";
import { Inter, DM_Sans } from "@next/font/google";

// Import CSS:
const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["500", "700"], subsets: ["latin"] });
import "../styles/site.scss";
import "nprogress/nprogress.css";

// Import Types:
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleBeforeChange = (newUrl: string) => {
      const oldUrl = window.location.pathname;

      if (oldUrl !== newUrl) {
        document.body.classList.remove("mobile-menu");
      }
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    router.events.on("beforeHistoryChange", handleBeforeChange);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  return (
    <>
      <style jsx global>{`
        :root {
          --standard-font: ${inter.style.fontFamily};
          --header-font: ${dmSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
