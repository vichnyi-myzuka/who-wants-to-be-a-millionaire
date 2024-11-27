import Button from "@/components/ui/Button/Button";
import s from "./StartScreen.module.scss";
import { useGame } from "@/hooks/useGame";
import Hand from "@/components/ui/Hand/Hand";

export default function StartScreen() {
  const { startGame } = useGame();

  return (
    <div className={s.startScreen}>
      <div className="container">
        <Hand className={s.startScreen__Image} />
        <div className={s.startScreen__Content}>
          <h1 className={s.startScreen__Title}>
            Who wants to be a millionaire?
          </h1>
          <Button className={s.startScreen__Button} onClick={startGame}>
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}
