import { NextPage } from "next";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import { useRouter } from "next/router";

const indexContent: { [key: string]: any } = {
  "en-US": {
    pageTitle: "Selected work",
    subtitle: "See more",
  },

  "es-ES": {
    pageTitle: "Trabajos seleccionados",
    subtitle: "Ver más",
  },
};

const workMap: any[] = [
  {
    text: "Fora",
    slug: "development/fora",
    url: "https://www.foratravel.com",
    image: "/images/development/fora.png",
  },
  {
    text: "Brightline",
    slug: "development/brightline",
    url: "https://www.hellowbrightline.com",
    image: "/images/development/bri.png",
  },
  {
    text: "Gray Malin",
    slug: "development/graymalin",
    url: "https://www.graymalin.com",
    image: "/images/development/gm.png",
  },
  {
    text: "The Jewish Museum",
    slug: "development/thejewishmuseum",
    url: "https://www.thejewishmuseum.org",
    image: "/images/development/tjm.png",
  },
  {
    text: "Pytorch",
    slug: "development/thejewishmuseum",
    url: "https://pytorch.org/",
    image: "/images/development/pytorch.png",
  },
  {
    text: "Pulip",
    slug: "development/pulip",
    url: "https://www.getpulip.com",
    image: "/images/development/pulip.png",
  },
  {
    text: "Cyberlunes",
    slug: "development/cyberlunes",
    url: "https://www.cyberlunes.com.co",
    image: "/images/development/cyberlunes.png",
  },
  {
    text: "Hot Sale",
    slug: "development/hotsale",
    url: "https://www.hotsale.com.mx",
    image: "/images/development/hotsale.png",
  },
  {
    text: "Black Friday",
    slug: "development/blackfriday",
    url: "https://www.blackfriday.com",
    image: "/images/development/blackfriday.png",
  },
  {
    text: "Hot Fashion",
    slug: "development/hotfashion",
    url: "https://www.hotfashion.mx",
    image: "/images/development/hotfashion.png",
  },
  {
    text: "Creators",
    slug: "development/creators",
    url: "https://www.creatorsedtech.com",
    image: "/images/development/creators.png",
  },
  {
    text: "Educabot",
    slug: "development/educabot",
    url: "https://robots.educabot.com/bloques",
    image: "/images/development/educa.png",
  },
  {
    text: "Gloria",
    slug: "development/gloria",
    url: "https://grloria.eyewatch.me",
    image: "/images/development/gloria.png",
  },
];

const DevelopmentPage: NextPage = ({ showMenu }: any) => {
  const { locale } = useRouter();
  const { pageTitle, subtitle } = indexContent[locale ?? "en-US"];

  return (
    <div className={`container m-auto ${showMenu ? "menu-open" : ""}`}>
      <h1>{pageTitle}</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        {workMap.map((project, idx) => (
          <ProjectCard
            subtitle={subtitle}
            text={project.text}
            url={project.slug}
            key={idx}
            externalLink={project.url}
          >
            <Image
              src={project.image}
              alt="Work Background"
              layout="responsive"
              width={1280}
              height={853}
              blurDataURL={project.image}
              placeholder="blur"
            />
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentPage;
