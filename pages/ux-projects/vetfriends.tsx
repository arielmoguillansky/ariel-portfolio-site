import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import PresentationBanner from "/public/images/ux-2/presentation-banner.jpg";
import CloseBanner from "/public/images/ux-2/close-banner.jpg";
import SketchImage from "/public/images/ux-2/sketch.jpg";
import ScheduleScreenWire from "/public/images/ux-2/schedule-wire.png";
import LocationScreenWire from "/public/images/ux-2/location-wire.png";
import BookingWireScreen from "/public/images/ux-2/booking-wire.png";
import BookingScreen from "/public/images/ux-2/booking.png";
import PetSelectionScreen from "/public/images/ux-2/pet-selector.png";
import Screen1 from "/public/images/ux-2/screen1.png";
import Screen2 from "/public/images/ux-2/screen2.png";
import Screen3 from "/public/images/ux-2/screen3.png";
import Screen4 from "/public/images/ux-2/screen4.png";
import Screen5 from "/public/images/ux-2/screen5.png";
import Screen6 from "/public/images/ux-2/screen6.png";
import PrototypeMockup from "/public/images/ux-2/prototype.png";
import Scrollspy from "react-scrollspy";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import ToTopButton from "../../components/ToTopButton";
import { goToTop } from "../../helpers/utils";

const VetFriends: NextPage = () => {
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
    <div className="vetfriends">
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
      <h2 className="text-center">VetFriends</h2>
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
                  <td>responsive website design</td>
                  <td>UX designer / researcher</td>
                  <td>Adobe XD</td>
                  <td>3 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contentBlock">
            <p>
              VetFriends groups all vet clinics &#38; stores distributed in a
              whole country. The VF clinics website intends to offer superb care
              to all pets and confidence to their owners. It offers a wide
              spectrum of specialists and studies, with focus on a reliable
              online appointment booking. VetFriends responsive website, targets
              all owners who wants to give their pets special care without
              messing their agenda.
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
              Pet owners find difficult to look for a vet clinic near to their
              current location that has a doctor available to a specific
              date-time and not have to wait.
            </p>
          </div>
          <div className="contentBlock highlighted">
            <h5 className="subtitle">A new design challenge</h5>
            <p>
              Design a responsive website that allows users to easily booking an
              appointment with a specialist in a vet hospital that is near their
              location.
            </p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Users&#39; pain points</h5>
          </div>
          <div className="grid grid-cols-2 contentBlock">
            <div>
              <h4>01.</h4>
              <h5 className="subtitle">Time</h5>
              <p>
                Pet owners often waste time looking for a vet near their current
                location.
              </p>
            </div>
            <div>
              <h4>02.</h4>
              <h5 className="subtitle">Trust</h5>
              <p>
                Owners usually wants to entrust their pets to someone they know
                and have confidence in their experience
              </p>
            </div>
            <div>
              <h4>03.</h4>
              <h5 className="subtitle">Scheduling</h5>
              <p>Doctors have limited schedule and varies from location.</p>
            </div>
            <div>
              <h4>04.</h4>
              <h5 className="subtitle">Accessibility</h5>
              <p>
                Some doctors are specialist in rare species or only make
                particular studies.
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
              Taking the time to draft iterations of each screen of the app on
              paper ensured that the elements that made it to digital wireframes
              would be well-suited to address user pain points. For the home
              screen, I prioritized an easy booking process to help users save
              time.
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
              <div className="w-1/4">
                <h4>01.</h4>
                <h5 className="subtitle">Booking</h5>
                <p>
                  As the initial design phase continued, I made sure to base
                  screen designs on easy visualization of the vet’s agenda.
                </p>
              </div>
              <div className="w-2/3 wireframeImg">
                <Image
                  src={ScheduleScreenWire}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between">
              <div className="w-1/4 text-right">
                <h4>02.</h4>
                <h5 className="subtitle">Near by clinics</h5>
                <p>
                  Available vet hospitals from specified location was key for
                  designers to address in addition to easy selecting a date-time
                  available slot.
                </p>
              </div>
              <div className="w-2/3 wireframeImg">
                <Image
                  src={LocationScreenWire}
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
              I conducted one round of usability studies. Findings helped guide
              the designs from wireframes to mockups and refine the design in
              the high fidelity construction.
            </p>
          </div>
          <div className="grid grid-cols-2 contentBlock">
            <div className="">
              <h4>01.</h4>
              <p>
                Users need a clear way to see what was their selection on
                previous steps
              </p>
            </div>
            <div className="">
              <h4>02.</h4>
              <p>Users need easy pet selection if they have many of them</p>
            </div>
            <div className="">
              <h4>03.</h4>
              <p>
                Users need a filter function for finding specialists for rare
                animal species
              </p>
            </div>
            <div className="">
              <h4>04.</h4>
              <p>Checkout confirmation info was not clear</p>
            </div>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">New designs</h5>
            <p>
              Findings from studies on early concepts indicated that users
              wanted to see what they have set in previous steps, without going
              back.
            </p>
          </div>

          <div className="contentBlock expanded">
            <div>
              <div className="w-1/2 mr-20">
                <span>Before usability studies</span>
                <div className="imageContainer">
                  <div className="w-full wireframeImg">
                    <Image
                      src={BookingWireScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <span className="subtitle">After usability studies</span>
                <div className="imageContainer">
                  <div className="w-full wireframeImg">
                    <Image
                      src={BookingScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contentBlock">
            <p className="text-white">
              In second order, studies revealed that a pet selection was
              crucial. For those who own more than one, they felt it was
              necessary have a profile with all their pets.
            </p>
          </div>
          <div className="contentBlock">
            <div className="w-full wireframeImg">
              <Image
                src={PetSelectionScreen}
                alt="Work Background"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="contentBlock">
            <h5 className="subtitle">Key Mockups</h5>
            <div className="grid w-full grid-cols-2 gap-4 my-6">
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
                  src={Screen2}
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
              <div className="wireframeImg">
                <Image
                  src={Screen5}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
              <div className="wireframeImg">
                <Image
                  src={Screen6}
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
              The final high-fidelity prototype presented a clearer user flow
              for booking a study or vet&#39;s appointment. It met with the
              requirements of showing previous steps information, selecting from
              a collection of pets saved on a profile, fast filtering and
              multiple payment methods.
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
            url="https://xd.adobe.com/view/8297a693-72ed-447a-8f5f-e58796e4477a-d7c4/"
            arrowColor="white"
            text="view prototype"
            className="vetblue"
          />
        </section>
        <section id="reflection">
          <div className="contentBlock">
            <h3>&#8901; Going Forward &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">Impact</h5>
            <p>
              VetFriends website makes pets owner&#39;s life easier and happy
              knowing that their pet will be properly taken care.
            </p>
          </div>
          <div className="contentBlock highlighted">
            <h5 className="subtitle">From peer feedback...</h5>
            <p>
              <em>
                “With this website it&#39; so much easier and clearer to book an
                appointment that is located near my home.”
              </em>
            </p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">What I learned</h5>
            <p>
              While designing VetFriends website, I learned that the first ideas
              for the app are only the beginning of the process. Usability
              studies and peer feedback influenced each iteration of the
              app&#39;s designs.
            </p>
          </div>
        </section>
        <div className="bannerSection foot">
          <Image
            src={CloseBanner}
            alt="Work Background"
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default VetFriends;
