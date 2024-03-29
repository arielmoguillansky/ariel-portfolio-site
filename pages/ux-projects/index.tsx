import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import BoxifyPlaceholder from "/public/images/ux-1/placeholder-banner.jpg";
import VetFriendsPlaceholder from "/public/images/ux-2/placeholder-banner.png";
import JobsPlaceholder from "/public/images/ux-3/placeholder-banner.jpg";
import { useRouter } from "next/router";

const indexContent: { [key: string]: any } = {
  "en-US": {
    pageTitle: "Selected work",
    projects: ["app", "responsive website", "responsive website + app"],
  },

  "es-ES": {
    pageTitle: "Trabajos seleccionados",
    projects: [
      "aplicación",
      "sitio responsivo",
      "sitio responsivo + apĺicación",
    ],
  },
};

const UxPage: NextPage = ({ showMenu }: any) => {
  const { locale } = useRouter();
  const { pageTitle, projects } = indexContent[locale ?? "en-US"];
  return (
    <div className={`container m-auto ${showMenu ? "menu-open" : ""}`}>
      <h1>{pageTitle}</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        <ProjectCard
          subtitle={projects[0]}
          text="Boxify"
          url="/ux-projects/boxify"
        >
          <Image
            src={BoxifyPlaceholder}
            alt="Work Background"
            layout="responsive"
            placeholder="blur"
          />
        </ProjectCard>
        <ProjectCard
          subtitle={projects[1]}
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
          subtitle={projects[2]}
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
  );
};

export default UxPage;
