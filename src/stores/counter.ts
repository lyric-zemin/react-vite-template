import { create } from "zustand";

type State = {
  bears: number;
};

type Actions = {
  increment: () => void;
};

export const useCounterStore = create<State & Actions>((set) => ({
  bears: 0,

  increment: () => set((state) => ({ bears: state.bears + 1 })),
}));
