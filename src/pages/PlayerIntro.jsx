import "./PlayerIntro.css";

export default function PlayerIntro({ playerName, setPlayerName, onContinue }) {
  return (
    <div className="player-setup">
      <h2 className="player-setup__title">What is your name, hero?</h2>

      <input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter your name"
      />

      <button disabled={!playerName} onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
