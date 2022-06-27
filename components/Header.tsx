import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../public/vercel.svg";
import CustomLink from "./CustomLink";
import { useRouter } from "next/router";

type HeaderProps = {
  expand?: boolean;
  handleMobileMenu?: any;
  showMenu?: boolean;
};

const Header = ({ expand, handleMobileMenu, showMenu }: HeaderProps) => {
  const { locale } = useRouter();

  return (
    <header className={expand ? "expanded" : ""}>
      <Link href={"/"}>
        <a>
          <Image src={HeaderLogo} alt="Author's logo" width={70} height={70} />
        </a>
      </Link>
      <div onClick={handleMobileMenu} className="hamburger-wrapper">
        <div className={`"menu btn4 ${showMenu ? "open" : ""}`} data-menu="4">
          <div className="icon"></div>
        </div>
      </div>
      <div className="nav-link-wrapper">
        <CustomLink
          text={`${locale === "en-US" ? "About" : "Acerca de"}`}
          url="/about"
        />
        <CustomLink
          text={`${locale === "en-US" ? "Contact" : "Contacto"}`}
          url="/contact"
        />
      </div>
      <div className={`mobile-menu ${showMenu ? "menu-open" : ""}`}>
        <Link href="/ux-projects">
          {locale === "en-US" ? "Projects" : "Proyectos"}
        </Link>
        <Link href="/about">{locale === "en-US" ? "About" : "Acerca de"}</Link>
        <Link href="/contact">
          {locale === "en-US" ? "Contact" : "Contacto"}
        </Link>
      </div>
    </header>
  );
};

export default Header;
