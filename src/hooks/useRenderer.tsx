import GameOverScreen from "@/components/screens/GameOverScreen/GameOverScreen";
import GameScreen from "@/components/screens/GameScreen";
import StartScreen from "@/components/screens/StartScreen";
import { GameState } from "@/types/game";

export const useRenderer = (state: GameState) => {
  switch (state) {
    case GameState.NOT_STARTED:
      return <StartScreen />;
    case GameState.STARTED:
      return <GameScreen />;
    case GameState.GAME_OVER:
      return <GameOverScreen />;
    default:
      throw new Error("Invalid game state!");
  }
};
