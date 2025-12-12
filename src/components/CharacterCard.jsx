export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.portrait} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.class}</p>
    </div>
  );
}
