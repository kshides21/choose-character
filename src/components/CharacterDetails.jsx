import { useCharacterStore } from '../store/characterStore';

export default function CharacterDetails() {
  const selected = useCharacterStore((s) => s.selected);

  if (!selected) return null;

  return (
    <div className="character-details">
      <h2>{selected.name}</h2>
      <p>{selected.description}</p>
    </div>
  );
}
