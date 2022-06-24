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
import { useRouter } from "next/router";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const contentSideMenu: { [key: string]: any } = {
  "en-US": {
    sideMenu: [
      "Overview",
      "Understanding",
      "Low Fidelity",
      "High Fidelity",
      "Reflection",
    ],
  },
  "es-ES": {
    sideMenu: [
      "Descripción",
      "Comprensión",
      "Bocetado",
      "Prototipado",
      "Reflexión",
    ],
  },
};

const indexContent: { [key: string]: any } = {
  "en-US": {
    overview: {
      title: "Overview",
      table: {
        headings: ["Deliverable", "Role", "Tool", "Timeline"],
        body: [
          "native app & responsive website design",
          "Ux designer / researcher",
          "Figma",
          "6 weeks",
        ],
      },
      text: "The JobsxHeroes application collects all job offers around the world that can potencially fit any war veteran. JxH makes great effort to offer the best positions for all war veterans who are off duty and want to reintegrate to the working market. Moreover, it offers a wide spectrum of employers that values the life-changing experience users went through.",
    },
    understanding: {
      title: "Understanding",
      content: [
        {
          title: "Opportunity",
          text: "Only 30% of veterans are employed. Most of them feel discouraged due to disabilities, or not having any advance studies. Furthermore, most of employers don’t have the knowledge of the valuable skills these users have and tend to omit them.",
        },
        {
          title: "A new design challenge",
          text: "Design a native app and a responsive website that allows users to easily find a job that suits to their qualifications, necessities and values their personal skills and life experience.",
        },
        {
          title: "Users' pain points",
          points: [
            {
              title: "Accessibility",
              text: "There are no sites that filter job positions based on any situation that a war veteran might be in, such us restricted locations, physical disability and more.",
            },
            {
              title: "Equity",
              text: "Most jobs descriptions are not thought for those with any physical impediment or age and fall for confidence in getting a position.",
            },
          ],
        },
      ],
    },
    lofi: {
      title: "Low Fidelity Prototype",
      content: [
        {
          title: "Ideating & sketching",
          text: "This time I used the Crazy Eight ideation exercise. I expected this help me think of several ideas in a very short time -8 minutes in this case-. With only a sheet of paper, a stylographs -I love'em- and a timer, I let the ideas flow. As this project require two products, I made two sessions of crazy eights",
        },
        {
          title: "Digital Wireframes",
          points: [
            {
              title: "Jobs list",
              text: "After ideating and drafting some paper wireframes, I proceed to create the first designs for the JobsxHeroes app. These designs focused on handy and fast controls to save, view location, view details or apply each application.",
            },
            {
              title: "Profile selector",
              text: "I wanted to address the profile selection in the designs to easily change aspects of their profile to better match job's expectations and requirements.",
            },
          ],
        },
      ],
    },
    hifi: {
      title: "High Fidelity Prototype",
      content: [
        {
          title: "Usability studies",
          text: "Before jumping into making the hi-fi mockups, I conducted one round of usability studies to see if any adjustment needed to be made. Some of these findings helped me in the process of refinement.",
          points: [
            "People want to set multiple profiles and select them accordingly",
            "People want to save a job for later applications",
            "People had difficulty in looking for jobs under a specific criteria",
          ],
        },
        {
          title: "New designs",
          text: "The homepage early concept lacked from clarity and categorization, making it laborious to fast search for a job. To address this, the first section of the screen was intended to popular jobs categories.",
          bus: "Before usability studies",
          aus: "After usability studies",
          text2:
            "Secondly, each position did not have any detail: when the user applied, the row dissapeared from the list, confusing the user wether he has already applied or not. After refinement, as the save functionality was implemented, each row will display a particular state when a user interacts with it, such as applied or saved.",
        },
        {
          title: "Key Mockups",
        },
        {
          title: "Closure",
          text: "The final high-fidelity prototype showed a more dynamic and clear flow. The opportunity to conveniently change the profile accordingly increases user's probability to be hired. Condensed group of actions taken from emails apps, makes the experience agile and enjoyable.",
        },
      ],
    },
    reflection: {
      title: "Going forward",
      content: [
        {
          title: "Impact",
          text: "JobsxHeroes project really helped those who were considered not suitable for any jobs. Moreover, employers are now more aware of how skillful and valuable are all war veterans and how much they deserve a chance to grow personally and financially.",
        },
        {
          title: "What I learned",
          text: "I learned that even though the problem I was trying to solve was abig one, diligently going through each step of the design process and aligning with specific user needs helped me come up with solutions that were both feasible and useful.",
        },
        {
          title: "Next Steps",
          points: [
            "Conduct research on how successful the app is in reaching the goal to facilitate war veterans to apply for a job.",
            "Add more educational resources for users to learn about how to improve job interviews or CVs.",
            "Provide incentives and rewards to users for successfully applying to a new post or creating a new profile.",
          ],
        },
      ],
    },
  },

  "es-ES": {
    overview: {
      title: "Overview",
      table: {
        headings: ["Entregable", "Rol", "Herramientas", "Cronograma"],
        body: [
          "aplicación nativa & website responsiva",
          "analista / diseñador UX",
          "Figma",
          "6 semanas",
        ],
      },
      text: "JobsxHeroes es una aplicación que reúne las ofertas laborales alrededor del mundo a las que puede aplicar cualquier veterano/a de guerra. JxH se esfuerza por ofrecer las mejores posiciones exclusivas para todos los veteranos de guerra que ya no forman parte del ejericicio militar y quieren reintegrarse al mercado laboral. Además los empleadores asociados a esta herramienta valoran las experiencias de vida por las que los usuarios atravesaron",
    },
    understanding: {
      title: "Comprensión",
      content: [
        {
          title: "Oportunidad",
          text: "Solo el 30% de los veteranos de guerra se encuentran actualmente empleados. Un porcentaje del remanente no se siente respaldado por el mercado: muchos no se postulan porque consideran que no cumplen las expectativas de las posiciones ofertadas debido a algun impedimento físico o falta de formación.",
        },
        {
          title: "Un nuevo desafío de diseño",
          text: "Diseñar una familia de productos compuesta por una aplicación nativa y un sitio web responsivo que motive a sus usuarios a insertarse al mercado laboral y tengan la oportunidad de acceder a puestos de empleo formal.",
        },
        {
          title: "Puntos claves",
          points: [
            {
              title: "Accesibilidad",
              text: "En tiempos donde el teléfono movil es la vía de acceso primaria, no hay aplicaciones dedicadas para éste nicho de usuarios que consideren las limitaciones que pudiese presentar",
            },
            {
              title: "Equidad",
              text: "Actualmente no hay sitios que ofrezcan un listado de trabajos que contemplen todos los condicionamientos que un veterano de guerra pueda llegar a tener, como impedimentos físicos, ubicaciones restringidas o formación académica.",
            },
          ],
        },
      ],
    },
    lofi: {
      title: "Prototipado de baja fidelidad",
      content: [
        {
          title: "Ideación & bocetado",
          text: "Esta ocación apliqué la técnica del 'Ocho Loco' - Crazy Eigth -. De esta forma busqué la manera de general muchas ideas en un tiempo muy corto - 8 minutos -. Solo con una hoja de papel, un estilógrafo y un cronómetro dejé que las ideas fluyesen. Como este proyecto requería dos productos, realicé dos sesiones del ejercicio mencionado.",
        },
        {
          title: "Wireframes digitales",
          points: [
            {
              title: "Listado de puestos",
              text: "Luego de idear y bocetar algunas propuestas, procedí a crear los primeros diseños para la apliación. Estos partidos se enfocaron en el facil acceso de funciones clave como guardado, localización, detalles y aplicar a puesto.",
            },
            {
              title: "Selector de perfil",
              text: "Una forma de incrementar las posibilidades de contratación es poder adaptar el perfíl para distintos puestos. Es por eso que contemplé la implementación de un selector de perfil que permitiese cambiar rápidamente a perfiles pre configurados según el puesto a aplicar.",
            },
          ],
        },
      ],
    },
    hifi: {
      title: "Prototipos de alta fidelidad",
      content: [
        {
          title: "Estudios de usabilidad",
          text: "Antes de adentrarme a la realización de los mockups de alta fidelidad, realicé una ronda de testeos de usabilidad para determinar los aspectos a ajustar en el diseño. Algunos de estos resultados me ayudaron al proceso de refinamiento.",
          points: [
            "Los usuarios quieren setear varios perfiles y seleccionarlos adecuadamente ante cada apliación.",
            "Usuarios necesitan guardar ofertas para poder postularse mas adelante.",
            "Los usuarios tuvieron dificultades en encontrar trabajos filtrados por un criterio específico.",
          ],
        },
        {
          title: "Nuevos diseños",
          text: "El primer boceto de la página principal carecía de claridad y categorización, dificultando la detección rápida de ciertos trabajos. Para resolverlo, la primera sección de la panatalla fué destinada a mostrar categorías principales.",
          bus: "Antes de estudios de usabilidad",
          aus: "Después de estudios de usabilidad",
          text2:
            "Cada tarjeta de trabajo desaparecía de la lista general, generando cierta confusión en el usuario sobre si tuvo interacción con dicho puesto o no. Luego del refinamiento, se implementó un cambio de estado en cada tarjeta luego de su apliación o guardado.",
        },
        {
          title: "Maquetados claves",
        },
        {
          title: "Cierre",
          text: "El prototipado final propone claridad y dinamismo al momento de usarlo. La posibilidad de que el usuario pueda cambiar ágilmente de perfil al momento de postularse, incrementa su oportunidad de ser entrevistado. Condensar el grupo de mandos - tomando como referente conocido los emails de la casilla - mejoraron la experiencia de uso.",
        },
      ],
    },
    reflection: {
      title: "Avanzando",
      content: [
        {
          title: "Impacto",
          text: "Como proyecto, JobsxHeroes ayudó a aquellos que comunmente no eran considerados para un puesto de empleo formal. Además, las compañias empleadoras tienen más conciencia de las nuevas habilidades y valiosas experiencias que un veterano de guerra puede llegar a aportar como valor y cuanto merecen una oportunidad para crecer personal y financieramente.",
        },
        {
          title: "Lo que aprendí",
          text: "Me dí cuenta que, aunque el problema que trataba de resolver era gigantezco, el hecho de ir diligentemente por cada etapa del proceso de diseño alineado con las necesidades reales de los usuarios, me ayudó a generar soluciones tanto útiles como factibles.",
        },
        {
          title: "Próximos pasos",
          points: [
            "Investigar si la aplicación y el sitio web facilitan la búsqueda de empleo en veteranos de guerra.",
            "Añadir material educativo, herramientas y técnicas que mejoren la presencia de los postulantes",
            "Proveer incentivos o premios a aquellos que se postularon para un puesto o que crearon nuevos perfiles en pos de motivar su búsqueda.",
          ],
        },
      ],
    },
  },
};

