import type { Score } from "@/types/score";
import { useState } from "react";

export const useScore = (): Score => {
  const [score, setScore] = useState(0);

  const updateScore = (prize: number) => setScore(prize);
  const resetScore = () => setScore(0);

  return { score, updateScore: updateScore, resetScore };
};
