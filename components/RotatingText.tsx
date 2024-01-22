import { useState, useRef } from "react";
import { useInterval } from "../hooks/useInterval";
const PHRASE_ROTATION_INTERVAL_IN_MS = 1500;
const CURRENT_PHRASE_CLASSLIST =
  "absolute left-0 w-full underline turning-title";
const NEXT_PHRASE_CLASSLIST =
  "absolute left-0 w-full underline next-phrase turning-title";

interface RotatingTextProps {
  rotatingTextContent: string[];
  duration: number;
}
export const RotatingText = ({
  rotatingTextContent,
  duration,
}: RotatingTextProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const rotatingTextContainer = useRef<HTMLDivElement | null>(null);
  const phrases = rotatingTextContent || [];
  const initialPhrase = phrases[0];

  useInterval(() => {
    const nextPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    setCurrentPhraseIndex((currIdx) => (currIdx + 1) % phrases.length);
    const container = rotatingTextContainer.current;
    if (container) {
      // create next phrase div
      const nextPhraseDiv = document.createElement("div");
      nextPhraseDiv.className = NEXT_PHRASE_CLASSLIST;
      nextPhraseDiv.innerText = phrases[nextPhraseIndex] ?? "";
      container.appendChild(nextPhraseDiv);
      //append class to phase current phrase out
      const currentPhraseDiv = container.children[0];
      currentPhraseDiv.classList.add("old-phrase");
      setTimeout(() => {
        //remove old phrase and
        container.removeChild(container.children[0]);
        nextPhraseDiv.className = CURRENT_PHRASE_CLASSLIST;
      }, 500);
    }
  }, duration);

  return (
    <div
      className="relative w-full h-[150px] md:h-[120px]"
      ref={rotatingTextContainer}
      data-name="rotating-heading"
    >
      <div className={CURRENT_PHRASE_CLASSLIST}>{initialPhrase}</div>
    </div>
  );
};
