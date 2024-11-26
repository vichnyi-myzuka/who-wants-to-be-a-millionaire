"use client";

import { useHistory } from "@/hooks/useHistory";
import type { Config } from "@/types/config";
import { useMemo, useState } from "react";
import { validateConfig } from "./utils";
import { useScore } from "@/hooks/useScore";
import GameInstanceProvider from "../GameInstanceProvider";
import { type GameInstance, GameState } from "@/types/game";
import { useRenderer } from "@/hooks/useRenderer";
import { AnimatePresence, motion } from "motion/react";

interface GameProps {
  config: Config;
}

export default function Game({ config }: GameProps) {
  const [state, setState] = useState<GameState>(GameState.STARTED);

  const { success, error } = useMemo(() => {
    return validateConfig(config);
  }, [config]);

  if (!success) {
    throw error;
  }

  const { questions, responseDelay } = config;

  const history = useHistory(questions);
  const { score, updateScore, resetScore } = useScore();
  const renderer = useRenderer(state);

  const planAction = (action: () => void) => {
    const timer = setTimeout(() => {
      action();
    }, responseDelay);

    return timer;
  };

  const startGame = () => {
    if (state !== GameState.NOT_STARTED) {
      throw new Error("Game is already started! You can't start it again.");
    }

    setState(GameState.STARTED);
    history.goToNextQuestion();
  };

  const endGame = () => {
    setState(GameState.GAME_OVER);
  };

  const restartGame = () => {
    setState(GameState.NOT_STARTED);
    resetScore();
    history.resetHistory();
  };

  const submitChoice = (answers: string[]) => {
    if (state !== GameState.STARTED) {
      throw new Error("Game is not started! You can't submit an answer!.");
    }

    const { correct, correctAnswers, prize } = history.addAnswer(answers);

    if (!correct || !history.canGoForward) {
      planAction(endGame);
    } else {
      planAction(() => {
        updateScore(prize);
        history.goToNextQuestion();
      });
    }

    return correctAnswers;
  };

  const gameInstance: GameInstance = {
    score,
    responseDelay,
    state,
    history,
    startGame,
    endGame,
    restartGame,
    submitChoice,
  };

  return (
    <GameInstanceProvider value={gameInstance}>
      <AnimatePresence mode="wait">
        <motion.main
          key={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderer}
        </motion.main>
      </AnimatePresence>
    </GameInstanceProvider>
  );
}
