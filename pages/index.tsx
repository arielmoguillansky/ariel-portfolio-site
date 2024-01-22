import type { NextPage } from "next";
import Image from "next/image";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Typed from "react-typed";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import UxBG from "/public/images/ux-bg.png";
import ProductBg from "/public/images/product-bg.png";
import RenderBg from "/public/images/render-bg.png";
import { useRouter } from "next/router";
import { useToggleMenu, useWindowSize } from "../helpers/hooks";
import Footer from "../components/Footer";
import GridLayout from "../components/GridLayout";
import TextLoop from "react-text-loop";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import { RotatingText } from "../components/RotatingText";
const indexContent: { [key: string]: any } = {
  "en-US": {
    heroTitle: "I am",
    heroSubtitle: [
      "web developer",
      "product designer",
      "ux analyst",
      "dev ops",
      "project manager",
      "university lecturer",
    ],
    content: [
      {
        development: "development",
        id: "industrial design",
        imageUrl: "",
      },
    ],
  },

  "es-ES": {
    heroTitle: "Yo soy.",
    heroSubtitle: [
      "desarrollador",
      "diseñador industrial",
      "dev ops",
      "analista UX",
      "project manager",
      "docente universitario",
    ],
    content: [
      {
        title:
          "El nuevo asistente de Otter.ai puede transcribir automáticamente sus reuniones de Zoom",
        synopsis:
          "El servicio de transcripción de voz con tecnología de inteligencia artificial Otter.ai quiere facilitar aún más a sus usuarios comerciales la grabación de sus reuniones. La compañía presenta hoy una nueva función, Otter Assistant, que ...",
        imageUrl: "",
      },
    ],
  },
};

const codeTyping = [
  "<p>export function useLocalStorage	&#60;T&#62;(key: string, initialValue: T) {<br><em>const</em> [storedValue, setStoredValue] = useState &#60;T&#62;(() => {<br>if (typeof window === 'undefined') { return initialValue }</p><p> try {<br><em>const</em> item = window.localStorage.getItem(key)</p><p> return item ? JSON.parse(item) : initialValue<br>} catch (e) {<br>console.error(e)<br>return initialValue<br>}<br>})",
  "<p>class NewService<br/>def self.get_session_token!  <br/>response = onnection.post do |req|<br/>req.options.timeout = 120<br/>req.url api_path<br/>req.headers['Content-Type'] = application/json'<br/>req.body = {<br/>id: '13576991614322',<br/>method: 'authenticate',<br/>params: [ENV_SERVICE_USERNAME'], ENV['SERVICE_PASSWORD']],<br/>dataContext: 'json',<br/>jsonrpc: '2.0'<br/>}.to_json<br/>end<br/><br/>if response.status == 200<br/>session = ServiceSession.new(response.body)<br/>",
];

const Home: NextPage = () => {
  const { locale } = useRouter();
  const { heroTitle, heroSubtitle } = indexContent[locale ?? "en-US"];
  const isMobile = useWindowSize();
  const [showMenu, handleMobileMenu] = useToggleMenu();
  const [index, setIndex] = useState(0);

  const header: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Header
        expand={true}
        handleMobileMenu={handleMobileMenu}
        showMenu={showMenu}
      />
    ),
  };

  const footer: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <Footer />,
  };
  const heroBg: any = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="hero-bg" />,
  };
  const heroBlock: any = {
    translateY: [0, 100],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    scale: [1, 0.7, "easeInQuad"],
    children: (
      <div className={`hero-content ${showMenu ? "menu-open" : ""}`}>
        <div className="hero-text">
          <div className="flex-col top-titles-container">
            <RotatingText
              rotatingTextContent={["I am", "Io sono", "Yo soy"] || []}
              duration={4532}
            />
            <RotatingText
              rotatingTextContent={
                [
                  "development",
                  "arquitectura",
                  "creativity",
                  "design",
                  "automatización",
                  "performance",
                  "code",
                  "programacion",
                ] || []
              }
              duration={2000}
            />
          </div>
        </div>
      </div>
    ),
  };
  const devSectionBg: any = {
    translateY: isMobile ? [-60, 120] : [-10, 50],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="code-animation-container">
        <Typed strings={codeTyping} typeSpeed={40} fadeOut loop />
        {/* <Image src={UxBG} alt="Work Background" layout="responsive" /> */}
      </div>
    ),
  };
  const devSectionContent: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="dev-section-content">
        <div>
          <h2> {locale === "es-ES" ? "desarrollo" : "development"}</h2>
          <MainButton url="/development" arrowColor="black" />
        </div>
      </div>
    ),
  };
  const uxSectionContent: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="ux-section-content">
        <div>
          <h2>UX</h2>
          <MainButton url="/ux-projects" arrowColor="black" />
        </div>
      </div>
    ),
  };
  const uxSectionBg: any = {
    translateY: isMobile ? [-30, 120] : [-0, 60],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="relative block w-full m-auto ux-bg-parallax">
        <Image
          src={UxBG}
          alt="Work Background"
          layout="intrinsic"
          width={2541 / 3}
          height={1610 / 3}
        />
      </div>
    ),
  };
  const productSectionContent: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="product-section-content">
        <div>
          <h2>
            {" "}
            {locale === "es-ES" ? "diseño de producto" : "product design"}
          </h2>
          <h3>{locale === "es-ES" ? "proximamente" : "coming soon"}</h3>
          {/* <MainButton url="#" arrowColor="black" /> */}
        </div>
      </div>
    ),
  };
  const productSectionBg: any = {
    translateY: isMobile ? [-30, 120] : [-10, 60],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="float-right">
        <Image
          src={ProductBg}
          alt="Work Background"
          layout="intrinsic"
          width={1247}
          height={678}
        />
      </div>
    ),
  };
  const renderSectionBg: any = {
    translateY: isMobile ? [-80, 50] : [-30, 20],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="float-right md:mr-16">
        <Image
          src={RenderBg}
          alt="Work Background"
          layout="intrinsic"
          width={439}
          height={1030}
        />
      </div>
    ),
  };
  const renderSectionContent: any = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="render-section-content">
        <div>
          <h2>3D</h2>
          <h3>{locale === "es-ES" ? "proximamente" : "coming soon"}</h3>
          {/* <MainButton url="#" arrowColor="black" /> */}
        </div>
      </div>
    ),
  };
  return (
    <div className="main-view">
      <div className="row">
        <div className="box">
          <div>
            <h1>Hey!</h1>
            <h1>While Im building this page, relax</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <h2>its me, Ariel</h2>
        </div>
        <div className="box">
          <h2>a developer, devops, pm & designer</h2>
        </div>
      </div>
      <div className="row">
        <a className="box link" href="development">
          development
        </a>
        <a className="box link" href="ux-projects">
          UX/UI projects
        </a>
        <a className="box link" href="https://github.com/arielmoguillansky">
          github
        </a>
      </div>
      {/* <ParallaxProvider>
        <GridLayout />
        <ParallaxBanner layers={[heroBlock]} className="hero-block" />
        <ParallaxBanner layers={[footer]} />
        <ParallaxBanner
          layers={[heroBlock, heroBg, header]}
          className="hero-block"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[uxSectionBg, uxSectionContent]}
          className="ux-section parallax-wrapper"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[devSectionBg, devSectionContent]}
          className="dev-section parallax-wrapper"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[productSectionBg, productSectionContent]}
          className="product-section parallax-wrapper"
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[renderSectionBg, renderSectionContent]}
          className="render-section parallax-wrapper"
        ></ParallaxBanner>
      </ParallaxProvider> */}
    </div>
  );
};

export default Home;
