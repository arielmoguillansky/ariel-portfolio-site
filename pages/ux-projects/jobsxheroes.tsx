import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import CardPlaceholder from "/public/images/Mechh.png";
import SketchImage from "/public/images/ux-1/ideation.jpg";
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
          src={CardPlaceholder}
          alt="Work Background"
          layout="fill"
          objectFit="cover"
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
              JobsxHeroes collects all job offers around the world. JxH strives
              to offer the best positions for all war veterans who are off duty.
              It offers a wide spectrum of employers and positions that values
              the life-changing experience users went through.
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
              Only 30% of veterans are able to be re-inserted in a job. Most of
              them feel discouraged due to disabilities, or not having a degree.
              Most of employers don’t have the knowledge of the valuable skills
              these users have and tend to omit them.
            </p>
          </div>
          <div className="contentBlock highlighted">
            <h5 className="subtitle">A new design challenge</h5>
            <p>
              Design a responsive website that allows users to easily find a job
              that adjusts to their necessities and find positions that values
              their personal skills and life experience.
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
                situation a war veteran might be in, such us restricted
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
              I did a quick ideation exercise to come up with ideas for how to
              address gaps identified in the competitive audit. My focus was
              specifically on fast application and display location.
            </p>
            <div className="relative my-6 ideationImg">
              <Image
                src={SketchImage}
                alt="Work Background"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Digital Wireframes</h5>
            <div className="flex items-center justify-between mb-14">
              <div className="w-1/4">
                <h4>01.</h4>
                <h5 className="subtitle">Jobs list</h5>
                <p>
                  After ideating and drafting some paper wireframes, I created
                  the initial designs for the JobsxHeroes app. These designs
                  focused on handy and fast controls to save, view location,
                  view details or apply each application.
                </p>
              </div>
              <div className="w-1/4 wireframeImg">
                <Image
                  src={JobsScreenWire}
                  alt="Work Background"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between">
              <div className="w-1/4 text-right">
                <h4>02.</h4>
                <h5 className="subtitle">Profile selector</h5>
                <p>
                  Profile selection was a key user need to address in the
                  designs to easily change aspects of their profile to better
                  match job&#39;s expectations and requirements
                </p>
              </div>
              <div className="w-1/4 wireframeImg">
                <Image
                  src={ProfileScreenWire}
                  alt="Work Background"
                  layout="responsive"
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
              I conducted one round of usability studies. Findings helped guide
              the designs from wireframes to mockups and refine the design in
              the high fidelity construction.
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
              Early designs offered only email and password access, but users
              find PIN auth easier when opening the app oftenly.
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
                    />
                  </div>
                  <div className="w-1/2 wireframeImg">
                    <Image
                      src={JobsListScreenWire}
                      alt="Work Background"
                      layout="responsive"
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
                    />
                  </div>
                  <div className="w-1/2 wireframeImg">
                    <Image
                      src={JobsListScreen}
                      alt="Work Background"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p>
              In second order, possibilities studies revealed that was not easy
              for user to pick a provider. Having dozen of providers they had to
              remember which one they used last time. So some sorting and
              grouping was needed.
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
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen1}
                  alt="Work Background"
                  layout="responsive"
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen3}
                  alt="Work Background"
                  layout="responsive"
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen4}
                  alt="Work Background"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Closure</h5>
            <p>
              The final high-fidelity prototype presented cleaner user flows for
              fast restocking and checkout. It also meet user needs multiple
              item selections, fast PIN auth and a dedicated search
              functionality.{" "}
            </p>
            <div className="relative w-full my-6">
              <Image
                src={PrototypeMockup}
                alt="Work Background"
                layout="responsive"
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
      </Fade>
      <Footer />
    </div>
  );
};

export default Jobsxheroes;
