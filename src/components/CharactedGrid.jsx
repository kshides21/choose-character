import { characters } from '../data/characters';
import CharacterCard from './CharacterCard';

export default function CharacterGrid() {
  return (
    <div className="character-grid">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
