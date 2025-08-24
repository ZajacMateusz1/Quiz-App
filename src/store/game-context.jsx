import { createContext } from "react";

const GameContext = createContext({
  userAnswers: {},
  currentIndex: 0,
});
export default GameContext;
