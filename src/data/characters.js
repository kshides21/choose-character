import warrior from "../assets/warrior.webp";
import mage from "../assets/mage.webp";
import ranger from "../assets/ranger.webp";
import elf from "../assets/elf.webp";
import dwarf from "../assets/dwarf.webp";
import shifter from "../assets/shifter.webp";
import assassin from "../assets/assassin.webp";
import friar from "../assets/friar.webp";
import dragonkin from "../assets/dragonkin.webp";
import sorcerer from "../assets/sorcerer.webp";

export const characters = [
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
    status: "unlocked",
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
    status: "unlocked",
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
    status: "unlocked",
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
    status: "unlocked",
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
    status: "unlocked",
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
    status: "unlocked",
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
    status: "locked",
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
    status: "locked",
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
    status: "locked",
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
    status: "locked",
  },
];
