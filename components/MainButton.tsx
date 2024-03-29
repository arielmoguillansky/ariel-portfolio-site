import Link from "next/link";
import { useRouter } from "next/router";

type MainButtonProps = {
  url: string;
  arrowColor?: string;
  text?: string;
  customStyle?: string;
  className?: string;
  download?: boolean;
};
const MainButton = ({
  url,
  arrowColor,
  text,
  className,
  customStyle,
  download,
}: MainButtonProps) => {
  const { locale } = useRouter();
  const arrowStyle = {
    color: arrowColor,
  };

  return download ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`linkBox ${customStyle || ""} ${className}`}
      download={download}
    >
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
  ) : (
    <Link href={url}>
      <a className={`linkBox ${customStyle || ""} ${className}`}>
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
