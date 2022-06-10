import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import PresentationBanner from "/public/images/ux-3/presentation-banner.png";
import CloseBanner from "/public/images/ux-3/close-banner.png";
import SketchImage from "/public/images/ux-3/sketch.jpg";
import JobsScreenWire from "/public/images/ux-3/jobs-wire.png";
import ProfileScreenWire from "/public/images/ux-3/profile-wire.png";
import HomePageScreenWire from "/public/images/ux-3/homepage.png";
import JobsListScreenWire from "/public/images/ux-3/jobs2.png";
import HomePageScreen from "/public/images/ux-3/homepage2.png";
import JobsListScreen from "/public/images/ux-3/jobs3.png";
import Screen1 from "/public/images/ux-3/screen1.png";
import Screen2 from "/public/images/ux-3/screen2.png";
import Screen3 from "/public/images/ux-3/screen3.png";
import Screen4 from "/public/images/ux-3/screen4.png";
import PrototypeMockup from "/public/images/ux-3/closure.png";
import Scrollspy from "react-scrollspy";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import ToTopButton from "../../components/ToTopButton";
import { goToTop } from "../../helpers/utils";

const Jobsxheroes: NextPage = () => {
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

  return (
    <div>
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sideMenu">
        <Scrollspy
          items={[
            "overview",
            "understanding",
            "low-fidelity",
            "high-fidelity",
            "reflection",
          ]}
          currentClassName="isCurrent"
          offset={-200}
        >
          <a href="#overview">Overview</a>
          <a href="#understanding">Understanding</a>
          <a href="#low-fidelity">Low Fidelity</a>
          <a href="#high-fidelity">High Fidelity</a>
          <a href="#reflection">Reflection</a>
        </Scrollspy>
      </div>
      {showTopBtn && (
        <ToTopButton className="icon-long-arrow-right" onClick={goToTop} />
      )}
      <h2 className="text-center">JobsxHeroes</h2>
      <div className="bannerSection">
        <Image
          src={PresentationBanner}
          alt="Work Background"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <Fade big>
        <section id="overview">
          <div className="contentBlock">
            <h3>&#8901; Overview &#8901;</h3>
          </div>
          <div className="contentBlock">
            <table>
              <thead>
                <tr>
                  <th>Deliverable</th>
                  <th>Role</th>
                  <th>Tool</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>native app &#38; responsive website design</td>
                  <td>UX designer / researcher</td>
                  <td>Figma</td>
                  <td>6 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contentBlock">
            <p>
              The JobsxHeroes application collects all job offers around the
              world that can potencially fit any war veteran. JxH makes great
              effort to offer the best positions for all war veterans who are
              off duty and want to reintegrate to the working market. Moreover,
              it offers a wide spectrum of employers that values the
              life-changing experience users went through.
            </p>
          </div>
        </section>
        <section id="understanding">
          <div className="contentBlock">
            <h3>&#8901; Understanding &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Problem</h5>
            <p>
              Only 30% of veterans are employed. Most of them feel discouraged
              due to disabilities, or not having any advance studies.
              Furthermore, most of employers don’t have the knowledge of the
              valuable skills these users have and tend to omit them.
            </p>
          </div>
          <div className="contentBlock highlighted">
            <h5 className="subtitle">A new design challenge</h5>
            <p>
              Design a native app and a responsive website that allows users to
              easily find a job that suits to their qualifications, necessities
              and values their personal skills and life experience.
            </p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Users&#39; pain points</h5>
          </div>
          <div className="grid grid-cols-2 contentBlock">
            <div>
              <h4>01.</h4>
              <h5 className="subtitle">Accessibility</h5>
              <p>
                There are no sites that filter job positions based on any
                situation that a war veteran might be in, such us restricted
                locations, physical disability and more.
              </p>
            </div>
            <div>
              <h4>02.</h4>
              <h5 className="subtitle">Equity</h5>
              <p>
                Most jobs descriptions are not thought for those with any
                physical impediment or age and fall for confidence in getting a
                position
              </p>
            </div>
          </div>
        </section>
        <section id="low-fidelity">
          <div className="contentBlock">
            <h3>&#8901; Low Fidelity Prototype &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Ideating &#38; sketching</h5>
            <p>
              This time I used the Crazy Eight ideation exercise. I expected
              this help me think of several ideas in a very short time -8
              minutes in this case-. With only a sheet of paper, a stylographs
              -I love&#39;em- and a timer, I let the ideas flow. As this project
              require two products, I made two sessions of crazy eights
            </p>
            <div className="relative my-6 ideationImg">
              <Image
                src={SketchImage}
                alt="Work Background"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Digital Wireframes</h5>
            <div className="flex items-center justify-between mb-14">
              <div className="w-1/2">
                <h4>01.</h4>
                <h5 className="subtitle">Jobs list</h5>
                <p>
                  After ideating and drafting some paper wireframes, I proceed
                  to create the first designs for the JobsxHeroes app. These
                  designs focused on handy and fast controls to save, view
                  location, view details or apply each application.
                </p>
              </div>
              <div className="w-1/4 wireframeImg">
                <Image
                  src={JobsScreenWire}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between">
              <div className="w-1/2 text-right">
                <h4>02.</h4>
                <h5 className="subtitle">Profile selector</h5>
                <p>
                  I wanted to address the profile selection in the designs to
                  easily change aspects of their profile to better match
                  job&#39;s expectations and requirements.
                </p>
              </div>
              <div className="w-1/4 wireframeImg">
                <Image
                  src={ProfileScreenWire}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="high-fidelity">
          <div className="contentBlock">
            <h3>&#8901; High Fidelity Prototype &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Usability studies</h5>
            <p>
              Before jumping into making the hi-fi mockups, I conducted one
              round of usability studies to see if any adjustment needed to be
              made. Some of these findings helped me in the process of
              refinement.
            </p>
          </div>
          <div className="grid grid-cols-2 contentBlock">
            <div className="">
              <h4>01.</h4>
              <p>
                People want to set multiple profiles and select them accordingly
              </p>
            </div>
            <div className="">
              <h4>02.</h4>
              <p>People want to save a job for later applications</p>
            </div>
            <div className="">
              <h4>03.</h4>
              <p>
                People had difficulty in looking for jobs under a specific
                criteria
              </p>
            </div>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">New designs</h5>
            <p>
              The homepage early concept lacked from clarity and categorization,
              making it laborious to fast search for a job. To address this, the
              first section of the screen was intended to popular jobs
              categories.
            </p>
            <div className="flex justify-around mb-14">
              <div className="w-1/2 mr-20">
                <span>Before usability studies</span>
                <div className="flex justify-center w-full">
                  <div className="w-1/2 mr-4 wireframeImg">
                    <Image
                      src={HomePageScreenWire}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                  <div className="w-1/2 wireframeImg">
                    <Image
                      src={JobsListScreenWire}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <span className="subtitle">After usability studies</span>
                <div className="flex justify-center w-full">
                  <div className="w-1/2 mr-4 wireframeImg">
                    <Image
                      src={HomePageScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                  <div className="w-1/2 wireframeImg">
                    <Image
                      src={JobsListScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p>
              Secondly, each position did not have any detail: when the user
              applied, the row dissapeared from the list, confusing the user
              wether he has already applied or not. After refinement, as the
              save functionality was implemented, each row will display a
              particular state when a user interacts with it, such as applied or
              saved.
            </p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Key Mockups</h5>
            <div className="grid w-full grid-cols-4 gap-8 my-6">
              <div className="wireframeImg">
                <Image
                  src={Screen2}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen1}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen3}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen4}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Closure</h5>
            <p>
              The final high-fidelity prototype showed a more dynamic and clear
              flow. The opportunity to conveniently change the profile
              accordingly increases user&#39;s probability to be hired.
              Condensed group of actions taken from emails apps, makes the
              experience agile and enjoyable.
            </p>
            <div className="relative w-full my-6">
              <Image
                src={PrototypeMockup}
                alt="Work Background"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
          <MainButton
            url="https://www.figma.com/proto/V2KzVY6dmOymrgj2g7bJHu/JobsxHeroes-(Copy)?node-id=18%3A227&scaling=scale-down&page-id=1%3A3&starting-point-node-id=18%3A227"
            arrowColor="black"
            text="view prototype"
            filled
          />
        </section>

        <section id="reflection">
          <div className="contentBlock">
            <h3>&#8901; Going Forward &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Impact</h5>
            <p>
              JobsxHeroes project really helped those who were considered not
              suitable for any jobs. Moreover, employers are now more aware of
              how skillful and valuable are all war veterans and how much they
              deserve a chance to grow personally and financially.
            </p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">What I learned</h5>
            <p>
              I learned that even though the problem I was trying to solve was a
              big one, diligently going through each step of the design process
              and aligning with specific user needs helped me come up with
              solutions that were both feasible and useful.
            </p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Next steps</h5>
            <div className="grid grid-cols-3 gap-12">
              <div>
                <h4>01.</h4>
                <p>
                  Conduct research on how successful the app is in reaching the
                  goal to facilitate war veterans to apply for a job.
                </p>
              </div>
              <div>
                <h4>02.</h4>
                <p>
                  Add more educational resources for users to learn about how to
                  improve job interviews or CVs.
                </p>
              </div>
              <div>
                <h4>03.</h4>
                <p>
                  Provide incentives and rewards to users for successfully
                  applying to a new post or creating a new profile.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="bannerSection">
          <Image
            src={CloseBanner}
            alt="Work Background"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Jobsxheroes;
