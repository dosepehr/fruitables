import { createStore } from "zustand/vanilla";

type storeTypes = {
  count: number;
  decrementCount: () => void;
  incrementCount: () => void;
};

export const createCounterStore = () => {
  return createStore<storeTypes>()((set) => ({
    count: 0,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
