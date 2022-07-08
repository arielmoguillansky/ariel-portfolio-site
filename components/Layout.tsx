import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useToggleMenu } from "../helpers/hooks";
import Footer from "./Footer";
import Header from "./Header";
import LoadingBar from "./LoadingBar";

const Layout = ({ children }: any): JSX.Element => {
  const [progress, setProgress] = useState(100);
  const router = useRouter();
  const [showMenu, handleMobileMenu] = useToggleMenu();

  const url = router.pathname.split("/")[1];

  return (
    <div style={{ overflow: "hidden" }} className="relative">
      <LoadingBar
        color="#f9aa33"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
        waitingTime={2000}
        shadow={false}
      />
      <Head>
        <title>Ariel Moguillansky</title>
        <meta
          name="description"
          content="An awesome website of Ariel Moguillansky by himself"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="theme-color" content="#212427" />
      </Head>
      {router.pathname !== "/" && (
        <Header showMenu={showMenu} handleMobileMenu={handleMobileMenu} />
      )}
      <main className={`${url}-view  ${showMenu ? "menu-open" : ""}`}>
        {children}
      </main>
      {router.pathname !== "/contact" && <Footer />}
    </div>
  );
};

export default Layout;
