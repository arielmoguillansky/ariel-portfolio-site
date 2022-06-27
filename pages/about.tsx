import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PresentationBanner from "/public/images/ux-2/presentation-banner.jpg";
import UXIcon from "/public/images/about/UI.svg";
import DesignIcon from "/public/images/about/Design.svg";
import DevIcon from "/public/images/about/Development.svg";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

const indexContent: { [key: string]: any } = {
  "en-US": {
    bannerTitle: "Who is he?",
    overview: {
      title: "Finally, nice to meet you!",
      text: "I am Ariel Moguillansky an Industrial Designer, developer &#38; UX researcher in Buenos Aires, Argentina. That&#39;s right, all of that. But I prefer to just call myself a creative product developer. Don&#39;t worry, I will make it more clear soon.",
      text2:
        " In my free time you can find me practicing basketball or maybe playing a football match with my friends. It&#39;s not only sports, but I also find pleasure in reading novels, playing video games and having new culinary experiences - I really love food, who doesn&#39;t right? -",
    },
    profile: {
      title: "What do I do?",
      toolTitle: "Tools",
      languages: "Languages",
      fields: [
        {
          title: "UX",
          text: "Addressing users digital needs and struggles by tackling a whole design challenge - from Discover to Deliver.",
        },
        {
          title: "Industrial Design",
          text: "Create innovative, thoughtful and user centered products that have social and environmental impact.",
        },
        {
          title: "Development",
          text: "Build powerful sites &#38; apps. By looking to performance, I keep my code clean, modern &#38; concise.",
        },
      ],
    },
    studies: {
      title: "What did I studied",
      preposition: "by",
      items: [
        { name: "Google UX Design", type: "Professional Certification" },
        { name: "Project Management", type: "Postgraduate degree" },
        { name: "UX/UI", type: "Professional Certification" },
        {
          name: "Advanced Full Stack Development",
          type: "Professional Certification",
        },
        { name: "Industrial Design", type: "Degree" },
      ],
    },
    experience: {
      time: "now",
      title: "Experience",
      items: ["Software developer", "University lecturer", "Web developer"],
    },
    skills: {
      title: "What did I learn & skill",
      items: [
        "Design systems",
        "Providers management",
        "User research",
        "Market analysis",
        "Prototyping",
        "Costs auditory & analysis",
        "Objected-oriented programming & abstractions",
        "Timeline & communication management",
        "Web performance optimization",
        "Web security",
        "Design thinking",
        "Production sites maintenance",
      ],
    },
    nextSetps: {
      title: "Next steps",
      items: [
        "VR/AR Technologies",
        "Flutter",
        "Swift",
        "Python",
        "C++",
        "Cybersecurity",
      ],
    },
    languages: {
      title: "What about other languages",
      items: ["English", "Spanish", "Italian"],
    },
    like: "Liked my profile?",
  },

  "es-ES": {
    bannerTitle: "Quién es él?",
    overview: {
      title: "Finalmente, un gusto saludarte!",
      text: "Soy Ariel Moguillansky, un Diseñador Industrial, programador y analista UX en Buenos Aires, Argentina. Así es, todo eso. Pero prefiero simplemente considerarme un creativo desarrollador de productos.",
      text2:
        "En mi tiempo libre podrás encontrarme practicando basquet o también jugando un partido de fútbol con amigos. Pero no todo es deporte: me gusta leer, jugar videojuegos y probar nuevas experiencias culinarias - me encanta la comida, a quién no, cierto? - .",
    },
    profile: {
      title: "Lo que hago",
      toolTitle: "Herramientas",
      languages: "Lenguajes",
      fields: [
        {
          title: "UX",
          text: "El diseño de las mejores experiencas posibles, accesibles e intuitivas al momento de interactuar con una plataforma digital.",
        },
        {
          title: "Diseño Industrial",
          text: "Creación de productos innovadores, reflexivos y centrados en los usuarios que tengan impacto social y medioambiental.",
        },
        {
          title: "Desarrollo",
          text: "Construcción de sitios y aplicaciones poderosas. Optimizando la performace del sitio, escribo código prolijo, moderno y conciso.",
        },
      ],
    },
    studies: {
      title: "Lo que estudié",
      preposition: "en",
      items: [
        { name: "Google UX Design", type: "Certificación profesional" },
        { name: "Project Management", type: "Posgrado" },
        { name: "UX/UI", type: "Certificación profesional" },
        {
          name: "Desarrollo Full Stack Avanzado",
          type: "Certificación profesional",
        },
        { name: "Diseño Industrial", type: "Grado" },
      ],
    },
    experience: {
      time: "presente",
      title: "Mi experiencia",
      items: [
        "Desarrollador de software",
        "Profesor universitario",
        "Desarrollador web",
      ],
    },
    skills: {
      title: "Habilidades extras que aprendí",
      items: [
        "Diseño de sistemas",
        "Manejo de proveedores",
        "Investigación de usuario",
        "Análisis de mercado",
        "Prototipado",
        "Auditoría y análisis de costos",
        "Programación orientada a objetos y abstracciones",
        "Comunicación y manejo de cronogramas",
        "Optimización de la performance web",
        "Seguridad web",
        "Design thinking",
        "Mantenimiento de sitios productivos",
      ],
    },
    nextSetps: {
      title: "Próximos pasos",
      items: [
        "Tecnologías VR/AR",
        "Flutter",
        "Swift",
        "Python",
        "C++",
        "Cyberseguridad",
      ],
    },
    languages: {
      title: "Idiomas que domino",
      items: ["Inglés", "Español", "Italiano"],
    },
    like: "Te ha interesado mi perfíl?",
  },
};

