import { useSwiper } from "swiper/react";

type SlideNextButtonType = {
  customClass?: string;
};

export const SlideNextButton = ({ customClass }: SlideNextButtonType) => {
  const swiper = useSwiper();

  return (
    <button className={customClass} onClick={() => swiper.slideNext()}>
      Slide &gt;
    </button>
  );
};
