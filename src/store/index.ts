import { productsType } from "@/types/products.type";
import { createStore } from "zustand/vanilla";

type storeTypes = {
  basket: productsType[] | [];
  addToCart: (product: productsType) => void;
};

export const createCounterStore = () => {
  return createStore<storeTypes>()((set, get) => ({
    basket: [],
    addToCart: (product: productsType, count: number) => {
      const existingItem = get().basket.find((item) => item.id === product.id);
      if (existingItem) {
      } else {
        if (count) {
          set((state) => ({
            basket: [...state.basket, { ...product, count }],
          }));
        }
      }
    },
  }));
};
