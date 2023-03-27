import { useEffect, useState } from "react";
import useBreakpoint from "../hooks/useBreakpoints";

const GridLayout = (): JSX.Element => {
  const breakpoint = useBreakpoint();
  const [ncol, setncol] = useState(12);
  useEffect(() => {
    switch (breakpoint) {
      case "2xl":
        setncol(12);
        break;
      case "xl":
      case "lg":
        setncol(6);
        break;
      default:
        setncol(4);
        break;
    }
  }, [breakpoint]);
  return (
    <div className="grid-holder">
      {[...Array(ncol)].map((e, i) => {
        return <div className="col" key={i} />;
      })}
    </div>
  );
};

export default GridLayout;
