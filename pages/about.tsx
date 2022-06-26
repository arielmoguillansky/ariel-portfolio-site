import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PresentationBanner from "/public/images/ux-2/presentation-banner.jpg";
import UXIcon from "/public/images/about/UI.svg";
import DesignIcon from "/public/images/about/Design.svg";
import DevIcon from "/public/images/about/Development.svg";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

const AboutView = ({ handleMobileMenu, showMenu }: any) => {
  const { locale } = useRouter();

  return (
    <div className="about-view">
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleMobileMenu={handleMobileMenu} showMenu={showMenu} />
      <div className="about-banner">
        <h1>who is he?</h1>
        <div>
          <Image
            src={PresentationBanner}
            alt="Work Background"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
      <div className={`content-wrapper ${showMenu ? "menu-open" : ""}`}>
        <Fade big>
          <div className="container about-section">
            <h3>Finally, nice to meet you!</h3>
            <p>
              I am Ariel Moguillansky an Industrial Designer, developer &#38; UX
              researcher in Buenos Aires, Argentina. That&#39;s right, all of
              that. But I prefer to just call myself a creative developer &#38;
              an analytic designer. Don&#39;t worry, I will make it more clear
              soon.
            </p>
            <p>
              In my free time you can find me practicing basketball or maybe
              playing a football match with my friends. It&#39;s not only
              sports, but I also find pleasure in reading novels, playing video
              games and having new culinary experiences - I really love food,
              who doesn&#39;t right? -
            </p>
          </div>
          <div className=" about-section profile">
            <div className="wrapper">
              <h3>What do I do</h3>
              <div className="container content">
                <div>
                  <div className="image-wrapper">
                    <Image
                      src={UXIcon}
                      alt="Work Background"
                      layout="fixed"
                      width={183}
                      height={150}
                    />
                  </div>
                  <h4>UX</h4>
                  <p>
                    Addressing users digital needs and struggles by tackling a
                    whole design challenge - from Discover to Deliver.
                  </p>
                  <span>Tools</span>
                  <ul>
                    <li>AdobeXD</li>
                    <li>Figma</li>
                    <li>FlowMapp</li>
                    <li>InVision</li>
                    <li>Balsamiq</li>
                  </ul>
                </div>
                <div>
                  <div className="image-wrapper">
                    <Image
                      src={DesignIcon}
                      alt="Work Background"
                      layout="fixed"
                      width={183}
                      height={150}
                    />
                  </div>
                  <h4>Industrial Design</h4>
                  <p>
                    Create innovative, thoughtful and user centered products
                    that have social and environmental impact.
                  </p>
                  <span>Tools</span>
                  <ul>
                    <li>3D Max</li>
                    <li>SolidWorks</li>
                    <li>Blender</li>
                    <li>V-Ray</li>
                    <li>Keyshot</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Cinema 4D</li>
                    <li>Substance</li>
                  </ul>
                </div>
                <div>
                  <div className="image-wrapper">
                    <Image
                      src={DevIcon}
                      alt="Work Background"
                      layout="fixed"
                      width={183}
                      height={150}
                    />
                  </div>
                  <h4>Development</h4>
                  <p>
                    Build powerful sites &#38; apps. By looking to performance,
                    I keep my code clean, modern &#38; concise.
                  </p>
                  <span>Languagess</span>
                  <ul>
                    <li>JavaScript</li>
                    <li>Ruby</li>
                    <li>PHP</li>
                  </ul>
                  <span>Tools &#38; Frameworks</span>
                  <ul>
                    <li>Rails</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>VueJs</li>
                    <li>CodeIgniter</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Docker</li>
                    <li>NodeJs</li>
                    <li>Apache</li>
                    <li>Webpack</li>
                    <li>HTML5</li>
                    <li>CSS &#38; pre preprocessors</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container about-section studies">
            <h3>What did I studied</h3>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>Google UX Design</h4>
                  <span>
                    <b>Professional Certification</b> by Google &#38; Coursera
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2022</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>Project Management</h4>
                  <span>
                    <b>Postgraduate degree</b> by Universidad Tecnológica
                    Nacional
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2022</span>
                <span>2021</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>UX/UI</h4>
                  <span>
                    <b>Professional Certification</b> by EducaciónIT
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2020</span>
                <span>2019</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>Advance Full Stack</h4>
                  <span>
                    <b>Professional Certification</b> by MindHub
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2019</span>
              </div>
            </div>
            <div className="study-block">
              <div className="flex items-center">
                <div className="">
                  <h4>Industrial Design</h4>
                  <span>
                    <b>Degree</b> by Universidad de Buenos Aires
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2018</span>
                <span>2013</span>
              </div>
            </div>
          </div>
          <div className="container about-section studies">
            <h3>Experience</h3>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>42i</h4>
                  <span>Software Developer</span>
                </div>
              </div>
              <div className="study-year">
                <span>now</span>
                <span>2020</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>University Lecturer</h4>
                  <span>Universidad de Buenos Aires</span>
                </div>
              </div>
              <div className="study-year">
                <span>now</span>
                <span>2019</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div className="">
                  <h4>Educabot</h4>
                  <span>Web Developer</span>
                </div>
              </div>
              <div className="study-year">
                <span>2019</span>
              </div>
            </div>
          </div>
          <div className="container about-section skills">
            <h3>What did I learn &#38; skill</h3>
            <ul>
              <li>Design systems</li>
              <li>Providers management</li>
              <li>User research</li>
              <li>Market analysis</li>
              <li>Prototyping</li>
              <li>Costs auditory &#38; analysis</li>
              <li>Objected-oriented programming &#38; abstractions</li>
              <li>Timeline &#38; communication management</li>
              <li>Web performance optimization</li>
              <li>Web security</li>
              <li>Design thinking</li>
              <li>Production sites maintenance</li>
            </ul>
          </div>
          <div className="container about-section skills">
            <h3>Next steps</h3>
            <ul>
              <li>VR/AR Technologies</li>
              <li>Flutter</li>
              <li>Swift</li>
              <li>Python</li>
              <li>C++</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div className="container about-section skills">
            <h3>What about other languages</h3>
            <ul>
              <li>English</li>
              <li>Spanish</li>
              <li>Italian</li>
            </ul>
          </div>
          <div className="about-section resume">
            <div className="container">
              <h3>Like my profile?</h3>
              <MainButton
                url={
                  locale === "en-US"
                    ? "/public/files/cv-english.pdf"
                    : "/public/files/cv-spanish.pdf"
                }
                text={locale === "en-US" ? "Download resume" : "Descarga CV"}
                className="boxifyyellow"
                download
              />
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default AboutView;
