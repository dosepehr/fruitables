import { productsType } from "@/types/products.type";
import { createStore } from "zustand/vanilla";

export type storeTypes = {
  basket: productsType[] | [];
  addToCart: (product: productsType, count: number) => void;
  totalPrice: number;
};

export const createAppStore = () => {
  return createStore<storeTypes>()((set, get) => ({
    basket: [],
    totalPrice: 0,
    addToCart: (product: productsType, count: number) => {
      const existingItemIndex = get().basket.findIndex(
        (item) => item.id === product.id,
      );
      if (existingItemIndex >= 0) {
        get().basket[existingItemIndex] = { ...product, count };
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
