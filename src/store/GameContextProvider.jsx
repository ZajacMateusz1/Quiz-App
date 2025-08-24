import { useState } from "react";
import GameContext from "./game-context.jsx";
export default function GameContextProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gameCTX = {
    userAnswers: {},
    currentIndex: currentIndex,
  };
  return (
    <GameContext.Provider value={gameCTX}>{children}</GameContext.Provider>
  );
}
