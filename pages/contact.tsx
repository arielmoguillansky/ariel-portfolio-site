import Image from "next/image";
import PresentationBanner from "/public/images/ux-2/presentation-banner.jpg";
import { useEffect, useState } from "react";

const ContactView = ({ showMenu }: any) => {
  const [inputValue, setInputValue] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(Object.values(inputValue).every((v: any) => v.length > 0));
  }, [inputValue]);

  const handleInput = (e: any) => {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("SUBMIT", inputValue);
  };
  return (
    <div className={`content-wrapper ${showMenu ? "menu-open" : ""}`}>
      <div className="contact-banner">
        <Image
          src={PresentationBanner}
          alt="Work Background"
          layout="fill"
          objectFit="contain"
          placeholder="blur"
        />
      </div>
      <div className="container info-wrapper">
        <div>
          <h1>Let&#39;s talk</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="form-group">
                <input
                  className={inputValue.name ? "has-value" : ""}
                  type="text"
                  name="name"
                  onChange={(e) => handleInput(e)}
                />
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={inputValue.email ? "has-value" : ""}
                  onChange={(e) => handleInput(e)}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
            </div>
            <div className="flex flex-col-reverse mb-6 form-group">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={3}
                className="w-full"
                onChange={(e) => handleInput(e)}
              />
              <label htmlFor="message" className="!relative">
                Anything that comes to your mind
              </label>
            </div>
            <div className="relative h-10 xl:h-16">
              <button
                type="submit"
                className={isSubmitted ? "submit-animation" : ""}
                disabled={!isActive}
              >
                SEND
                <i
                  className={`icon-paper-plane ${
                    isSubmitted ? "submit-animation" : ""
                  }`}
                />
                <i
                  className={`icon-check ${
                    isSubmitted ? "submit-animation-check" : ""
                  }`}
                />
              </button>
            </div>
          </form>
        </div>

        <div className="social-wrapper">
          <div className="location-mail">
            <i className="icon-pin-drop" />
            <span>Buenos Aires, Argentina</span>
            <a href="mailto:arielmogui92@gmail.com">
              <i className="icon-envelope" />
              <span>arielmogui92@gmail.com</span>
            </a>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/arielmoguillansky/">
              <i className="icon-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/arielmoguillansky/">
              <i className="icon-linkedin" />
            </a>
            <a href="https://github.com/arielmoguillansky">
              <i className="icon-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
