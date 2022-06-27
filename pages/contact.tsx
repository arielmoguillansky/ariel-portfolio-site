import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import PresentationBanner from "/public/images/ux-2/presentation-banner.jpg";
import Placeholder from "/public/images/contact/map.jpg";

const ContactView = ({ handleMobileMenu, showMenu }: any) => {
  return (
    <div className="contact-view">
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleMobileMenu={handleMobileMenu} showMenu={showMenu} />
      <div className={`content-wrapper ${showMenu ? "menu-open" : ""}`}>
        <div className="contact-banner">
          <Image
            src={PresentationBanner}
            alt="Work Background"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
          <h1>Let's talk</h1>
          <form action="">
            <div className="mr-4">
              <label htmlFor="name">
                Name
                <input type="text" />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" />
              </label>
            </div>
            <label htmlFor="message">
              Anything that comes to yout mind
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
              ></textarea>
            </label>
          </form>
        </div>
        <div className="grid grid-cols-3 contact-info">
          <div className="relative map">
            <Image
              src={Placeholder}
              alt="Work Background"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
          <div className="info">
            <h3>Info</h3>
            <div>
              <i className="icon-angle-up" />
              <span>Buenos Aires, Argentina</span>
            </div>
            <a href="mailto:arielmogui92@gmail.com">
              <i className="icon-angle-up" />
              <span>arielmogui92@gmail.com</span>
            </a>
          </div>
          <div className="social">
            <h3>Social</h3>
            <a href="#">
              <i className="icon-angle-up" />
            </a>
            <a href="#">
              <i className="icon-angle-up" />
            </a>
            <a href="#">
              <i className="icon-angle-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
