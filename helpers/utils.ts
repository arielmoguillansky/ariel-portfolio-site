export function randomInt(min: number, max: number): number {
  // @ts-ignore
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const isDesktop = (breakpoint: string) => {
  return ['2xl', 'xl', 'lg'].includes(breakpoint)
}
export const isMobile = (breakpoint: string) => {
  return ['sm', 'md'].includes(breakpoint)
}