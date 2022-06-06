import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import LoadingBar from "../components/LoadingBar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(100);

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
