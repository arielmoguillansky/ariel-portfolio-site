import { useState, useEffect } from "react";

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{width: number | undefined, height: number | undefined}>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  if(windowSize.width && windowSize.width < 768) return true;
}



export const useToggleMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  const handleMobileMenu = () => {
    
    setShowMenu(!showMenu);

    const body = document.querySelector("body");
    if (body) {
      !showMenu
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "");
    }
  };

  return [showMenu, handleMobileMenu] as any[]
}

export const useToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return [showTopBtn, setShowTopBtn]
}