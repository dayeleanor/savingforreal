import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
      <Script
        src="https://freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js"
        strategy="beforeInteractive"
      />
    </body>
  </Html>
);

export default Document;
