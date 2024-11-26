export interface Score {
  score: number;
  updateScore: (prize: number) => void;
  resetScore: () => void;
}
