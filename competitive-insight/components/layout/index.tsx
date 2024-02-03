import Head from "next/head";
import LayoutFooter from "./layout-footer";
import Notifier from "../notifier";
import LayoutNavBar from "./layout-navbar";
import Script from "next/script";
import SpecialOfferBar from "./special-offer-bar";

interface ILayoutProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const jsonLinkedData = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: process.env.NEXT_PUBLIC_SITE_NAME,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/logo.png`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

const Layout: React.FC<ILayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{`${title} | ${jsonLinkedData.name}`}</title>
      <meta name="description" content={jsonLinkedData.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/assets/ci-logo.png" type="image/png" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={jsonLinkedData.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={jsonLinkedData.description} />
      <meta property="og:image" content={jsonLinkedData.logo} />
      <meta property="og:url" content={jsonLinkedData.url} />
      <meta
        name="version"
        content={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "local"}
      />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLinkedData) }}
      />
    </Head>
    <SpecialOfferBar />
    <LayoutNavBar />
    <div id="page">
      <main>{children}</main>
    </div>
    <Notifier />
    <LayoutFooter />
    <Script id="load-tawk">
      {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/654662bda84dd54dc4888fab/1hedf3dh7';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`}
    </Script>
    <Script id="load-cookieconsent">
      {`cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"light","language":"en","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Competitive Insight","website_privacy_policy_url":"https://www.competitiveinsight.io/privacy-policy"});`}
    </Script>
  </>
);

export default Layout;
