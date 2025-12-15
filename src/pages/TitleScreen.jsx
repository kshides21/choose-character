"use client";
import { useEffect, useRef, useState } from "react";
import "./TitleScreen.css";
import "../index.css";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import header from "../assets/title.png";
import menuMusic from "../music/menu.mp3";

export default function TitleScreen({ theme, setTheme, onStart }) {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(menuMusic);
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

  return (
    <div className={`title-screen ${theme}`}>
      <div className="title-content">
        <div className="header-container">
          <div className="img-container">
            <img
              className={`header-img ${theme}`}
              src={header}
              alt="Game Header"
            />
            <h1 className={`game-title ${theme}`}>Shadows Over Ashfell</h1>
          </div>
        </div>
        <p className={`subtitle ${theme}`}>
          A queen taking her kingdom to the brink of ruin
        </p>

        <div className="theme-toggle">
          <button
            className={theme === "day" ? "active" : ""}
            onClick={() => setTheme("day")}
          >
            Day
          </button>
          <button
            className={theme === "night" ? "active" : ""}
            onClick={() => setTheme("night")}
          >
            Night
          </button>
        </div>

        <button className={`start-btn ${theme}`} onClick={onStart}>
          Start Game
        </button>

        <button
          onClick={() => setMusicOn((prev) => !prev)}
          className={`music-btn ${theme}`}
        >
          {musicOn ? <TbMusic /> : <TbMusicOff />}
        </button>
      </div>
    </div>
  );
}
