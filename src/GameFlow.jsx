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
import Loading from "./pages/Loading";

export default function GameFlow() {
  const [gamePhase, setGamePhase] = useState("loading");
  const [activePhase, setActivePhase] = useState("loading");
  const [character, setCharacter] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);
  const [itemSelectPage, setItemSelectPage] = useState(false);
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
            setItemSelectPage={setItemSelectPage}
            playerStats={playerStats}
            setPlayerStats={setPlayerStats}
            onConfirm={() => transitionTo("loading")}
          />
        </ScreenFade>
      )}

      {gamePhase === "loading" && (
        <ScreenFade active={activePhase === "loading"}>
          <Loading
            onConfirm={() => transitionTo("credits")}
          />
        </ScreenFade>
      )}

      {playerStats && itemSelectPage && <StatsBar stats={playerStats} />}
      
    </div>
  );
}
