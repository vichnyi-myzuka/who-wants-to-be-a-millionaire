import Button from "@/components/ui/Button/Button";
import s from "./GameOverScreen.module.scss";
import { useGame } from "@/hooks/useGame";
import classNames from "classnames";
import { formatPrize } from "@/utils";
import Hand from "@/components/ui/Hand";

export default function GameOverScreen() {
  const { restartGame, score } = useGame();

  return (
    <div className={s.gameOverScreen}>
      <div className="container">
        <Hand className={s.gameOverScreen__Image} />
        <div className={s.gameOverScreen__Content}>
          <span className={classNames("subTitle", s.gameOverScreen__Label)}>
            Total score:
          </span>
          <h1 className={s.gameOverScreen__Score}>
            ${formatPrize(score)} earned
          </h1>
          <Button className={s.gameOverScreen__Button} onClick={restartGame}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
