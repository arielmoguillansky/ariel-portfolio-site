import Link from "next/link";

type CustomLinkProps = {
  url: string;
  text: string;
};
const CustomLink = ({ url, text }: CustomLinkProps) => {
  return (
    <Link href={url}>
      <a href={url} className="customLink" rel="noopener noreferrer">
        {text}
        <span className="underlineLink" />
      </a>
    </Link>
  );
};
export default CustomLink;
