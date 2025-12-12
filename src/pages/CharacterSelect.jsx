import React, { useState, useEffect } from "react";
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
      "A jack of all trades with shapeshifting abilities and cunning damage potential.",
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
    description:
      "An assassin whose stealth and intelligence is unmatched.",
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
    description:
      "A fierce dragonkin warrior who pulls strength from the underworld.",
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

const SimpleSlider = ({ selected, setSelected }) => {
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
  };

  return (
    <Slider {...settings} className="character-slider">
      {characters.map((char) => (
        <div className="character-cards" key={char.id}>
          <div
            className={`character-card ${
              selected === char.id ? "selected" : ""
            } ${
              char.id === "dragonkin" || char.id === "sorcerer" || char.id === "assassin" || char.id === "friar" ? "character-locked" : ""
            }`}
            onClick={() => setSelected(char.id)}
          >
            <h2 className="character-name">{char.title}</h2>
            <img src={char.image} alt={char.name} className="character-img" />
            <div
              className={`${
                selected === char.id ? "selected-info" : "hover-info"
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

export default function CharacterSelect() {
  const [selected, setSelected] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="character-screen">
      <h1 className="title">Choose Your Hero</h1>

      <SimpleSlider
        selected={selected}
        setSelected={setSelected}
        key={windowWidth}
      />

      {selected && (
        <div className="stats-panel">
          <h2 className="stats-title">Character Stats</h2>

          <div className="stats-list">
            {Object.entries(
              characters.find((c) => c.id === selected).stats
            ).map(([key, value]) => (
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

      {selected && <button className="confirm-btn">Confirm Selection</button>}
    </div>
  );
}
