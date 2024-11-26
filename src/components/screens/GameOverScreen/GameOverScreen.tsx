import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import s from "./GameOverScreen.module.scss";
import { useGame } from "@/hooks/useGame";
import classNames from "classnames";
import { formatPrize } from "@/utils";

export default function GameOverScreen() {
  const { restartGame, score } = useGame();

  return (
    <div className={s.gameOverScreen}>
      <div className="container">
        <Image
          className={s.gameOverScreen__Image}
          src="/hand.svg"
          alt="logo"
          width={200}
          height={200}
        />
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
