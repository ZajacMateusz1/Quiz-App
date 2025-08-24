import { createContext } from "react";

const GameContext = createContext({
  gameStatus: "",
  handleChangeGameStatus: () => {},
  userScore: 0,
  currentIndex: 0,
  handleNextQuestion: () => {},
  handleUpdateUserScore: () => {},
});
export default GameContext;
