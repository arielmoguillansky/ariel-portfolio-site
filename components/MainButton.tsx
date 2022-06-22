import Link from "next/link";
import { useRouter } from "next/router";

type MainButtonProps = {
  url: string;
  arrowColor?: string;
  text?: string;
  customStyle?: string;
  className?: string;
};
const MainButton = ({
  url,
  arrowColor,
  text,
  className,
  customStyle,
}: MainButtonProps) => {
  const { locale } = useRouter();
  const arrowStyle = {
    color: arrowColor,
  };

  return (
    <Link href={url}>
      <a className={`linkBox ${customStyle} ${className}`}>
        <span className="linkArrowL">
          <span className="arrowContainer">
            <i className="icon-long-arrow-right" style={arrowStyle} />
          </span>
        </span>
        <span className="linkText">
          {text || (locale === "en-US" ? "view projects" : "ver proyectos")}
        </span>
        <span className="linkArrowR">
          <span className="arrowContainer">
            <i className="icon-long-arrow-right" style={arrowStyle} />
          </span>
        </span>
      </a>
    </Link>
  );
};
export default MainButton;
