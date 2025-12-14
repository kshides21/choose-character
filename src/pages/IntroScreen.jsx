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
    text: "Long ago, the Kingdom of Ashfall once flourished in peace, uniting dwarves, elves, and humanity under a shared banner of prosperity. However, this era of harmony was shattered following the coronation of Queen Lyra. Her initial wise governance quickly warped into cold, tyrannical rule...",
  },
  {
    image: army,
    text: "She raised an army, fueled by ambition and dark magic. The court became a hub of sinister compliance, with powerful warriors, mages, and officials now enslaved to the Queen's hidden, malevolent will.",
  },
  {
    image: united,
    text: "Now, our heroes must unite against the Queen and her magic. Venture into the darkening kingdom to discover the true nature of the Queen's army, and break her supernatural hold before all of Ashfall is permanently lost to the encroaching shadow.",
  },
];

export default function IntroScreen({ theme, onComplete }) {
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

  const nextSlide = () => {
    if (index >= slides.length - 1) {
      onComplete();
      return;
    }

    setNextIndex(index + 1);

    setTimeout(() => {
      setIndex(index + 1);
      setNextIndex(null);
    }, 800);
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

          <button className="next-btn" onClick={nextSlide}>
            {index === slides.length - 1 ? "Continue" : "Next"}
          </button>
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