const AboutView = ({ handleMobileMenu, showMenu }: any) => {
  const { locale } = useRouter();
  const {
    bannerTitle,
    overview,
    profile,
    studies,
    experience,
    skills,
    nextSetps,
    languages,
    like,
  } = indexContent[locale ?? "en-US"];

  return (
    <div className="about-view">
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleMobileMenu={handleMobileMenu} showMenu={showMenu} />
      <div className={`content-wrapper ${showMenu ? "menu-open" : ""}`}>
        <div className="about-banner">
          <h1>{bannerTitle}</h1>
          <div>
            <Image
              src={PresentationBanner}
              alt="Work Background"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        </div>
        <Fade big>
          <div className="container about-section">
            <h3>{overview.title}</h3>
            <p>{overview.text}</p>
            <p>{overview.text2}</p>
          </div>
          <div className=" about-section profile">
            <div className="wrapper">
              <h3>{profile.title}</h3>
              <div className="container content">
                <div>
                  <div className="image-wrapper">
                    <Image
                      src={UXIcon}
                      alt="Work Background"
                      layout="fixed"
                      width={183}
                      height={150}
                    />
                  </div>
                  <div className="flex md:block">
                    <div>
                      <h4>{profile.fields[0].title}</h4>
                      <p>{profile.fields[0].text}</p>
                    </div>
                    <div>
                      <span>{profile.toolTitle}</span>
                      <ul>
                        <li>AdobeXD</li>
                        <li>Figma</li>
                        <li>FlowMapp</li>
                        <li>InVision</li>
                        <li>Balsamiq</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="image-wrapper">
                    <Image
                      src={DesignIcon}
                      alt="Work Background"
                      layout="fixed"
                      width={183}
                      height={150}
                    />
                  </div>
                  <div className="flex md:block">
                    <div>
                      <h4>{profile.fields[1].title}</h4>
                      <p>{profile.fields[1].text}</p>
                    </div>
                    <div>
                      <span>{profile.toolTitle}</span>
                      <ul>
                        <li>3D Max</li>
                        <li>SolidWorks</li>
                        <li>Blender</li>
                        <li>V-Ray</li>
                        <li>Keyshot</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Cinema 4D</li>
                        <li>Substance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="image-wrapper">
                    <Image
                      src={DevIcon}
                      alt="Work Background"
                      layout="fixed"
                      width={183}
                      height={150}
                    />
                  </div>
                  <div className="flex md:block">
                    <div>
                      <h4>{profile.fields[2].title}</h4>
                      <p>{profile.fields[2].text}</p>
                    </div>
                    <div>
                      <span>{profile.languages}</span>
                      <ul>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                      </ul>
                      <span>{profile.toolTitle} &#38; Frameworks</span>
                      <ul>
                        <li>Rails</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>VueJs</li>
                        <li>CodeIgniter</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Docker</li>
                        <li>NodeJs</li>
                        <li>Apache</li>
                        <li>Webpack</li>
                        <li>HTML5</li>
                        <li>CSS &#38; pre preprocessors</li>
                        <li>Git</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container about-section studies">
            <h3>{studies.title}</h3>
            <div className="study-block">
              <div>
                <div>
                  <h4>{studies.items[0].name}</h4>
                  <span>
                    <b>{studies.items[0].type}</b> {studies.preposition} Google
                    &#38; Coursera
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2022</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div>
                  <h4>{studies.items[1].name}</h4>
                  <span>
                    <b>{studies.items[1].type}</b> {studies.preposition}{" "}
                    Universidad Tecnológica Nacional
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span className="hidden md:block">2022</span>
                <span className="hidden md:block">2021</span>
                <span className="md:hidden">2021/22</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div>
                  <h4>{studies.items[2].name}</h4>
                  <span>
                    <b>{studies.items[2].type}</b> {studies.preposition}{" "}
                    EducaciónIT
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span className="hidden md:block">2020</span>
                <span className="hidden md:block">2019</span>
                <span className="md:hidden">2020/19</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div>
                  <h4>{studies.items[3].name}</h4>
                  <span>
                    <b>{studies.items[3].type}</b> {studies.preposition} MindHub
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span>2019</span>
              </div>
            </div>
            <div className="study-block">
              <div className="flex items-center">
                <div>
                  <h4>{studies.items[4].name}</h4>
                  <span>
                    <b>{studies.items[4].type}</b> {studies.preposition}{" "}
                    Universidad de Buenos Aires
                  </span>
                </div>
              </div>
              <div className="study-year">
                <span className="hidden md:block">2018</span>
                <span className="hidden md:block">2013</span>
                <span className="md:hidden">2018/13</span>
              </div>
            </div>
          </div>
          <div className="container about-section studies">
            <h3>{experience.title}</h3>
            <div className="study-block">
              <div>
                <div>
                  <h4>42i</h4>
                  <span>{experience.items[0]}</span>
                </div>
              </div>
              <div className="study-year">
                <span>{experience.time}</span>
                <span>2020</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div>
                  <h4>Universidad de Buenos Aires</h4>
                  <span>{experience.items[1]}</span>
                </div>
              </div>
              <div className="study-year">
                <span>{experience.time}</span>
                <span>2019</span>
              </div>
            </div>
            <div className="study-block">
              <div>
                <div>
                  <h4>Educabot</h4>
                  <span>{experience.items[2]}</span>
                </div>
              </div>
              <div className="study-year">
                <span>2019</span>
              </div>
            </div>
          </div>
          <div className="container about-section skills">
            <h3>{skills.title}</h3>
            <ul>
              {skills.items.map((skill: string, idx: string) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="container about-section skills">
            <h3>{nextSetps.title}</h3>
            <ul>
              {nextSetps.items.map((item: string, idx: string) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="container about-section skills">
            <h3>{languages.title}</h3>
            <ul>
              {languages.items.map((item: string, idx: string) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-section resume">
            <div className="container">
              <h3>{like}</h3>
              <MainButton
                url={
                  locale === "en-US"
                    ? "/files/cv-english.pdf"
                    : "/files/cv-spanish.pdf"
                }
                text={locale === "en-US" ? "Download resume" : "Descarga CV"}
                className="boxifyyellow"
                download
              />
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default AboutView;
