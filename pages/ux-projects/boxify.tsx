import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import PresentationBanner from "/public/images/ux-1/presentation-banner.jpg";
import CloseBanner from "/public/images/ux-1/close-banner.jpg";
import SketchImage from "/public/images/ux-1/sketch.jpg";
import HomeScreenWire from "/public/images/ux-1/home1.png";
import RestockScreenWire from "/public/images/ux-1/restock.png";
import ProviderScreenWire from "/public/images/ux-1/restock2.png";
import ProviderScreen from "/public/images/ux-1/provider.png";
import LoginScreenWire from "/public/images/ux-1/login-wire.png";
import LoginScreen from "/public/images/ux-1/login.png";
import CheckoutScreen from "/public/images/ux-1/checkout.png";
import OutOfStockScreen from "/public/images/ux-1/out-of-stock.png";
import ProgressScreen from "/public/images/ux-1/home-progress.png";
import EditScreen from "/public/images/ux-1/edit.png";
import PrototypeMockup from "/public/images/ux-1/closure1.png";
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
          "native app design",
          "Ux designer / researcher",
          "Figma",
          "4 weeks",
        ],
      },
      text: "Boxify is an app that facilitates inventory management and restocking process. It targets managers and employees who are in charge of managing the store's inventory and need a fast a reliable way to control stocks. This product is thought mainly for local tea stores: small but successful businesses that want to minimize their restock lost and organize their inventory. As a client prototype I took Le Pain Quotidien, a regional beverage & patisserie store with various branches distributed in the whole region. Le Pain Quotidien strives to deliver healthy, a large variety of teas and cakes. They offer a wide spectrum of competitive pricing.",
    },
    understanding: {
      title: "Understanding",
      content: [
        {
          title: "Opportunity",
          text: "Managers and employees find the process of controlling inventory and restocking stressful and time-consuming.",
        },
        {
          title: "A new design challenge",
          text: "Design an app for Tea Connection that allows users to easily restocking their products and having a clear visualization of the inventory of any branch they manage.",
        },
        {
          title: "Users' pain points",
          points: [
            {
              title: "Time",
              text: "Inventory managers often waste time looking for a specific item between a lot of stock.",
            },
            {
              title: "Accessibility",
              text: "Sometimes items are in a deposit inside the store or far away. Some of them are not organized and it's difficult to find them.",
            },
            {
              title: "Organization",
              text: "Some articles are stocked in different places, others are just next to unrelated items, making confusion to the workers.",
            },
            {
              title: "Budget",
              text: "Re stocking should be precise because budget is tight and companies can't afford wasting money with overfill of items.",
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
          text: "Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritized a quick and easy restocking process to help users save time.",
        },
        {
          title: "Digital Wireframes",
          points: [
            {
              title: "Homepage",
              text: "As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research.",
            },
            {
              title: "Restocking",
              text: "Fast restocking was a key user need to address in the designs in addition to easy scheduling sync with providers availability.",
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
            "Users need a faster and effortless authentication method to access the app",
            "Users need a fast restock feature with multiple selections",
            "Users need a fast search, sort or filter feature on the home screen",
            "Providers selection can be well organized for a better visualization",
          ],
        },
        {
          title: "New designs",
          text: "Early designs offered only email and password access, but users find PIN auth easier when opening the app oftenly.",
          bus: "Before usability studies",
          aus: "After usability studies",
          text2:
            "In second order, possibilities studies revealed that was not easy for user to pick a provider. Having dozen of providers they had to remember which one they used last time. So some sorting and grouping was needed.",
        },
        {
          title: "Key Mockups",
        },
        {
          title: "Closure",
          text: "The final high-fidelity prototype presented cleaner user flows for fast restocking and checkout. It also meet user needs multiple item selections, fast PIN auth and a dedicated search functionality.",
        },
      ],
    },
    reflection: {
      title: "Going forward",
      content: [
        {
          title: "Impact",
          text: "Boxify makes users labors easier and makes them more productive.",
        },
        {
          title: "From peer feedback...",
          text: "“The app help me to be more efficient in managing the store’s inventory and improves the relation with providers too!”",
        },
        {
          title: "What I learned",
          text: "I learned a wide variety of ideation techniques, the importance of designing user-centered products and how crucial is testing the application from start to finish with actual users. And, of course, the project does not end with the prototype, but I must keep going further in testings and refinement to improve the product, as this is an iterative process.",
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

const SlideNextButton = () => {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slideNext()}>Slide &gt;</button>;
};

const UxProject: NextPage = ({ handleMobileMenu, showMenu }: any) => {
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
    <div className="ux-view boxify">
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
        <h2 className="text-center">Boxify</h2>
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
                <div className="w-full md:w-1/3 2xl:w-1/4 wireframeImg">
                  <Image
                    src={HomeScreenWire}
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
                <div className="w-full md:w-1/3 2xl:w-1/4 wireframeImg">
                  <Image
                    src={RestockScreenWire}
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
                <SlideNextButton />
                <SwiperSlide>
                  <div className="">
                    <span>{hifi.content[1].bus}</span>
                    <div className="imageContainer">
                      <div className="w-1/2 mr-4 wireframeImg">
                        <Image
                          src={ProviderScreenWire}
                          alt="Work Background"
                          layout="responsive"
                          placeholder="blur"
                        />
                      </div>
                      <div className="w-1/2 wireframeImg">
                        <Image
                          src={LoginScreenWire}
                          alt="Work Background"
                          layout="responsive"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <span className="subtitle">{hifi.content[1].aus}</span>
                    <div className="imageContainer">
                      <div className="w-1/2 mr-4 wireframeImg">
                        <Image
                          src={ProviderScreen}
                          alt="Work Background"
                          layout="responsive"
                          placeholder="blur"
                        />
                      </div>
                      <div className="w-1/2 wireframeImg">
                        <Image
                          src={LoginScreen}
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
                <div className="w-1/2 mr-20">
                  <span>{hifi.content[1].bus}</span>
                  <div className="imageContainer">
                    <div className="w-1/2 mr-4 wireframeImg">
                      <Image
                        src={ProviderScreenWire}
                        alt="Work Background"
                        layout="responsive"
                        placeholder="blur"
                      />
                    </div>
                    <div className="w-1/2 wireframeImg">
                      <Image
                        src={LoginScreenWire}
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
                        src={ProviderScreen}
                        alt="Work Background"
                        layout="responsive"
                        placeholder="blur"
                      />
                    </div>
                    <div className="w-1/2 wireframeImg">
                      <Image
                        src={LoginScreen}
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
                      src={ProgressScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={OutOfStockScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={EditScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wireframeImg">
                    <Image
                      src={CheckoutScreen}
                      alt="Work Background"
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="!hidden md:!block w-full grid-cols-2 gap-8 my-6 md:grid xl:grid-cols-4">
                <div className="wireframeImg">
                  <Image
                    src={ProgressScreen}
                    alt="Work Background"
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>
                <div className="wireframeImg">
                  <Image
                    src={OutOfStockScreen}
                    alt="Work Background"
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>
                <div className="wireframeImg">
                  <Image
                    src={EditScreen}
                    alt="Work Background"
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>
                <div className="wireframeImg">
                  <Image
                    src={CheckoutScreen}
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
              url="https://www.figma.com/proto/dICfHNAaFTzWLB6Fpomjtf/Tea-Store-Portfolio-Project---Google-UX?node-id=61%3A159&scaling=scale-down&page-id=61%3A149&starting-point-node-id=106%3A1878"
              arrowColor="#F9AA33"
              text={locale === "es-ES" ? "ver prototipo" : "view prototype"}
              className="boxifyblue"
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

export default UxProject;
