import { GameInstanceContext } from "@/components/game/GameInstanceProvider/context";
import { useContext } from "react";

export const useGame = () => {
  const gameInstance = useContext(GameInstanceContext);

  if (!gameInstance) {
    throw new Error("useGame must be used within a GameInstanceProvider");
  }

  return gameInstance;
};
