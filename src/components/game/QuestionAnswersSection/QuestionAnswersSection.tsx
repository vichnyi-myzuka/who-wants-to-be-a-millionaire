import { useGame } from "@/hooks/useGame";
import classNames from "classnames";
import AnswerButton from "@/components/ui/AnswerButton";
import { getEnglishAlphabetLetter } from "@/utils";
import React, { useEffect, useState } from "react";
import type { AnswerButtonProps } from "@/components/ui/AnswerButton/AnswerButton";
import s from "./QuestionAnswersSection.module.scss";

const QuestionAnswersSection = function () {
  const { history, submitChoice, state } = useGame();
  const { answers, question } = history.currentQuestion;
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const checkAnswers = (answers: string[]) => {
    setChecked(true);
    submitChoice(answers);
  };

  const toggleAnswer = (answer: string) => {
    if (checked) return;

    let newAnswers: string[];

    if (userAnswers.includes(answer)) {
      newAnswers = userAnswers.filter((a) => a !== answer);
    } else {
      newAnswers = [...userAnswers, answer];
    }

    setUserAnswers(newAnswers);
    if (newAnswers.length === history.currentQuestion.correctAnswers.length) {
      checkAnswers(newAnswers);
    }
  };

  const getAnswerState = (answer: string): AnswerButtonProps["state"] => {
    const userDontChooseCorrectAnswer =
      checked &&
      !userAnswers.includes(answer) &&
      history.currentQuestion.correctAnswers.includes(answer);

    if (userDontChooseCorrectAnswer) {
      return "correct-not-selected";
    }

    const userChooseCorrectAnswer =
      checked &&
      history.currentQuestion.correctAnswers.includes(answer) &&
      userAnswers.includes(answer);

    if (userChooseCorrectAnswer) {
      return "correct";
    }

    const userChoseWrongAnswer =
      checked &&
      userAnswers.includes(answer) &&
      !history.currentQuestion.correctAnswers.includes(answer);

    if (userChoseWrongAnswer) {
      return "wrong";
    }

    if (userAnswers.includes(answer)) {
      return "selected";
    }
  };

  const resetSection = () => {
    setChecked(false);
    setUserAnswers([]);
  };

  useEffect(() => {
    resetSection();
  }, [question, state]);

  return (
    <section className={s.questionAnswersSection}>
      <h2
        className={classNames("subTitle", s.questionAnswersSection__Question)}
      >
        {question}
      </h2>
      <ul className={s.questionAnswersSection__Answers}>
        {answers.map((answer, index) => (
          <li key={index} className={s.questionAnswersSection__Answer}>
            <AnswerButton
              state={getAnswerState(answer)}
              answerLetter={getEnglishAlphabetLetter(index)}
              onClick={() => toggleAnswer(answer)}
              className={s.questionAnswersSection__Answer__Button}
            >
              {answer}
            </AnswerButton>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(QuestionAnswersSection);
