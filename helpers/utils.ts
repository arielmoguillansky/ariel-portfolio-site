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