import PrizeStepsList from "@/components/ui/PrizeStepsList";
import { useGame } from "@/hooks/useGame";
import React from "react";

export default function GameScreen() {
  const {
    history: { questions, currentQuestionIndex },
  } = useGame();

  const prizes = questions.map((question) => question.prize);

  return (
    <div>
      <PrizeStepsList steps={prizes} currentStepIndex={currentQuestionIndex} />
    </div>
  );
}
