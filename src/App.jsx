'use client'
import { useState } from 'react';
import "./index.css";
import CharacterSelect from './pages/CharacterSelect';
import TitleScreen from './pages/TitleScreen';
import PlayerIntro from './pages/PlayerIntro';
import IntroScreen from './pages/IntroScreen';
import ScreenFade from './UX/ScreenFade';
import { FaHome } from "react-icons/fa";

export default function App() {
  const [gamePhase, setGamePhase] = useState("title");
  const [theme, setTheme] = useState("night");
  const [playerName, setPlayerName] = useState("");
  const [activePhase, setActivePhase] = useState("title");

  const transitionTo = (next) => {
    setActivePhase(null);

    setTimeout(() => {
      setGamePhase(next);
      setActivePhase(next);
    }, 500);
  };

  return (
    <div className={`app-root ${theme}`}>
      <button
        className="home-btn"
        onClick={() => transitionTo("title")}
      >
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
          <IntroScreen theme={theme} onContinue={() => transitionTo("playerIntro")} />
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
          <CharacterSelect theme={theme} playerName={playerName}/>
        </ScreenFade>
      )}
    </div>
  );
}

