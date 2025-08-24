import { useContext } from "react";
import GameContext from "../../store/game-context.jsx";
import ControlButton from "./ControlButton.jsx";
import QUESTIONS from "../QUESTIONS.json";
export default function QuizScreen() {
  const {
    currentIndex,
    handleNextQuestion,
    handlePrevQuestion,
    handleChangeGameStatus,
  } = useContext(GameContext);
  const question = QUESTIONS[currentIndex];
  return (
    <div className="bg-neutral-300 p-4 rounded-lg w-3/4">
      <h3 className="mb-4 text-2xl font-bold">{question.question}</h3>
      <div className="answers flex flex-col gap-2 mb-4">
        {question.options.map((questionOption) => {
          return (
            <button key={questionOption} className="bg-neutral-100 p-1 border">
              {questionOption}
            </button>
          );
        })}
      </div>
      <div className="controlButtons flex justify-between items-center">
        <ControlButton onClick={handlePrevQuestion}>Prev</ControlButton>
        <p>
          Questions: {currentIndex + 1}/{QUESTIONS.length}
        </p>
        <ControlButton
          onClick={
            currentIndex + 1 === QUESTIONS.length
              ? handleChangeGameStatus
              : handleNextQuestion
          }
        >
          {currentIndex + 1 === QUESTIONS.length ? "End" : "Next"}
        </ControlButton>
      </div>
    </div>
  );
}
