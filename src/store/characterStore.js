import { create } from 'zustand';

export const useCharacterStore = create((set) => ({
  selected: null,
  setSelected: (character) => set({ selected: character }),
  confirmed: null,
  confirmSelection: () =>
    set((state) => ({ confirmed: state.selected })),
}));
