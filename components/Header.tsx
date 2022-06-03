import Image from "next/image";
import HeaderLogo from "../public/vercel.svg";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <header>
      <div>
        <Image src={HeaderLogo} alt="Author's logo" width={70} height={70} />
      </div>
      <div className="menuLInk">
        <CustomLink text="About" url="#" />
        <CustomLink text="Contact" url="#" />
      </div>
    </header>
  );
};

export default Header;
