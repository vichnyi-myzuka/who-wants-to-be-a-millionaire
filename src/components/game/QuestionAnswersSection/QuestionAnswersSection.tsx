import { useGame } from "@/hooks/useGame";
import classNames from "classnames";
import AnswerButton from "@/components/ui/AnswerButton";
import { getEnglishAlphabetLetter } from "@/utils";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import type { AnswerButtonProps } from "@/components/ui/AnswerButton/AnswerButton";
import s from "./QuestionAnswersSection.module.scss";

const QuestionAnswersSection = function () {
  const { history, submitChoice, state } = useGame();
  const { answers, question } = history.currentQuestion;
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [chose, setChose] = useState(false);

  const disabled = chose || userAnswers.length === 0;

  const toggleAnswer = (answer: string) => {
    if (chose) return;

    if (userAnswers.includes(answer)) {
      setUserAnswers(userAnswers.filter((a) => a !== answer));
    } else {
      setUserAnswers([...userAnswers, answer]);
    }
  };

  const handleSubmitButtonClick = () => {
    setChose(true);
    submitChoice(userAnswers);
  };

  const getAnswerState = (answer: string): AnswerButtonProps["state"] => {
    const userDontChooseCorrectAnswer =
      chose &&
      !userAnswers.includes(answer) &&
      history.currentQuestion.correctAnswers.includes(answer);

    if (userDontChooseCorrectAnswer) {
      return "correct-not-selected";
    }

    const userChooseCorrectAnswer =
      chose &&
      history.currentQuestion.correctAnswers.includes(answer) &&
      userAnswers.includes(answer);

    if (userChooseCorrectAnswer) {
      return "correct";
    }

    const userChoseWrongAnswer =
      chose &&
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
    setChose(false);
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
      <Button
        onClick={handleSubmitButtonClick}
        disabled={disabled}
        className={s.questionAnswersSection__SubmitButton}
      >
        Submit
      </Button>
    </section>
  );
};

export default React.memo(QuestionAnswersSection);
