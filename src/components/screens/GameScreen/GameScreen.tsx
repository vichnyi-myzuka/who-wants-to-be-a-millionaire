import PrizeStepsList from "@/components/ui/PrizeStepsList";
import { useGame } from "@/hooks/useGame";
import { useState } from "react";
import CloseIcon from "@/components/ui/icons/CloseIcon";
import MenuIcon from "@/components/ui/icons/MenuIcon";
import classNames from "classnames";
import s from "./GameScreen.module.scss";
import QuestionAnswersSection from "@/components/game/QuestionAnswersSection";

export default function GameScreen() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {
    history: { questions, currentQuestionIndex },
  } = useGame();
  const prizes = questions.map((question) => question.prize);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className={s.gameScreen}>
      <div className="container">
        <button
          className={s.gameScreen__MobileMenuButton}
          onClick={toggleMobileMenu}
        >
          {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
        <QuestionAnswersSection />
        <aside
          className={classNames(s.gameScreen__PrizeListBar, {
            [s.showOnMobile]: showMobileMenu,
          })}
        >
          <PrizeStepsList
            steps={prizes}
            currentStepIndex={currentQuestionIndex}
          />
        </aside>
      </div>
    </div>
  );
}
