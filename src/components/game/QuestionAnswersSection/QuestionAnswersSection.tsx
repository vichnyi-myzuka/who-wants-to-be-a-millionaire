import { useGame } from "@/hooks/useGame";
import classNames from "classnames";
import AnswerButton from "@/components/ui/AnswerButton";
import { getEnglishAlphabetLetter } from "@/utils";
import s from "./QuestionAnswersSection.module.scss";

export default function QuestionAnswersSection() {
  const { history } = useGame();
  const { answers, question } = history.currentQuestion;

  return (
    <section className={s.questionAnswersSection}>
      <h2
        className={classNames("subTitle", s.questionAnswersSection__Question)}
      >
        {question}
      </h2>
      <ul className={s.questionAnswersSection__Answers}>
        {answers.map((answer, index) => (
          <li key={answer}>
            <AnswerButton
              answerLetter={getEnglishAlphabetLetter(index)}
              className={s.questionAnswersSection__Answer}
            >
              {answer}
            </AnswerButton>
          </li>
        ))}
      </ul>
    </section>
  );
}
