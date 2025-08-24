import { createContext } from "react";

const GameContext = createContext({
  gameStatus: "",
  handleChangeGameStatus: () => {},
  userAnswers: {},
  currentIndex: 0,
  handleNextQuestion: () => {},
  handlePrevQuestion: () => {},
});
export default GameContext;
