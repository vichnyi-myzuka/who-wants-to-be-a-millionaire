import type {
  GameHistory,
  SubmitChoiceResult,
  UserChoice,
} from "@/types/history";
import type { Question } from "@/types/question";
import { useState } from "react";

export const useHistory = (questions: Question[]): GameHistory => {
  const [answers, setAnswers] = useState<UserChoice[]>([]);
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

  const addAnswer = (userAnswer: string): SubmitChoiceResult => {
    const userChoice: UserChoice = {
      questionIndex: currentQuestionIndex,
      answer: userAnswer,
    };

    const areAnswersCorrect = currentQuestion.answers.includes(userAnswer);
    setAnswers([...answers, userChoice]);
    return {
      correct: areAnswersCorrect,
      correctAnswers: currentQuestion.answers,
      prize: areAnswersCorrect ? currentQuestion.prize : 0,
    };
  };

  const resetHistory = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  return {
    questions,
    currentQuestionIndex,
    currentQuestion,
    answers,
    canGoForward,
    goToNextQuestion,
    addAnswer,
    resetHistory,
  };
};
