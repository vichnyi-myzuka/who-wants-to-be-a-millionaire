import type {
  GameHistory,
  SubmitChoiceResult,
  UserChoice,
} from "@/types/history";
import type { Question } from "@/types/question";
import { compareArrays } from "@/utils";
import { useState } from "react";

export const useHistory = (questions: Question[]): GameHistory => {
  const [choices, setChoices] = useState<UserChoice[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const canGoForward = currentQuestionIndex < questions.length - 1;

  const goToNextQuestion = (): boolean => {
    if (canGoForward) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return true;
    }
    return false;
  };

  const addAnswer = (userAnswers: string[]): SubmitChoiceResult => {
    const userChoice: UserChoice = {
      questionIndex: currentQuestionIndex,
      answers: userAnswers,
    };

    const areAnswersCorrect = compareArrays(
      currentQuestion.correctAnswers,
      userAnswers,
    );

    setChoices([...choices, userChoice]);
    return {
      correct: areAnswersCorrect,
      correctAnswers: currentQuestion.answers,
      prize: areAnswersCorrect ? currentQuestion.prize : 0,
    };
  };

  const resetHistory = () => {
    setChoices([]);
    setCurrentQuestionIndex(0);
  };

  return {
    questions,
    currentQuestionIndex,
    currentQuestion,
    choices,
    canGoForward,
    goToNextQuestion,
    addAnswer,
    resetHistory,
  };
};
