export default function PlayerSetup({ playerName, setPlayerName, onContinue }) {
  return (
    <div className="player-setup">
      <h2>What is your name, hero?</h2>

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
