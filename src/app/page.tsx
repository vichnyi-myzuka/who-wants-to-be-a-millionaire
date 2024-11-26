import Game from "@/components/game/Game";
import config from "@/config.json";
import type { Config } from "@/types/config";

export default function Home() {
  return <Game config={config as Config} />;
}
