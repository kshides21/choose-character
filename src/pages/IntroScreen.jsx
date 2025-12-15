"use client";
import { useState, useEffect, useRef } from "react";
import queen from "../assets/queen.png";
import army from "../assets/army.png";
import united from "../assets/united.png";
import "./IntroScreen.css";
import "../index.css";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import introMusic from "../music/story.mp3";

const slides = [
  {
    image: queen,
    text: "Long ago, the Kingdom of Ashfell once flourished in peace, uniting dwarves, elves, and humanity under a shared banner of prosperity. However, this era of harmony was shattered following the coronation of Queen Lyra. Her initial wise governance quickly warped into a cold, tyrannical rule...",
  },
  {
    image: army,
    text: "She raised an army, fueled by ambition and dark magic. The court became a hub of sinister compliance. Powerful warriors, mages, and officials were now enslaved to the Queen's hidden, malevolent will...",
  },
  {
    image: united,
    text: "Our heroes must unite against the Queen and her magic. You must venture into the darkening kingdom to discover the true nature of the Queen's army. Break her supernatural hold before all of Ashfell is permanently lost to the encroaching shadow.",
  },
];

export default function IntroScreen({ theme, onContinue }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(introMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const beginIntro = () => {
    setMusicOn(true);
    setStarted(true);
  };

  const prevSlide = () => {
    setNextIndex(index - 1);
    setIndex(index - 1);
    setNextIndex(null);
  };

  const nextSlide = () => {
    if (index >= slides.length - 1) {
      onContinue();
      return;
    }

    setNextIndex(index + 1);
    setIndex(index + 1);
    setNextIndex(null);
  };

  return (
    <div className="intro-screen">
      {!started && (
        <div className="intro-overlay">
          <h1 className="intro-plead">Your kingdom needs you.</h1>
          <button className="begin-btn" onClick={beginIntro}>
            Begin Quest
          </button>
        </div>
      )}

      {started && (
        <div className="intro-content">
          <div className="image-wrapper">
            <div className="image-frame">
              <img
                src={slides[index].image}
                className="intro-image visible"
                alt=""
              />

              {nextIndex !== null && (
                <img
                  src={slides[nextIndex].image}
                  className="intro-image visible"
                  alt=""
                />
              )}
            </div>
          </div>
          <p key={index} className="intro-text">
            {slides[index].text}
          </p>
          <div className="button-container">
            <button
              className={`next-btn ${index === 0 ? "back-btn" : ""}`}
              onClick={prevSlide}
            >
              Back
            </button>

            <button className="next-btn" onClick={nextSlide}>
              {index === slides.length - 1 ? "Continue" : "Next"}
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setMusicOn((prev) => !prev)}
        className={`music-btn ${theme}`}
      >
        {musicOn ? <TbMusic /> : <TbMusicOff />}
      </button>
    </div>
  );
}
