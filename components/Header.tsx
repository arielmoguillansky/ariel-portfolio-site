import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../public/vercel.svg";
import CustomLink from "./CustomLink";

type HeaderProps = {
  expand?: boolean;
};

const Header = ({ expand }: HeaderProps) => {
  return (
    <header className={expand ? "expanded" : ""}>
      <Link href={"/"}>
        <a>
          <Image src={HeaderLogo} alt="Author's logo" width={70} height={70} />
        </a>
      </Link>
      <div className="menuLInk">
        <CustomLink text="About" url="#" />
        <CustomLink text="Contact" url="#" />
      </div>
    </header>
  );
};

export default Header;
