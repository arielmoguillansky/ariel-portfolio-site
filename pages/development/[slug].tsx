import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../helpers/data.json";
import { SlideNextButton } from "../../components/SliderNextButton";

const indexContent: { [key: string]: any } = {
  "en-US": {
    overview: {
      title: "Stack",
    },
  },

  "es-ES": {
    overview: {
      title: "Stack",
    },
  },
};

const DevelopmentPage: NextPage = ({ showMenu, data }: any) => {
  const { locale } = useRouter();
  const { overview } = indexContent[locale ?? "en-US"];
  console.log(data);

  return (
    <div className={`site-page ${showMenu ? "menu-open" : ""}`}>
      <h1 className="text-center">{data.title}</h1>
      <div className="w-3/4 m-auto overflow-hidden">
        <Swiper spaceBetween={10} slidesPerView={1}>
          <SlideNextButton />
          {data.views.map((view: string, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="w-full wireframeImg">
                <Image
                  src={view}
                  alt="Work Background"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="view"
                  width={1443}
                  height={815}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section id="stack">
        <div className="content-block">
          <h3>&#8901; {overview.title} &#8901;</h3>
        </div>
        <div className="flex flex-col content-table md:flex-row">
          {data.stack.map((s: string, idx: number) => (
            <div key={idx}>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;

export async function getStaticPaths() {
  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const getProject = data.find((p) => p.slug === context.params.slug);
  return {
    props: {
      data: getProject,
    },
  };
}
