import { useContext } from "react";
import GameContext from "../../store/game-context.jsx";
import StartScreen from "./StartScreen.jsx";
import QuizScreen from "./QuizScreen.jsx";
import ResultScreen from "./ResultScreen.jsx";
export default function QuizWrapper() {
  const { gameStatus } = useContext(GameContext);
  return (
    <main className="flex-1 flex flex-col gap-8 items-center">
      {gameStatus === "start" && <StartScreen></StartScreen>}
      {gameStatus === "inProgress" && <QuizScreen></QuizScreen>}
      {gameStatus === "end" && <ResultScreen></ResultScreen>}
    </main>
  );
}
