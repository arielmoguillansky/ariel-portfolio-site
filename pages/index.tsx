import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Typed from "react-typed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import Section1Bg from "/public/images/section1Bg.png";
import Section2Bg from "/public/images/section2Bg.png";
import Section3Bg from "/public/images/section3Bg.png";

const Home: NextPage = () => {
  const header: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <Header expand={true} />,
  };
  const backgroundColorTransition: any = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="heroBackground" />,
  };
  const heroBlock: any = {
    translateY: [0, 100],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    scale: [1, 0.7, "easeInQuad"],
    children: (
      <div className="heroContent">
        <div className="heroBlock">
          <h1>hi, i&#39;m ariel.</h1>
          <h2>
            <Typed
              strings={[
                "product designer",
                "ux analyst",
                "web developer",
                "project manager",
                "university lecturer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
      </div>
    ),
  };
  const section1Bg: any = {
    translateY: [-150, 50],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div>
        <Image src={Section1Bg} alt="Work Background" layout="responsive" />
      </div>
    ),
  };
  const section1Content: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="section1Content">
        <div>
          <h2>development</h2>
          <MainButton url="#" arrowColor="black" />
        </div>
      </div>
    ),
  };

  const section2Content: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="section2Content">
        <div>
          <h2>UX</h2>
          <MainButton url="/ux-projects" arrowColor="black" />
        </div>
      </div>
    ),
  };
  const section2Bg: any = {
    translateY: [-150, 50],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div>
        <Image src={Section2Bg} alt="Work Background" layout="responsive" />
      </div>
    ),
  };
  const section3Content: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="section3Content">
        <div>
          <h2>product design</h2>
          <MainButton url="#" arrowColor="black" />
        </div>
      </div>
    ),
  };
  const section3Bg: any = {
    translateY: [-95, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div>
        <Image
          src={Section3Bg}
          alt="Work Background"
          layout="intrinsic"
          width={1920}
          height={1080}
        />
      </div>
    ),
  };

  const section4Content: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="section3Content">
        <div>
          <h2>3D</h2>
          <MainButton url="#" arrowColor="black" />
        </div>
      </div>
    ),
  };
  return (
    <div>
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[heroBlock, backgroundColorTransition, header]}
          className="heroBlockParallax"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[section1Bg, section1Content]}
          className="section1Parallax"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[section2Bg, section2Content]}
          className="section2Parallax"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: Section3Bg.src,
              speed: -20,
            },
            section3Content,
          ]}
          className="section3Parallax"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: Section3Bg.src,
              speed: -20,
            },
            section4Content,
          ]}
          className="section3Parallax"
        ></ParallaxBanner>
      </ParallaxProvider>

      <Footer />
    </div>
  );
};

export default Home;
