import Link from "next/link";

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
        <span className="linkText">{text || "View All Projects"}</span>
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
