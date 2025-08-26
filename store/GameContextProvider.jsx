import { useState, useRef } from "react";
import GameContext from "./game-context.jsx";
import QUESTIONS from "../src/QUESTIONS.json";
export default function GameContextProvider({ children }) {
  const [gameStatus, setGameStatus] = useState("start");
  function handleChangeGameStatus() {
    if (gameStatus === "start") {
      setGameStatus("inProgress");
    } else if (gameStatus === "inProgress") {
      setGameStatus("end");
    }
  }
  const userScore = useRef(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNextQuestion() {
    setCurrentIndex((prev) => prev + 1);
  }
  function handleUpdateUserScore() {
    userScore.current++;
  }
  function handleRestart() {
    userScore.current = 0;
    setCurrentIndex(0);
    setGameStatus("inProgress");
    setUserAnswers([]);
  }
  function handleAddAnswer(answer, correct, number) {
    setUserAnswers((prev) => [
      ...prev,
      { answer: answer, correct: correct, number: number },
    ]);
    console.log(userAnswers);
  }

  const gameCTX = {
    gameStatus: gameStatus,
    handleChangeGameStatus: handleChangeGameStatus,
    userScore: userScore.current,
    questionLength: QUESTIONS.length,
    currentIndex: currentIndex,
    handleNextQuestion: handleNextQuestion,
    handleUpdateUserScore: handleUpdateUserScore,
    handleRestart: handleRestart,
    userAnswers: userAnswers,
    handleAddAnswer: handleAddAnswer,
  };
  return (
    <GameContext.Provider value={gameCTX}>{children}</GameContext.Provider>
  );
}
