import Link from "next/link";

type CustomLinkProps = {
  url: string;
  text: string;
  customClass?: string;
};
const CustomLink = ({ url, text, customClass }: CustomLinkProps) => {
  return (
    <Link href={url}>
      <a
        href={url}
        className={`custom-link ${customClass}`}
        rel="noopener noreferrer"
      >
        {text}
        <span className="underlineLink" />
      </a>
    </Link>
  );
};
export default CustomLink;
