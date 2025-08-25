import { useContext, useState, useEffect } from "react";
import GameContext from "../../store/game-context.jsx";
import Button from "./Button.jsx";
import ProgressBar from "./ProgressBar.jsx";
import QUESTIONS from "../QUESTIONS.json";
const TIME = 5000;
export default function QuizScreen() {
  const {
    currentIndex,
    handleNextQuestion,
    handleChangeGameStatus,
    handleUpdateUserScore,
  } = useContext(GameContext);
  const [selected, setSelected] = useState(null);
  const question = QUESTIONS[currentIndex];
  function handleSelect(answer) {
    setSelected(answer);
    if (answer === question.answer) {
      handleUpdateUserScore();
    }
  }
  useEffect(() => {
    setSelected(null);
    const timer = setTimeout(() => {
      handleNextQuestion();
    }, TIME);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="bg-neutral-300 p-4 rounded-lg w-3/4">
      <h3 className="mb-4 text-2xl font-bold">{question.question}</h3>
      <ProgressBar time={TIME} />
      <div className="answers flex flex-col gap-2 mb-4">
        {question.options.map((questionOption) => {
          let styles = "bg-stone-100";
          if (selected) {
            if (question.answer === questionOption) {
              styles = "bg-green-200";
            } else if (selected === questionOption) styles = "bg-red-300";
            else styles = "opacity-50";
          }
          return (
            <button
              onClick={() => {
                handleSelect(questionOption);
              }}
              key={questionOption}
              className={`p-1 border ${styles}`}
              disabled={selected}
            >
              {questionOption}
            </button>
          );
        })}
      </div>
      <Button
        onClick={
          currentIndex + 1 === QUESTIONS.length
            ? handleChangeGameStatus
            : handleNextQuestion
        }
      >
        {currentIndex + 1 === QUESTIONS.length ? "End" : "Next"}
      </Button>
      <p className="pt-4">
        Questions: {currentIndex + 1}/{QUESTIONS.length}
      </p>
    </div>
  );
}
