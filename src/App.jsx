'use client'
import { useState } from 'react';
import CharacterSelect from './pages/CharacterSelect';
import TitleScreen from './pages/TitleScreen';
import PlayerSetup from './pages/PlayerIntro';
import IntroScreen from './pages/IntroScreen';
import ScreenFade from './UX/ScreenFade';

export default function App() {
  const [gamePhase, setGamePhase] = useState("title");
  const [theme, setTheme] = useState("day");
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
    <>
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
          <IntroScreen onContinue={() => transitionTo("playerSetup")} />
        </ScreenFade>
      )}

      {gamePhase === "playerSetup" && (
        <ScreenFade active={activePhase === "playerSetup"}>
          <PlayerSetup
            playerName={playerName}
            setPlayerName={setPlayerName}
            onContinue={() => transitionTo("characterSelect")}
          />
        </ScreenFade>
      )}

      {gamePhase === "characterSelect" && (
        <ScreenFade active={activePhase === "characterSelect"}>
          <CharacterSelect />
        </ScreenFade>
      )}
    </>
  );
}

