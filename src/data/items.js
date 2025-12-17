import pickaxe from "../assets/pickaxe.webp";
import spear from "../assets/spear.webp";
import crossbow from "../assets/crossbow.webp";
import arrows from "../assets/arrows.webp";
import daggers from "../assets/daggers.webp";
import shield from "../assets/shield.webp";
import cloak from "../assets/cloak.webp";
import boots from "../assets/boots.webp";
import belt from "../assets/belt.webp";
import helmet from "../assets/helmet.webp";
import ring from "../assets/ring.webp";
import lamp from "../assets/lamp.webp";
import amulet from "../assets/amulet.webp";
import locket from "../assets/locket.webp";
import scrolls from "../assets/scrolls.webp";
import map from "../assets/map.webp";
import compass from "../assets/compass.webp";
import pen from "../assets/pen.webp";
import charm from "../assets/charm.webp";
import journal from "../assets/journal.webp";

export const ITEMS = {
  weapon: [
    {
      id: "arctic_pickaxe",
      name: "Arctic Pickaxe",
      category: "weapon",
      image: pickaxe,
      description: "Forged in the frozen north.",
      stats: {
        hp: +1,
        attack: +3,
        defense: -1,
        speed: -1,
      },
    },
    {
      id: "lighting_spear",
      name: "Lighting Spear",
      category: "weapon",
      image: spear,
      description: "A spear crackling with electrical energy.",
      stats: {
        hp: +2,
        attack: +2,
        defense: -3,
        speed: -2,
      },
    },
    {
      id: "fired_crossbow",
      name: "Fired Crossbow",
      category: "weapon",
      image: crossbow,
      description: "A crossbow forged from the depths of Hades.",
      stats: {
        hp: -4,
        attack: +5,
        defense: -3,
        speed: -1,
      },
    },
    {
      id: "iron-tipped_arrows",
      name: "Iron-Tipped Arrows",
      category: "weapon",
      image: arrows,
      description: "Arrows with iron tips for increased damage.",
      stats: {
        hp: -1,
        attack: +2,
        defense: -1,
        speed: +3,
      },
    },
    {
      id: "learned_daggers",
      name: "Learned Daggers",
      category: "weapon",
      image: daggers,
      description: "Daggers that absorb the powers of the foes they slay.",
      stats: {
        hp: +4,
        attack: +2,
        defense: -2,
        speed: -3,
      },
    },
  ],
  armor: [
    {
      id: "blessed_shield",
      name: "Blessed Shield",
      category: "armor",
      image: shield,
      description: "A shield imbued with holy protection.",
      stats: {
        hp: +3,
        attack: -1,
        defense: +5,
        speed: -1,
      },
    },
    {
      id: "ember_cloak",
      name: "Ember Cloak",
      category: "armor",
      image: cloak,
      description: "Warmth against dark magic.",
      stats: {
        hp: +2,
        attack: -3,
        defense: +4,
        speed: +1,
      },
    },
    {
      id: "shadow_boots",
      name: "Shadow Boots",
      category: "armor",
      image: boots,
      description: "Silent steps for the stealthy.",
      stats: {
        hp: +1,
        attack: -1,
        defense: +2,
        speed: +3,
      },
    },
    {
      id: "belt_of_strength",
      name: "Belt of Strength",
      category: "armor",
      image: belt,
      description: "A sturdy belt that enhances the wearer's strength.",
      stats: {
        hp: +2,
        attack: +1,
        defense: +1,
        speed: -1,
      },
    },
    {
      id: "helmet_of_the_gods",
      name: "Helmet of the Gods",
      category: "armor",
      image: helmet,
      description: "A helmet that grants divine protection.",
      stats: {
        hp: +2,
        attack: +1,
        defense: +4,
        speed: -5,
      },
    },
  ],
  relic: [
    {
      id: "sultans_ring",
      name: "Sultan's Ring",
      category: "relic",
      image: ring,
      description: "A ring that enhances the wearer's charisma.",
      stats: {
        hp: -2,
        attack: -3,
        defense: +3,
        speed: +3,
      },
    },
    {
      id: "ancient_scrolls",
      name: "Ancient Scrolls",
      category: "relic",
      image: scrolls,
      description: "Scrolls containing lost knowledge.",
      stats: {
        hp: +5,
        attack: -2,
        defense: -2,
        speed: -1,
      },
    },
    {
      id: "dream_journal",
      name: "Dream Journal",
      category: "relic",
      image: journal,
      description: "A journal that records the dreams of its owner.",
      stats: {
        hp: +2,
        attack: -1,
        defense: +1,
        speed: +1,
      },
    },
    {
      id: "pharaohs_locket",
      name: "Pharaoh's Locket",
      category: "relic",
      image: locket,
      description: "A locket that contains the wisdom of the ancients.",
      stats: {
        hp: +2,
        attack: +1,
        defense: +2,
        speed: -3,
      },
    },
    {
      id: "genies_lamp",
      name: "Genie's Lamp",
      category: "relic",
      image: lamp,
      description: "A lamp that houses a powerful genie.",
      stats: {
        hp: +3,
        attack: -1,
        defense: +2,
        speed: -3,
      },
    },
  ],
  utility: [
    {
      id: "amulet_of_wisdom",
      name: "Amulet of Wisdom",
      category: "utility",
      image: amulet,
      description: "An amulet that grants the wearer increased intelligence.",
      stats: {
        hp: +1,
        attack: +1,
        defense: +1,
        speed: +1,
      },
    },
    {
      id: "golden_pen",
      name: "Golden Pen",
      category: "utility",
      image: pen,
      description: "A pen that writes with the ink of the gods.",
      stats: {
        hp: +4,
        attack: -2,
        defense: -3,
        speed: +1,
      },
    },
    {
      id: "philosophers_map",
      name: "Philosopher's Map",
      category: "utility",
      image: map,
      description: "A map that reveals the secrets of the universe.",
      stats: {
        hp: +2,
        attack: -5,
        defense: +1,
        speed: +3,
      },
    },
    {
      id: "centurion_compass",
      name: "Centurion Compass",
      category: "utility",
      image: compass,
      description: "A compass that will always point you onward.",
      stats: {
        hp: +3,
        attack: -4,
        defense: -1,
        speed: +5,
      },
    },
    {
      id: "lucky_charm",
      name: "Lucky Charm",
      category: "utility",
      image: charm,
      description: "A charm that brings good fortune.",
      stats: {
        hp: +2,
        attack: -4,
        defense: +3,
        speed: +2,
      },
    },
  ],
};
