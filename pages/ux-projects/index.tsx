import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import BoxifyPlaceholder from "/public/images/ux-1/placeholder-banner.jpg";
import VetFriendsPlaceholder from "/public/images/ux-2/placeholder-banner.png";
import JobsPlaceholder from "/public/images/ux-3/placeholder-banner.jpg";

const UxPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container m-auto uxView">
        <h1>Selected work</h1>
        <div className="grid grid-cols-2 gap-6">
          <ProjectCard subtitle="app" text="Boxify" url="/ux-projects/boxify">
            <Image
              src={BoxifyPlaceholder}
              alt="Work Background"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </ProjectCard>
          <ProjectCard
            subtitle="responsive website"
            text="VetFriends"
            url="/ux-projects/vetfriends"
          >
            <Image
              src={VetFriendsPlaceholder}
              alt="Work Background"
              layout="responsive"
              placeholder="blur"
            />
          </ProjectCard>
          <ProjectCard
            subtitle="responsive website + app"
            text="JobsxHeroes"
            url="/ux-projects/jobsxheroes"
          >
            <Image
              src={JobsPlaceholder}
              alt="Work Background"
              layout="responsive"
              placeholder="blur"
            />
          </ProjectCard>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UxPage;
