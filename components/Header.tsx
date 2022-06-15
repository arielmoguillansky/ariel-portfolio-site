import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../public/vercel.svg";
import CustomLink from "./CustomLink";
import { useRouter } from "next/router";

type HeaderProps = {
  expand?: boolean;
};

const Header = ({ expand }: HeaderProps) => {
  const { locale, asPath } = useRouter();
  return (
    <header className={expand ? "expanded" : ""}>
      <Link
        className={locale === "es-ES" ? "active" : ""}
        href={asPath}
        locale="es-ES"
      >
        es-ES
      </Link>

      <Link
        className={locale === "es-ES" ? "active" : ""}
        href={asPath}
        locale="en-US"
      >
        en-US
      </Link>
      <Link href={"/"}>
        <a>
          <Image src={HeaderLogo} alt="Author's logo" width={70} height={70} />
        </a>
      </Link>
      <div className="menuLInk">
        <CustomLink
          text={`${locale === "en-US" ? "About" : "Acerca de"}`}
          url="#"
        />
        <CustomLink
          text={`${locale === "en-US" ? "Contact" : "Contacto"}`}
          url="#"
        />
      </div>
    </header>
  );
};

export default Header;
