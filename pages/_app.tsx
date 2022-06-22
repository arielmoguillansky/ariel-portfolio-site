import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import LoadingBar from "../components/LoadingBar";
import { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(100);
  const [showMenu, setShowMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMenu(!showMenu);

    const body = document.querySelector("body");
    if (body) {
      !showMenu
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "");
    }
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
        waitingTime={2000}
        shadow={false}
      />
      <Component
        {...pageProps}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </>
  );
}

export default MyApp;
