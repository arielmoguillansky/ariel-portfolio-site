import Link from "next/link";

type MainButtonProps = {
  url: string;
  arrowColor?: string;
};
const MainButton = ({ url, arrowColor }: MainButtonProps) => {
  const arrowStyle = {
    color: arrowColor,
  };
  return (
    <Link href={url}>
      <a className="linkBox">
        <span className="linkArrowL">
          <span className="arrowContainer">
            <i className="icon-long-arrow-right" style={arrowStyle} />
          </span>
        </span>
        <span className="linkText">View All Projects</span>
        <span className="linkArrowR">
          <span className="arrowContainer">
            <i className="icon-long-arrow-right" />
          </span>
        </span>
      </a>
    </Link>
  );
};
export default MainButton;
