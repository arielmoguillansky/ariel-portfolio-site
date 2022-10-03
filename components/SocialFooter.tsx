import Link from "next/link";
import { useRouter } from "next/router";
import CustomLink from "./CustomLink";

const SocialFooter = () => {
  const { locale, asPath } = useRouter();
  return (
    <div className="social-footer">
      <ul>
        <li>
          <Link href="www.google.com">
            <i className="icon-github" />
          </Link>
        </li>
        <li>
          <Link href="www.google.com">
            <i className="icon-github" />
          </Link>
        </li>
        <li>
          <Link href="www.google.com">
            <i className="icon-github" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SocialFooter;
