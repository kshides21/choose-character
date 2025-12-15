import { useState, useEffect, useRef } from "react";
import "./CharacterSelect.css";
import warrior from "../assets/warrior.png";
import mage from "../assets/mage.png";
import ranger from "../assets/ranger.png";
import elf from "../assets/elf.png";
import dwarf from "../assets/dwarf.png";
import shifter from "../assets/shifter.png";
import assassin from "../assets/assassin.png";
import friar from "../assets/friar.png";
import dragonkin from "../assets/dragonkin.png";
import sorcerer from "../assets/sorcerer.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import characterMusic from "../music/character.wav";

const characters = [
  {
    id: "warrior",
    title: "Warrior",
    name: "Kaelen",
    image: warrior,
    description:
      "A strong melee fighter with high defense and powerful strikes.",
    abilities: ["War Cry", "Shield Bash"],
    stats: {
      hp: 90,
      attack: 70,
      defense: 85,
      speed: 40,
    },
  },
  {
    id: "shifter",
    title: "Shifter",
    name: "Dahlia",
    image: shifter,
    description:
      "A unique sorceress with shapeshifting abilities and cunning damage potential.",
    abilities: ["Fiery Beauty", "Severing Heads"],
    stats: {
      hp: 70,
      attack: 75,
      defense: 65,
      speed: 80,
    },
  },
  {
    id: "mage",
    title: "Mage",
    name: "Sorrel",
    image: mage,
    description: "A master of arcane arts with devastating spell power.",
    abilities: ["Fireball", "Arcane Shield"],
    stats: {
      hp: 50,
      attack: 100,
      defense: 30,
      speed: 60,
    },
  },
  {
    id: "elf",
    title: "Elf",
    name: "Faelyn",
    image: elf,
    description:
      "A stealthy elf with agility and precision guided by the Elvish spirits.",
    abilities: ["Shadow Strike", "Nature's Grasp"],
    stats: {
      hp: 55,
      attack: 70,
      defense: 80,
      speed: 90,
    },
  },
  {
    id: "dwarf",
    title: "Dwarf",
    name: "Gideon",
    image: dwarf,
    description: "A sturdy dwarf with unmatched resilience and strength.",
    abilities: ["Mighty Blow", "Battle Roar"],
    stats: {
      hp: 85,
      attack: 70,
      defense: 80,
      speed: 50,
    },
  },
  {
    id: "ranger",
    title: "Ranger",
    name: "Thalion",
    image: ranger,
    description:
      "A swift ranger with remarkable stealth, versatility, and keen senses.",
    abilities: ["Rapid Shot", "Eagle Eye"],
    stats: {
      hp: 65,
      attack: 80,
      defense: 50,
      speed: 90,
    },
  },
  {
    id: "friar",
    title: "Friar",
    name: "Alaric",
    image: friar,
    description:
      "A wise friar with healing capabilities and a deep connection to nature.",
    abilities: ["Unlock to View", "Abilities"],
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    },
  },
  {
    id: "assassin",
    title: "Assassin",
    name: "Zara",
    image: assassin,
    description: "An assassin whose stealth and intelligence is unmatched.",
    abilities: ["Unlock to View", "Abilities"],
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    },
  },
  {
    id: "sorcerer",
    title: "Sorcerer",
    name: "Vespero",
    image: sorcerer,
    description:
      "A master of binding spells with power of the runes on his side.",
    abilities: ["Unlock to View", "Abilities"],
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    },
  },
  {
    id: "dragonkin",
    title: "Dragonkin",
    name: "Drakkon",
    image: dragonkin,
    description: "A dragonkin warrior who pulls strength from the underworld.",
    abilities: ["Unlock to View", "Abilities"],
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    },
  },
];

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
        color: theme === "day" ? "#f5f7fa" : "#111111",
        background: theme === "day" ? "#f5f7fa" : "#111111",
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
        color: theme === "day" ? "#f5f7fa" : "#111111",
        background: theme === "day" ? "#f5f7fa" : "#111111",
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
            } ${
              char.id === "dragonkin" ||
              char.id === "sorcerer" ||
              char.id === "assassin" ||
              char.id === "friar"
                ? "character-locked"
                : ""
            }`}
            onClick={() => setSelected(char.id)}
          >
            <h2 className="character-name">{char.title}</h2>
            <img src={char.image} alt={char.name} className="character-img" />
            <div
              className={`${
                selected === char.id ? "selected-info" : "hover-info"
              } ${
                char.id === "dragonkin" ||
                char.id === "sorcerer" ||
                char.id === "assassin" ||
                char.id === "friar"
                  ? "abilities-locked"
                  : ""
              }`}
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

export default function CharacterSelect( {theme, playerName} ) {
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
          <h1 className="intro-plead">Get ready to take down the Queen, {playerName}! Ashfell is counting on you.</h1>
          <button className="begin-btn" onClick={() => {
            setMusicOn(true);
            setBeginChoose(true);
          }}>
            Embark
          </button>
        </div>
      )}
      {beginChoose && (<div>
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

      {selected && <button className="confirm-btn">Confirm Selection</button>}
      </div>)}
    </div>
  );
}
