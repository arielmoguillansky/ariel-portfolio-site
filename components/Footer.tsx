import Link from "next/link";
import { useRouter } from "next/router";
import CustomLink from "./CustomLink";

const Footer = () => {
  const { locale, asPath } = useRouter();
  return (
    <footer>
      <div className="contact-block">
        <h2>Ariel Moguillansky</h2>
        <div>
          <CustomLink
            customClass="mr-4"
            text="Github"
            url="https://github.com/arielmoguillansky"
          />
          <CustomLink
            text="LinkedIn"
            url="https://www.linkedin.com/in/arielmoguillansky/"
          />
        </div>
      </div>
      <div className={`language-block ${locale}`}>
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
      </div>
    </footer>
  );
};
export default Footer;
