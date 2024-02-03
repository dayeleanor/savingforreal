import Link from "next/link";
import styles from "./layout-footer.module.scss";
import Image from "next/image";
import smeClimateHub from "../../public/images/sme-climate-hub.png";

const LayoutFooter: React.FC = () => (
  <div className="bg-medium">
    <footer className={styles.footer}>
      <div>
        <h6>About</h6>
        <ul>
          <li>
            <Link href="/about">Why Competitive Insight?</Link>
            <Link href="/our-work">Our Work</Link>
          </li>
        </ul>
      </div>
      <div>
        <h6>Resources</h6>
        <ul>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <h6>Legal</h6>
        <ul>
          <li>
            <button type="button" id="open_preferences_center">
              Cookie Preferences
            </button>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/advertising-disclosure">Advertising Disclosure</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://ecologi.com/competitiveinsight?r=6432722a8f5b3fa386b2062d"
              target="_blank"
              rel="noopener noreferrer"
              title="View our Ecologi profile"
            >
              <Image
                alt="We offset our carbon footprint via Ecologi"
                src="https://api.ecologi.com/badges/cpw/6432722a8f5b3fa386b2062d?black=true&landscape=true"
                width={120}
                height={120}
              />
            </a>
          </li>
          <li>
            <Image src={smeClimateHub} alt="SME Climate Hub" width={120} />
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export default LayoutFooter;
