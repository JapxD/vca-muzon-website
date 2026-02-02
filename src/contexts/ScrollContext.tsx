// src/context/ScrollContext.jsx
import React, { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface ScrollContextProp {
  heroVisible: boolean;
  setHeroVisible: Dispatch<SetStateAction<boolean>>;
}

const ScrollContext = createContext<ScrollContextProp | undefined>(undefined);

export const useScrolContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrolContext must be used within ScrollProvider");
  }
  return context;
};

interface ScrolProviderProp {
  children: React.ReactNode;
}

export function ScrollProvider({ children }: ScrolProviderProp) {
  const [heroVisible, setHeroVisible] = useState(true);
  return (
    <ScrollContext.Provider value={{ heroVisible, setHeroVisible }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
