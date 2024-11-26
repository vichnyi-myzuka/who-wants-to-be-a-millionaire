import type { GameInstance } from "@/types/game";
import { createContext, type Context } from "react";

export const GameInstanceContext: Context<GameInstance | null> =
  createContext<GameInstance | null>(null);