const SlideNextButton = ({ customClass }: any) => {
  const swiper = useSwiper();

  return (
    <button className={customClass} onClick={() => swiper.slideNext()}>
      Slide &gt;
    </button>
  );
};

const Jobsxheroes: NextPage = ({ handleMobileMenu, showMenu }: any) => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const { locale } = useRouter();
  const { overview, understanding, lofi, hifi, reflection } =
    indexContent[locale ?? "en-US"];
  const { sideMenu } = contentSideMenu[locale ?? "en-US"];

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
    <div className="ux-view jobxheroes">
      <Head>
        <title>Ariel Moguillansky</title>
        <meta name="description" content="Ari's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleMobileMenu={handleMobileMenu} showMenu={showMenu} />
      <div className="content-nav">
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
          <a href="#overview">{sideMenu[0]}</a>
          <a href="#understanding">{sideMenu[1]}</a>
          <a href="#low-fidelity">{sideMenu[2]}</a>
          <a href="#high-fidelity">{sideMenu[3]}</a>
          <a href="#reflection">{sideMenu[4]}</a>
        </Scrollspy>
      </div>
      {showTopBtn && (
        <ToTopButton className="icon-angle-up" onClick={goToTop} />
      )}
      <div className={`content-wrapper ${showMenu ? "menu-open" : ""}`}>
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
            <div className="content-block">
              <h3>&#8901; {overview.title} &#8901;</h3>
            </div>
            <div className="flex flex-col content-table md:flex-row">
              <div>
                <span>{overview.table.headings[0]}</span>
                <p>{overview.table.body[0]}</p>
              </div>
              <div>
                <span>{overview.table.headings[1]}</span>
                <p>{overview.table.body[1]}</p>
              </div>
              <div>
                <span>{overview.table.headings[2]}</span>
                <p>{overview.table.body[2]}</p>
              </div>
              <div>
                <span>{overview.table.headings[3]}</span>
                <p>{overview.table.body[3]}</p>
              </div>
            </div>
            <div className="content-block">
              <p>{overview.text}</p>
            </div>
          </section>
          <section id="understanding">
            <div className="content-block">
              <h3>&#8901; {understanding.title} &#8901;</h3>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{understanding.content[0].title}</h5>
              <p>{understanding.content[0].text}</p>
            </div>
            <div className="content-block highlighted">
              <h5 className="subtitle">{understanding.content[1].title}</h5>
              <p>{understanding.content[1].text}</p>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{understanding.content[2].title}</h5>
            </div>
            <div className="grid grid-cols-2 content-block">
              <div>
                <h4>01.</h4>
                <h5 className="subtitle">
                  {understanding.content[2].points[0].title}
                </h5>
                <p>{understanding.content[2].points[0].text}</p>
              </div>
              <div>
                <h4>02.</h4>
                <h5 className="subtitle">
                  {understanding.content[2].points[1].title}
                </h5>
                <p>{understanding.content[2].points[1].text}</p>
              </div>
            </div>
          </section>
          <section id="low-fidelity">
            <div className="content-block">
              <h3>&#8901; {lofi.title} &#8901;</h3>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{lofi.content[0].title}</h5>
              <p>{lofi.content[0].text}</p>
              <div className="relative my-6 ideation-img">
                <Image
                  src={SketchImage}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{lofi.content[1].title}</h5>
              <div className="flex flex-col items-center justify-between md:flex-row mb-14">
                <div className="w-full md:w-1/2 2xl:w-1/4">
                  <h4>01.</h4>
                  <h5 className="subtitle">
                    {lofi.content[1].points[0].title}
                  </h5>
                  <p>{lofi.content[1].points[0].text}</p>
                </div>
                <div className="w-full mt-12 md:w-1/3 2xl:w-1/4 wireframeImg md:mt-0">
                  <Image
                    src={JobsScreenWire}
                    alt="Work Background"
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-between !mt-10 md:flex-row-reverse">
                <div className="w-full text-right md:w-1/2 2xl:w-1/4">
                  <h4>02.</h4>
                  <h5 className="subtitle">
                    {lofi.content[1].points[1].title}
                  </h5>
                  <p>{lofi.content[1].points[1].text}</p>
                </div>
                <div className="w-full mt-12 md:w-1/3 2xl:w-1/4 wireframeImg md:mt-0">
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
            <div className="content-block">
              <h3>&#8901; {hifi.title} &#8901;</h3>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{hifi.content[0].title}</h5>
              <p>{hifi.content[0].text}</p>
            </div>
            <div className="grid grid-cols-2 content-block">
              <div>
                <h4>01.</h4>
                <p>{hifi.content[0].points[0]}</p>
              </div>
              <div>
                <h4>02.</h4>
                <p>{hifi.content[0].points[1]}</p>
              </div>
              <div>
                <h4>03.</h4>
                <p>{hifi.content[0].points[2]}</p>
              </div>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{hifi.content[1].title}</h5>
              <p>{hifi.content[1].text}</p>
            </div>
            <div className="content-block expanded">
              <Swiper spaceBetween={10} slidesPerView={1}>
                <SlideNextButton customClass="text-white" />
                <SwiperSlide>
                  <div className="w-1/2 mr-20">
                    <span>{hifi.content[1].bus}</span>
                    <div className="imageContainer">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-1/2">
                    <span className="subtitle">{hifi.content[1].aus}</span>
                    <div className="imageContainer">
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
                </SwiperSlide>
              </Swiper>
              <div className="!hidden md:!flex justify-around mb-14">
                <div className="w-1/2 mr-20">
                  <span>{hifi.content[1].bus}</span>
                  <div className="imageContainer">
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
                  <span className="subtitle">{hifi.content[1].aus}</span>
                  <div className="imageContainer">
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
            </div>
            <div className="content-block">
              <p className="text-white">{hifi.content[1].text2}</p>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{hifi.content[2].title}</h5>
              <Swiper spaceBetween={10} slidesPerView={1}>
                <SlideNextButton />
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={Screen2}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={Screen1}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={Screen3}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={Screen4}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="!hidden md:!grid w-full grid-cols-2 gap-8 my-6 xl:grid-cols-4">
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
            <div className="content-block">
              <h5 className="subtitle">{hifi.content[3].title}</h5>
              <p>{hifi.content[3].text}</p>
              <div className="relative w-full my-6 ideation-img">
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
              arrowColor="white"
              text="view prototype"
              className="warherored"
            />
          </section>

          <section id="reflection">
            <div className="content-block">
              <h3>&#8901; {reflection.title} &#8901;</h3>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{reflection.content[0].title}</h5>
              <p>
                JobsxHeroes project really helped those who were considered not
                suitable for any jobs. Moreover, employers are now more aware of
                how skillful and valuable are all war veterans and how much they
                deserve a chance to grow personally and financially.
              </p>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{reflection.content[1].title}</h5>
              <p>
                I learned that even though the problem I was trying to solve was
                a big one, diligently going through each step of the design
                process and aligning with specific user needs helped me come up
                with solutions that were both feasible and useful.
              </p>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{reflection.content[2].title}</h5>
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <h4>01.</h4>
                  <p>{reflection.content[2].points[0]}</p>
                </div>
                <div>
                  <h4>02.</h4>
                  <p>{reflection.content[2].points[1]}</p>
                </div>
                <div>
                  <h4>03.</h4>
                  <p>{reflection.content[2].points[2]}</p>
                </div>
              </div>
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
    </div>
  );
};

export default Jobsxheroes;
