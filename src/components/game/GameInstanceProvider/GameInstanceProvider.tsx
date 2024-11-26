import React, { type ReactNode } from "react";
import { GameInstanceContext } from "./context";
import type { GameInstance } from "@/types/game";

interface GameInstanceProviderProps {
  value: GameInstance;
  children: ReactNode;
}

export default function GameInstanceProvider({
  value,
  children,
}: GameInstanceProviderProps) {
  return (
    <GameInstanceContext.Provider value={value}>
      {children}
    </GameInstanceContext.Provider>
  );
}
