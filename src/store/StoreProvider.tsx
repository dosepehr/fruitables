import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { type storeTypes, createAppStore } from "./";

export const StoreContext = createContext<StoreApi<storeTypes> | null>(
  null,
);

export interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({
  children,
}: StoreProviderProps) => {
  const storeRef = useRef<StoreApi<storeTypes>>();
  if (!storeRef.current) {
    storeRef.current = createAppStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: storeTypes) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(`useAppStore must be use within AppStoreProvider`);
  }

  return useStore(storeContext, selector);
};
