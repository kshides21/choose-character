"use client";
import { useState } from "react";
import CharacterSelect from "./pages/CharacterSelect";
import TitleScreen from "./pages/TitleScreen";
import PlayerIntro from "./pages/PlayerIntro";
import IntroScreen from "./pages/IntroScreen";
import ScreenFade from "./UX/ScreenFade";
import ItemSelect from "./pages/ItemSelect";
import StatsBar from "./components/StatsBar";
import { FaHome } from "react-icons/fa";

export default function GameFlow() {
  const [gamePhase, setGamePhase] = useState("characterSelect");
  const [activePhase, setActivePhase] = useState("characterSelect");
  const [character, setCharacter] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);
  const [theme, setTheme] = useState("night");
  const [playerName, setPlayerName] = useState("");

  const transitionTo = (next) => {
    setActivePhase(null);
    setTimeout(() => {
      setGamePhase(next);
      setActivePhase(next);
    }, 500);
  };

  return (
    <div className={`app-root ${theme}`}>
      <button className="home-btn" onClick={() => transitionTo("title")}>
        <FaHome />
      </button>

      {gamePhase === "title" && (
        <ScreenFade active={activePhase === "title"}>
          <TitleScreen
            theme={theme}
            setTheme={setTheme}
            onStart={() => transitionTo("intro")}
          />
        </ScreenFade>
      )}

      {gamePhase === "intro" && (
        <ScreenFade active={activePhase === "intro"}>
          <IntroScreen
            theme={theme}
            onComplete={() => transitionTo("playerIntro")}
          />
        </ScreenFade>
      )}

      {gamePhase === "playerIntro" && (
        <ScreenFade active={activePhase === "playerIntro"}>
          <PlayerIntro
            theme={theme}
            playerName={playerName}
            setPlayerName={setPlayerName}
            onContinue={() => transitionTo("characterSelect")}
          />
        </ScreenFade>
      )}

      {gamePhase === "characterSelect" && (
        <ScreenFade active={activePhase === "characterSelect"}>
          <CharacterSelect
            theme={theme}
            playerName={playerName}
            onConfirm={(chosenCharacter) => {
            console.log("Chosen character:", chosenCharacter);
              setCharacter(chosenCharacter);
              setPlayerStats({ ...chosenCharacter.stats });
              transitionTo("itemSelect");
            }}
          />
        </ScreenFade>
      )}

      {gamePhase === "itemSelect" && character && (
        <ScreenFade active={activePhase === "itemSelect"}>
          <ItemSelect
            character={character}
            theme={theme}
            playerStats={playerStats}
            setPlayerStats={setPlayerStats}
            onConfirm={() => transitionTo("loading")}
          />
        </ScreenFade>
      )}

      {playerStats && <StatsBar stats={playerStats} />}
      
    </div>
  );
}
