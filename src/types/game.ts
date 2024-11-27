import type { GameHistory } from "./history";

export enum GameState {
  "STARTED" = "STARTED",
  "GAME_OVER" = "GAME_OVER",
  "NOT_STARTED" = "NOT_STARTED",
}

export interface GameInstance {
  state: GameState;
  history: GameHistory;
  score: number;
  responseDelay: number;
  startGame: () => void;
  restartGame: () => void;
  endGame: () => void;
  submitChoice: (answer: string) => void;
}
