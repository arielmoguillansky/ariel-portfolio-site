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
          "responsive website design",
          "Ux designer / researcher",
          "Adobe XD",
          "3 weeks",
        ],
      },
      text: "VetFriends groups all vet clinics' stores distributed in a whole country. The VF clinics website intends to offer superb care to all pets and confidence to their owners. It offers a wide spectrum of specialists and studies, with focus on a reliable online appointment booking. VetFriends responsive website, targets all owners who wants to give their pets special care without messing their agenda.",
    },
    understanding: {
      title: "Understanding",
      content: [
        {
          title: "Opportunity",
          text: "Pet owners find difficult to look for a vet clinic near to their current location that has a doctor to a specific date-time and not have to wait.",
        },
        {
          title: "A new design challenge",
          text: "Design a responsive website that allows users to easily booking an appointment with a specialist in a vet hospital that is near their location.",
        },
        {
          title: "Users' pain points",
          points: [
            {
              title: "Time",
              text: "Pet owners often waste time looking for a vet near their current location.",
            },
            {
              title: "Trust",
              text: "Owners usually wants to entrust their pets to someone they know and have confidence in their experience",
            },
            {
              title: "Scheduling",
              text: "Doctors have limited schedule and varies from location.",
            },
            {
              title: "Visibility",
              text: "Some doctors are specialist in rare species or only make particular studies.",
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
          text: "Taking the time to draft iterations of each screen of the app on paper ensured that the elements that  it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritized an easy booking process to help users save time.",
        },
        {
          title: "Digital Wireframes",
          points: [
            {
              title: "Booking",
              text: "As the initial design phase continued, I made sure to base screen designs on easy visualization of the vet’s agenda.",
            },
            {
              title: "Near by clinics",
              text: "Available vet hospitals from specified location was key for designers to address in addition to easy selecting a date-time available slot.",
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
          text: "I conducted one round of usability studies. Findings helped guide the designs from wireframes to mockups and refine the design in the high fidelity construction.",
          points: [
            "Users need a clear way to see what was their selection on previous steps",
            "Users need easy pet selection if they have many of them",
            "Users need a filter function for finding specialists for rare animal species",
            "Checkout confirmation info was not clear",
          ],
        },
        {
          title: "New designs",
          text: "Findings from studies on early concepts indicated that users wanted to see what they have set in previous steps, without going back.",
          bus: "Before usability studies",
          aus: "After usability studies",
          text2:
            "In second order, studies revealed that a pet selection was crucial. For those who own more than one, they felt it was necessary have a profile with all their pets.",
        },
        {
          title: "Key Mockups",
        },
        {
          title: "Closure",
          text: "The final high-fidelity prototype presented a clearer user flow for booking a study or vet's appointment. It met with the requirements of showing previous steps information, selecting from a collection of pets saved on a profile, fast filtering and multiple payment methods.",
        },
      ],
    },
    reflection: {
      title: "Going forward",
      content: [
        {
          title: "Impact",
          text: "VetFriends website makes pets owner's life easier and happy knowing that their pet will be properly taken care.",
        },
        {
          title: "From peer feedback...",
          text: "“With this website it&#39; so much easier and clearer to book an appointment that is located near my home.”",
        },
        {
          title: "What I learned",
          text: "While designing VetFriends website, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app's designs.",
        },
      ],
    },
  },

  "es-ES": {
    overview: {
      title: "Descripción",
      table: {
        headings: ["Entregable", "Rol", "Herramientas", "Cronograma"],
        body: [
          "diseño de sitio web responsivo",
          "analista / diseñador UX",
          "Adobe XD",
          "3 semanas",
        ],
      },

      text: "El sitio VetFriends nuclea las clínicas veterinarias distribuidas en todo el país. Su misión es ofrecer servicios de cuidado y atención médica a todos los animales además de brindar confianza a sus dueños. Una grran variedad de especialistas veterinarios y estudios médicos están incluidos es la plataforma, cuyo diseño se enfocó exclusivamente en mejorar el sistema de turnos online.",
    },
    understanding: {
      title: "Comprensión",
      content: [
        {
          title: "Oportunidad",
          text: "Quienes poseen mascotas tienen dificultad de encontrar y coordinar turnos en veterinarias que puedan cumplir con las necesidades de la mascota - atención de especies exóticas, exámenes, cercanía -. Actualmente, muchos sitios no permiten agendar turnos de forma online y condicionan la agenda del usuario. Muchos otros no ofrecen información detallada sobre la consulta y sus precios, empobreciendo la experiencia del usuario.",
        },
        {
          title: "Un nuevo desafío de diseño",
          text: "Diseñar un sitio web responsivo que mejore la experienca al momento de agendar turnos con cualquier médico veterinario y obtener información precisa y detallada durante el proceso.",
        },
        {
          title: "Puntos claves",
          points: [
            {
              title: "Tiempo",
              text: "Muchos dueños de mascotas consumen mucho tiempo buscando una clínica cercana que tenga turnos disponibles.",
            },
            {
              title: "Confianza",
              text: "Los dueños quieren asegurarse en que la atención y el cuidado brindados a su mascota es la mejor.",
            },
            {
              title: "Agenda",
              text: "La agenda de cada médico veterinario es distinta y además dinámica.",
            },
            {
              title: "Visibilidad",
              text: "Hay médicos veterinarios que se especializan en ciertas especies animales. Al no comunicarse consistentemente, pueden terminar ocupando turnos en atención a otros animales.",
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
          text: "En esta primera estapa, dediqué un tiempo al bocetado de ideas, anotando los elementos básicos a diseñar que cumplan con los requisitos establecidos en la hipótesis y respondad a las necesidades puntuadas anteriormente. La página principal del sitio resalta la opción de agendado de turnos como la funcionalidad más visible y que el usuario rápidamente la detecte.",
        },
        {
          title: "Wireframes digitales",
          points: [
            {
              title: "Programacón de turnos",
              text: "A medida que la etapa de maquetizado avanzaba, me cercioré de que la pantalla de selección de turno ofrezca claridad y una funcionalidad amena.",
            },
            {
              title: "Establecimientos cercanos",
              text: "Clínicas veterinarias disponibles según horario de atención y cercanía de ubicación fueron puntos claves para los usuarios y que debían ser atendidas en el desarrollo.",
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
          text: "Realicé una ronda de tests de usabilidad con el fín de guiar la etapa de refinamiento, corregir errores y mejorar aún más la usabilidad.",
          points: [
            "Se requiere de una forma de ver información seleccionada en los pasos anteriores.",
            "Usuarios que tienen más de una mascota requieren de un selector de perfiles.",
            "Es necesaria una función de filtrado por tipo de animal para la selección de estudios o médicos.",
            "La pantalla de confirmación y procedimiento de pago no estaba clara.",
          ],
        },
        {
          title: "Nuevos diseños",
          text: "Uno de los resultados de los testeos de usabilidad arrojaron la necesidad que tenian los usuarios de confirmar la selección que van realizando en cada paso dentro del flow de turnos.",
          bus: "Antes de estudios de usabilidad",
          aus: "Después de estudios de usabilidad",
          text2:
            "Otros resultados revelaron que la posibilidad de elegir las mascotas que requerían atención era crucial. Por eso, en la etapa de refinamiento contemplé una grilla de perfiles de mascotas con la posibilidad de seleccionar a más de una.",
        },
        {
          title: "Maquetados claves",
        },
        {
          title: "Cierre",
          text: "El prototipo final de alta fidelidad presentó un recorrido más claro, con una barra de pasos que permiten la flexibilidad de elección al usuario y la obtención de información detallada a medida que avanza en el la secuencia. Varios métodos de pagos disponibles y una facturación detallada brindan tranquilidad al usuario a la hora de agendar el turno.",
        },
      ],
    },
    reflection: {
      title: "Avanzando",
      content: [
        {
          title: "Impacto",
          text: "El sitio de VetFriends realmente mejora la experiencia de encontrar atención de calidad disponible sin generar incomodidad en la agenda diaria del usuario.",
        },
        {
          title: "Testimonio",
          text: "“Con éste sitio, me ahorro el tiempo de ir buscando turnos dsiponibles clínica por clínica, o llamando a varios veterinarios para conocer si cuentan con turnos disponibles que se coordinen con la disponibilidad de mi agenda. Sé que ahora mi mascota tendrá una mejor atención cuando lo requiera.”",
        },
        {
          title: "Lo que aprendí",
          text: "Mientras desarrollaba el sitio para VetFriends, aprendí las técnicas de diseño responsivo: evaluar que dispositivos primarios usan los usuarios para navegar y asi saber desde donde abordar el diseño contemplando todas las escalas de dispositivos.",
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

const VetFriends: NextPage = ({ handleMobileMenu, showMenu }: any) => {
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
    <div className="ux-view vetfriends">
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
              <div>
                <h4>03.</h4>
                <h5 className="subtitle">
                  {understanding.content[2].points[2].title}
                </h5>
                <p>{understanding.content[2].points[2].text}</p>
              </div>
              <div>
                <h4>04.</h4>
                <h5 className="subtitle">
                  {understanding.content[2].points[3].title}
                </h5>
                <p>{understanding.content[2].points[3].text}</p>
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
                <div className="w-full md:w-1/2 2xl:w-2/3 wireframeImg">
                  <Image
                    src={ScheduleScreenWire}
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
                <div className="w-full md:w-1/2 2xl:w-2/3 wireframeImg">
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
              <div>
                <h4>04.</h4>
                <p>{hifi.content[0].points[3]}</p>
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
                  <div className="w-3/4 mr-4">
                    <span>{hifi.content[1].bus}</span>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-3/4">
                    <span>{hifi.content[1].aus}</span>
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
                </SwiperSlide>
              </Swiper>
              <div className="!hidden md:!flex">
                <div className="w-3/4 mr-4">
                  <span>{hifi.content[1].bus}</span>
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
                <div className="w-3/4">
                  <span>{hifi.content[1].aus}</span>

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
            <div className="content-block">
              <p className="text-white">{hifi.content[1].text2}</p>
            </div>
            <div className="content-block">
              <div className="w-full wireframeImg">
                <Image
                  src={PetSelectionScreen}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>
            </div>

            <div className="content-block">
              <h5 className="subtitle">{hifi.content[2].title}</h5>
              <Swiper spaceBetween={10} slidesPerView={1}>
                <SlideNextButton />
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
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={Screen5}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={Screen6}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="!hidden md:!grid w-full grid-cols-2 gap-4 my-6">
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
            <div className="content-block">
              <h5 className="subtitle">{hifi.content[3].title}</h5>
              <p>{hifi.content[3].text}</p>
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
            <div className="content-block">
              <h3>&#8901; {reflection.title} &#8901;</h3>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{reflection.content[0].title}</h5>
              <p>{reflection.content[0].text}</p>
            </div>
            <div className="content-block highlighted">
              <h5 className="subtitle">{reflection.content[1].title}</h5>
              <p>
                <em>{reflection.content[1].text}</em>
              </p>
            </div>
            <div className="content-block">
              <h5 className="subtitle">{reflection.content[2].title}</h5>
              <p>{reflection.content[2].text}</p>
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

export default VetFriends;
