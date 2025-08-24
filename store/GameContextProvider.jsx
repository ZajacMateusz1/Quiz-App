import { useState } from "react";
import GameContext from "./game-context.jsx";
export default function GameContextProvider({ children }) {
  const [gameStatus, setGameStatus] = useState("start");
  function handleChangeGameStatus() {
    if (gameStatus === "start") {
      setGameStatus("inProgress");
    } else if (gameStatus === "inProgress") {
      setGameStatus("end");
    }
  }
  const [userScore, setUserScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNextQuestion() {
    setCurrentIndex((prev) => prev + 1);
  }
  function handleUpdateUserScore() {
    setUserScore((prev) => prev + 1);
  }

  const gameCTX = {
    gameStatus: gameStatus,
    handleChangeGameStatus: handleChangeGameStatus,
    userScore: userScore,
    currentIndex: currentIndex,
    handleNextQuestion: handleNextQuestion,
    handleUpdateUserScore: handleUpdateUserScore,
  };
  return (
    <GameContext.Provider value={gameCTX}>{children}</GameContext.Provider>
  );
}
