import { useState, useEffect, useRef } from "react";
import "./CharacterSelect.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { characters } from "../data/characters";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import characterMusic from "../music/character.wav";

function getSlidesToShow(width) {
  if (width <= 768) return 1;
  if (width <= 992) return 2;
  if (width <= 1224) return 3;
  return 4;
}

function NextArrow({ className, style, onClick, theme }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        backgroundColor: theme === "day" ? "#f5f7fa" : "#111111",
        zoom: "2.5",
        zIndex: 2,
        paddingTop: "1.8px",
        margin: " 0 18px",
      }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function PrevArrow({ className, style, onClick, theme }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        backgroundColor: theme === "day" ? "#f5f7fa" : "#111111",
        zoom: "2.5",
        zIndex: 2,
        paddingTop: "1.8px",
        margin: " 0 18px",
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

const SimpleSlider = ({ selected, setSelected, theme }) => {
  const [slidesToShow, setSlidesToShow] = useState(
    getSlidesToShow(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () =>
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow theme={theme} />,
    prevArrow: <PrevArrow theme={theme} />,
  };

  return (
    <Slider {...settings} className="character-slider">
      {characters.map((char) => (
        <div className="character-cards" key={char.id}>
          <div
            className={`character-card ${
              selected === char.id ? "selected" : ""
            } ${char.status === "locked" ? "character-locked" : ""}`}
            onClick={() => setSelected(char.id)}
          >
            <h2 className="character-name">{char.title}</h2>
            <img src={char.image} alt={char.name} className="character-img" />
            <div
              className={`${
                selected === char.id ? "selected-info" : "hover-info"
              } ${char.status === "locked" ? "abilities-locked" : ""}`}
            >
              <h2 className="hover-name">{char.name}</h2>
              <p className="hover-desc">{char.description}</p>

              <div className="hover-abilities">
                <h4>Abilities:</h4>
                {char.abilities.map((a) => (
                  <div key={a} className="ability">
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default function CharacterSelect({ theme, playerName, onConfirm }) {
  const [selected, setSelected] = useState(null);
  const [beginChoose, setBeginChoose] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedCharacter = characters.find((c) => c.id === selected);

  useEffect(() => {
    audioRef.current = new Audio(characterMusic);
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
    <div className="character-screen">
      {!beginChoose && (
        <div className="intro-overlay">
          <h1 className="character-plead">
            Get ready to take down the Queen, {playerName}! Ashfell is counting
            on you.
          </h1>
          <button
            className="begin-btn"
            onClick={() => {
              setMusicOn(true);
              setBeginChoose(true);
            }}
          >
            Embark
          </button>
        </div>
      )}
      {beginChoose && (
        <div>
          <h1 className="title">Choose Your Hero</h1>

          <SimpleSlider
            selected={selected}
            setSelected={setSelected}
            key={windowWidth}
          />

          {selectedCharacter && (
            <div className="stats-panel">
              <h2 className="stats-title">Character Stats</h2>
              <div className="stats-list">
                {Object.entries(selectedCharacter.stats).map(([key, value]) => (
                  <div key={key} className="stat-row">
                    <span className="stat-label">{key.toUpperCase()}</span>
                    <div className="stat-bar">
                      <div
                        className="stat-fill"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                    <span className="stat-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button
            onClick={() => setMusicOn((prev) => !prev)}
            className={`music-btn ${theme}`}
          >
            {musicOn ? <TbMusic /> : <TbMusicOff />}
          </button>

          {selectedCharacter && (
            <button
              className={`confirm-btn ${selectedCharacter.status}`}
              onClick={() => onConfirm(selectedCharacter)}
            >
              Confirm Selection
            </button>
          )}
        </div>
      )}
    </div>
  );
}
