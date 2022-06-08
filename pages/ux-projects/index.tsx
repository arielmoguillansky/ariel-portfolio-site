import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";

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
          <ProjectCard text="Boxify" url="/ux-projects/boxify" />
          <ProjectCard text="VetFriends" url="/ux-projects/vetfriends" />
          <ProjectCard text="JobsxHeroes" url="/ux-projects/jobsxheroes" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UxPage;
