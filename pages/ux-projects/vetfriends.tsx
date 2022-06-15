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
          text: "Pet owners find difficult to look for a vet clinic near to their current location that has a doctor  to a specific date-time and not have to wait.",
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
              title: "Accessibility",
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
          text: "VetFriends website makes pets owner&#39;s life easier and happy knowing that their pet will be properly taken care.",
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
          "diseño de aplicación nativa",
          "analista / diseñador UX",
          "Figma",
          "4 semanas",
        ],
      },

      text: "Boxify es una aplicación que mejora la gestión de inventario y facilita el proceso re restock. Esta pensada para locales de té y café regionales. Los principales usuarios son empleados y gerentes que están a cargo del inventario y buscan una manera eficiente y confiable de gestionar el stock de su local.",
    },
    understanding: {
      title: "Comprensión",
      content: [
        {
          title: "Oportunidad",
          text: "Para gerentes y empleados a cargo, el control de inventario y reposición es un proceso laborioso y que consume mucho tiempo y no cuentan con herramientas dedicadas a facilitar y mejorar dicha tarea.",
        },
        {
          title: "Un nuevo desafío de diseño",
          text: "Diseñar una aplicación que le permita a los usuarios una fácil y rápida reposición de productos mediante una interfaz clara y una experiencia de uso intuitiva.",
        },
        {
          title: "Puntos claves",
          points: [
            {
              title: "Tiempo",
              text: "Los encargados de depósito suelen perder mucho tiempo buscando un item espécifico.",
            },
            {
              title: "Accesibilidad",
              text: "Algunos productos a reponer se encuentran en otras sucursales o son inaccesibles en ese momento.",
            },
            {
              title: "Organización",
              text: "Al no tener herramientas de control dedicadas, algunos articulos pueden llegar sobre abundar por reposiciones simultáneas generando perdida de dinero.",
            },
            {
              title: "Presupuesto",
              text: "Los pedidos de stock deben ser precisos a la necesidad del local, ya que cada sobrante es desperdicio y pérdida de dinero.",
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
          text: "Me tomé el tiempo para bocetar rápidamente cada pantalla de la aplicación a mano en papel. De esta forma, me aseguré de contemplar todos los elementos que responderían a los requerimientos presentados en los puntos claves.  Para la pantalla principal, por ejemplo, prioricé la sección de reposición rápida para economizar el tiempo de proceso a los empleados.",
        },
        {
          title: "Wireframes digitales",
          points: [
            {
              title: "Página de inicio",
              text: "Mientras la primera etapa de diseño seguía su curso, me aseguré de seguir algunas correcciones hechas surgidas de un estudio de usabilidad previo.",
            },
            {
              title: "Reposición",
              text: "Tanto la funcionalidad de reposición rápida como la sincronización con la agenda del proveedor fueron dos elementos claves para los usuarios que debían ser abordados.",
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
          text: "Realicé una ronda de tests de usabilidad. Los hallazgos me guiaron a mejorar el diseño de wireframes y a llevarlos a la instancia de prototipado y refinamiento con una mejor fidelidad.",
          points: [
            "Ciertos usuarios manifestaron la necesidad de tener una forma de autenticarse a la app más expeditiva",
            "Es necesario que la funcionalidad de reposición rápida permita la selección de elementos simultáneos",
            "Los usuarios necesitan la función de búsqueda dedicada, filtrado y ordenado de elementos dentro de la página principal.",
            "La vista de selección de proveedores debe estar más clara y ofrecer grupos organizados según más utilizados o recientes para facilitar la búsqueda.",
          ],
        },
        {
          title: "Nuevos diseños",
          text: "Los primeros conceptos solo contemplaban un acceso por email y contraseña, pero los usuarios encontraron que el acceso por PIN era mejor para quienes accedían con frecuencia.",
          bus: "Antes de estudios de usabilidad",
          aus: "Después de estudios de usabilidad",
          text2:
            "En segundo lugar, los estudios revelaron que para los usuarios no fué facil escoger un proovedor. En una situación donde habia decenas de proovedores, perdían tiempo en la búsqueda del mismo; algo que podría cambiar con un criterio de agrupación.",
        },
        {
          title: "Maquetados claves",
        },
        {
          title: "Cierre",
          text: "El prototipo de alta fidelidad finalmente presentó un diseño más limpio y una experiencia de usuario clara, intuitiva y eficiente. Además contempló los requerimientos de múltiple selección de artículos, ingreso por PIN y búsqueda dedicada.",
        },
      ],
    },
    reflection: {
      title: "Avanzando",
      content: [
        {
          title: "Impacto",
          text: "Boxify hace las labores de reposición y control más amenas y precisas.",
        },
        {
          title: "Testimonio",
          text: "“Con esta aplicación tengo mejor control de los inventarios de los locales en los que estoy a cargo. Ahora las tareas de cálculo de artículos son más precisas y claras. Me ha facilitado mucho la labor”",
        },
        {
          title: "Lo que aprendí",
          text: "Conocí una gran variedad de técnicas de ideación e investigación, la importancia de diseñar productos centrados en el usuario y la importancia de siempre testear el producto sin importar la instancia en la que se encuentre. Ademas, entendí que el proyecto no termina con la entrega del prototipo, sino que debo seguir refinandolo, más aún en una hipotética etapa de salida al mercado y uso, porque todo proceso de diseño, debe ser iterativo.",
        },
      ],
    },
  },
};

const VetFriends: NextPage = () => {
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
          <a href="#overview">{sideMenu[0]}</a>
          <a href="#understanding">{sideMenu[1]}</a>
          <a href="#low-fidelity">{sideMenu[2]}</a>
          <a href="#high-fidelity">{sideMenu[3]}</a>
          <a href="#reflection">{sideMenu[4]}</a>
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
            <h3>&#8901; {overview.title} &#8901;</h3>
          </div>
          <div className="contentBlock">
            <table>
              <thead>
                <tr>
                  <th>{overview.table.headings[0]}</th>
                  <th>{overview.table.headings[1]}</th>
                  <th>{overview.table.headings[2]}</th>
                  <th>{overview.table.headings[3]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{overview.table.body[0]}</td>
                  <td>{overview.table.body[1]}</td>
                  <td>{overview.table.body[2]}</td>
                  <td>{overview.table.body[3]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contentBlock">
            <p>{overview.text}</p>
          </div>
        </section>
        <section id="understanding">
          <div className="contentBlock">
            <h3>&#8901; {understanding.title} &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">{understanding.content[0].title}</h5>
            <p>{understanding.content[0].text}</p>
          </div>
          <div className="contentBlock highlighted">
            <h5 className="subtitle">{understanding.content[1].title}</h5>
            <p>{understanding.content[1].text}</p>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">{understanding.content[2].title}</h5>
          </div>
          <div className="grid grid-cols-2 contentBlock">
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
          <div className="contentBlock">
            <h3>&#8901; {lofi.title} &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">{lofi.content[0].title}</h5>
            <p>{lofi.content[0].text}</p>
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
            <h5 className="subtitle">{lofi.content[1].title}</h5>
            <div className="flex items-center justify-between mb-14">
              <div className="w-1/4">
                <h4>01.</h4>
                <h5 className="subtitle">{lofi.content[1].points[0].title}</h5>
                <p>{lofi.content[1].points[0].text}</p>
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
                <h5 className="subtitle">{lofi.content[1].points[1].title}</h5>
                <p>{lofi.content[1].points[1].text}</p>
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
            <h3>&#8901; {hifi.title} &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">{hifi.content[0].title}</h5>
            <p>{hifi.content[0].text}</p>
          </div>
          <div className="grid grid-cols-2 contentBlock">
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
          <div className="contentBlock">
            <h5 className="subtitle">{hifi.content[1].title}</h5>
            <p>{hifi.content[1].text}</p>
          </div>

          <div className="contentBlock expanded">
            <div>
              <div className="w-1/2 mr-20">
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
              <div className="w-1/2">
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
          <div className="contentBlock">
            <p className="text-white">{hifi.content[1].text2}</p>
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
            <h5 className="subtitle">{hifi.content[2].title}</h5>
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
          <div className="contentBlock">
            <h3>&#8901; {reflection.title} &#8901;</h3>
          </div>
          <div className="contentBlock">
            <h5 className="subtitle">{reflection.content[0].title}</h5>
            <p>{reflection.content[0].text}</p>
          </div>
          <div className="contentBlock highlighted">
            <h5 className="subtitle">{reflection.content[1].title}</h5>
            <p>
              <em>{reflection.content[1].text}</em>
            </p>
          </div>
          <div className="contentBlock">
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
  );
};

export default VetFriends;
