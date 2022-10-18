import Link from "next/link";
import { useRouter } from "next/router";
import CustomLink from "./CustomLink";

const Footer = () => {
  const { locale, asPath } = useRouter();
  return (
    <footer>
      <div className="social-footer">
        <Link href="www.google.com">
          <i className="icon-github" />
        </Link>
        <Link href="www.google.com">
          <i className="icon-github" />
        </Link>
        <Link href="www.google.com">
          <i className="icon-github" />
        </Link>
      </div>
      <div className="contact-block">
        <span>Handcrafted by Ariel Moguillansky</span>
        <span>
          Made with <i className="icon-github" /> &amp; NextJs
        </span>
        {/* <div className={`language-block ${locale}`}>
          <span>{locale === "es-ES" ? "Sitio en " : "Site in"}</span>
          <div className={`language-selector`}>
            <Link href={asPath} locale="es-ES" scroll={false}>
              <a href="" className="language-link es-link">
                {locale === "es-ES" ? "español" : "spanish"}
              </a>
            </Link>
            <Link href={asPath} locale="en-US" scroll={false}>
              <a href="" className="language-link us-link">
                {locale === "es-ES" ? "inglés" : "english"}
              </a>
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;
