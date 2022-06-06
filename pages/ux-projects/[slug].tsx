import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardPlaceholder from "/public/images/Mechh.png";
import SketchImage from "/public/images/sketch.jpg";

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
            <h3>Overview</h3>
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
            <h3>Understanding</h3>
            <div className="contentBlock">
              <span>Problem</span>
              <p>
                Managers and employees find the process of controlling inventory
                and restocking stressful and time-consuming.
              </p>
            </div>
            <div className="contentBlock highlighted">
              <span>A new design challenge</span>
              <p>
                Design an app for Tea Connection that allows users to easily
                restocking their products and having a clear visualization of
                the inventory of any branch they manage.
              </p>
            </div>
            <div className="contentBlock">
              <span>Users&#39; pain points</span>
            </div>
            <div className="grid grid-cols-2 contentBlock">
              <div className="">
                <h4>01.</h4>
                <span>Time</span>
                <p>
                  Managers and employees find the process of controlling
                  inventory and restocking stressful and time-consuming.
                </p>
              </div>
              <div className="">
                <h4>02.</h4>
                <span>Accessibility</span>
                <p>
                  Managers and employees find the process of controlling
                  inventory and restocking stressful and time-consuming.
                </p>
              </div>
              <div className="">
                <h4>03.</h4>
                <span>Organization</span>
                <p>
                  Managers and employees find the process of controlling
                  inventory and restocking stressful and time-consuming.
                </p>
              </div>
              <div className="">
                <h4>04.</h4>
                <span>Budget</span>
                <p>
                  Managers and employees find the process of controlling
                  inventory and restocking stressful and time-consuming.
                </p>
              </div>
            </div>
          </div>
          <div className="lowFiSection">
            <h3>Low Fidelity Prototypes</h3>
            <div className="contentBlock">
              <span>Ideating & sketching</span>
              <p>
                Taking the time to draft iterations of each screen of the app on
                paper ensured that the elements that made it to digital
                wireframes would be well-suited to address user pain points. For
                the home screen, I prioritized a quick and easy restocking
                process to help users save time.
              </p>
              <div className="relative w-full my-6">
                <Image
                  src={SketchImage}
                  alt="Work Background"
                  layout="responsive"
                />
              </div>
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
