import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import CardPlaceholder from "/public/images/Mechh.png";
import SketchImage from "/public/images/sketch.jpg";
import SketchImage2 from "/public/images/ux-1/ideation.jpg";
import Wireframe1 from "/public/images/ux-1/home1.png";
import PrototypeMockup from "/public/images/ux-1/closure1.png";

const UxProject: NextPage = ({ projectSlug }: any) => {
  return (
    <div>
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sideMenu">
        <Link href="/">Overview</Link>
        <Link href="/">Understanding</Link>
        <Link href="/">Low Fidelity</Link>
        <Link href="/">High Fidelity</Link>
        <Link href="/">Reflection</Link>
      </div>
      <div className="projectContent">
        <h2 className="text-center">{projectSlug?.slug}</h2>
        <div className="bannerSection">
          <Image
            src={CardPlaceholder}
            alt="Work Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="bodyContent">
          <div className="overviewSection">
            <h3>&#8901; Overview &#8901;</h3>
            <div className="overviewTable">
              <table>
                <tr>
                  <th>deliverable</th>
                  <th>role</th>
                  <th>tool</th>
                  <th>timeline</th>
                </tr>
                <tr>
                  <td>native app design</td>
                  <td>designer</td>
                  <td>Figma</td>
                  <td>4 weeks</td>
                </tr>
              </table>
            </div>
            <p>
              Tea Connection is a regional beverage & patisserie store with
              various branches distributed in the whole region. Tea Connection
              strives to deliver healthy, a large variety of teas and cakes.
              They offer a wide spectrum of competitive pricing. Boxify, the
              inventory app made for Tea Connection, targets managers and
              employees who are in charge of managing the store’s inventory and
              need a fast a reliable way to control stocks.
            </p>
          </div>
          <div className="understandingSection">
            <h3>&#8901; Understanding &#8901;</h3>
            <div className="contentBlock">
              <h5 className="subtitle">Problem</h5>
              <p>
                Managers and employees find the process of controlling inventory
                and restocking stressful and time-consuming.
              </p>
            </div>
            <div className="contentBlock highlighted">
              <h5 className="subtitle">A new design challenge</h5>
              <p>
                Design an app for Tea Connection that allows users to easily
                restocking their products and having a clear visualization of
                the inventory of any branch they manage.
              </p>
            </div>
            <div className="contentBlock">
              <h5 className="subtitle">Users&#39; pain points</h5>
            </div>
            <div className="grid grid-cols-2 contentBlock">
              <div className="">
                <h4>01.</h4>
                <h5 className="subtitle">Time</h5>
                <p>
                  Inventory managers often waste time looking for a specific
                  item between a lot of stock.
                </p>
              </div>
              <div className="">
                <h4>02.</h4>
                <h5 className="subtitle">Accessibility</h5>
                <p>
                  Sometimes items are in a deposit inside the store or far away.
                  Some of them are not organized and it’s difficult to find
                  them.
                </p>
              </div>
              <div className="">
                <h4>03.</h4>
                <h5 className="subtitle">Organization</h5>
                <p>
                  Some articles are stocked in different places, others are just
                  next to unrelated items, making confusion to the workers.
                </p>
              </div>
              <div className="">
                <h4>04.</h4>
                <h5 className="subtitle">Budget</h5>
                <p>
                  Re stocking should be precise because budget is tight and
                  companies can’t afford wasting money with overfill of items.
                </p>
              </div>
            </div>
          </div>
          <div className="lowFiSection">
            <h3>&#8901; Low Fidelity Prototype &#8901;</h3>
            <div className="contentBlock">
              <h5 className="subtitle">Ideating & sketching</h5>
              <p>
                Taking the time to draft iterations of each screen of the app on
                paper ensured that the elements that made it to digital
                wireframes would be well-suited to address user pain points. For
                the home screen, I prioritized a quick and easy restocking
                process to help users save time.
              </p>
              <div className="relative my-6 ideationImg">
                <Image
                  src={SketchImage2}
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
                  <h5 className="subtitle">Homepage</h5>
                  <p>
                    As the initial design phase continued, I made sure to base
                    screen designs on feedback and findings from the user
                    research.
                  </p>
                </div>
                <div className="w-1/4 wireframeImg">
                  <Image
                    src={Wireframe1}
                    alt="Work Background"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-between">
                <div className="w-1/4 text-right">
                  <h4>02.</h4>
                  <h5 className="subtitle">Restocking</h5>
                  <p>
                    Fast restocking was a key user need to address in the
                    designs in addition to easy scheduling sync with providers
                    availability.
                  </p>
                </div>
                <div className="w-1/4 wireframeImg">
                  <Image
                    src={Wireframe1}
                    alt="Work Background"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hiFiSection">
            <h3>&#8901; High Fidelity Prototype &#8901;</h3>
            <div className="contentBlock">
              <h5 className="subtitle">Usability studies</h5>
              <p>
                I conducted one round of usability studies. Findings helped
                guide the designs from wireframes to mockups and refine the
                design in the high fidelity construction.
              </p>
            </div>
            <div className="grid grid-cols-2 contentBlock">
              <div className="">
                <h4>01.</h4>
                <p>
                  Users need a faster and effortless authentication method to
                  access the app
                </p>
              </div>
              <div className="">
                <h4>02.</h4>
                <p>
                  Users need a fast restock feature with multiple selections
                </p>
              </div>
              <div className="">
                <h4>03.</h4>
                <p>
                  Users need a fast search, sort or filter feature on the home
                  screen
                </p>
              </div>
              <div className="">
                <h4>04.</h4>
                <p>
                  Providers selection can be well organized for a better
                  visualization
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
                  <h5 className="subtitle">Before</h5>
                  <div className="flex justify-center w-full">
                    <div className="w-1/2 mr-4 wireframeImg">
                      <Image
                        src={Wireframe1}
                        alt="Work Background"
                        layout="responsive"
                      />
                    </div>
                    <div className="w-1/2 wireframeImg">
                      <Image
                        src={Wireframe1}
                        alt="Work Background"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <h5 className="subtitle">After</h5>
                  <div className="flex justify-center w-full">
                    <div className="w-1/2 mr-4 wireframeImg">
                      <Image
                        src={Wireframe1}
                        alt="Work Background"
                        layout="responsive"
                      />
                    </div>
                    <div className="w-1/2 wireframeImg">
                      <Image
                        src={Wireframe1}
                        alt="Work Background"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p>
                In second order, possibilities studies revealed that was not
                easy for user to pick a provider. Having dozen of providers they
                had to remember which one they used last time. So some sorting
                and grouping was needed.
              </p>
            </div>
            <div className="contentBlock">
              <h5 className="subtitle">Key Mockups</h5>
              <div className="grid w-full grid-cols-4 gap-8 my-6">
                <div className="wireframeImg">
                  <Image
                    src={Wireframe1}
                    alt="Work Background"
                    layout="responsive"
                  />
                </div>
                <div className="wireframeImg">
                  <Image
                    src={Wireframe1}
                    alt="Work Background"
                    layout="responsive"
                  />
                </div>
                <div className="wireframeImg">
                  <Image
                    src={Wireframe1}
                    alt="Work Background"
                    layout="responsive"
                  />
                </div>
                <div className="wireframeImg">
                  <Image
                    src={Wireframe1}
                    alt="Work Background"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            <div className="contentBlock">
              <h5 className="subtitle">Closure</h5>
              <p>
                The final high-fidelity prototype presented cleaner user flows
                for fast restocking and checkout. It also meet user needs
                multiple item selections, fast PIN auth and a dedicated search
                functionality.{" "}
              </p>
              <div className="relative w-full my-6">
                <Image
                  src={PrototypeMockup}
                  alt="Work Background"
                  layout="responsive"
                />
              </div>
              <MainButton
                url="#"
                arrowColor="black"
                text="view prototype"
                filled
              />
            </div>
          </div>
          <div className="reflectionSection">
            <h3>&#8901; Going Forward &#8901;</h3>
            <div className="contentBlock">
              <h5 className="subtitle">Impact</h5>
              <p>
                Boxify makes users labors easier and makes them more productive.
              </p>
            </div>
            <div className="contentBlock highlighted">
              <h5 className="subtitle">From peer feedback...</h5>
              <p>
                <em>
                  “The app help me to be more efficient in managing the store’s
                  inventory and improves the relation with providers too!”
                </em>
              </p>
            </div>
            <div className="contentBlock">
              <h5 className="subtitle">What I learned</h5>
              <p>
                While designing Boxify, I learned that the first ideas for the
                app are only the beginning of the process. Usability studies and
                peer feedback influenced each iteration of the app’s designs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: { projectSlug: params }, // will be passed to the page component as props
  };
}

export default UxProject;
