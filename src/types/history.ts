import type { Question } from "./question";

export interface UserChoice {
  questionIndex: number;
  answer: string;
}

export interface SubmitChoiceResult {
  correct: boolean;
  correctAnswers: string[];
  prize: number;
}

export interface GameHistory {
  questions: Question[];
  currentQuestionIndex: number;
  currentQuestion: Question;
  answers: UserChoice[];
  canGoForward: boolean;
  goToNextQuestion: () => void;
  addAnswer: (answer: string) => SubmitChoiceResult;
  resetHistory: () => void;
}
