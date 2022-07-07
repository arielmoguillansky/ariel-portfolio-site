import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import LoadingBar from "../components/LoadingBar";
import { useState } from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
