"use client";
import { useState } from "react";

const slides = [
  {
    image: "../assets/queen.png",
    text: "Long ago, the Kingdom of Ashfall stood united, until Queen Lyra was crowned..."
  },
  {
    image: "../assets/army.png",
    text: "She raised an army, fueled by ambition and dark magic..."
  },
  {
    image: "../assets/united.png",
    text: "Now, our heroes must unite against the Queen and her magic and save the Kingdom."
  },
];

export default function IntroScreen({ onContinue }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
    else onContinue();
  };

  return (
    <div className="intro-screen">
      <img src={slides[index].image} alt="" />
      <p>{slides[index].text}</p>

      <button onClick={next}>
        {index === slides.length - 1 ? "Continue" : "Next"}
      </button>
    </div>
  );
}
