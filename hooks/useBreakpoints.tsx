import { createBreakpoint } from "react-use";

// sm: '640px',
// md: '768px',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1536px',

const breakpoints = {
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
};
const useBreakpoint = createBreakpoint(breakpoints);

export default useBreakpoint;
