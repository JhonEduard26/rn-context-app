import { create } from "zustand";

export interface CounterState {
  counter: number;

  incrementBy: (increment: number) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  counter: 0,
  incrementBy: (value) => set({
    counter: get().counter + value
  })
}));