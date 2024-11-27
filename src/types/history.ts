import type { Question } from "./question";

export interface UserChoice {
  questionIndex: number;
  answers: string[];
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
  choices: UserChoice[];
  canGoForward: boolean;
  goToNextQuestion: () => void;
  addAnswer: (answers: string[]) => SubmitChoiceResult;
  resetHistory: () => void;
}
