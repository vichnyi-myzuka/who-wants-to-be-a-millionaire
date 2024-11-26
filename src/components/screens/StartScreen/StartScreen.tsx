import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import s from "./StartScreen.module.scss";
import { useGame } from "@/hooks/useGame";

export default function StartScreen() {
  const { startGame } = useGame();

  return (
    <div className={s.startScreen}>
      <div className="container">
        <Image
          className={s.startScreen__Image}
          src="/hand.svg"
          alt="logo"
          width={200}
          height={200}
        />
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
