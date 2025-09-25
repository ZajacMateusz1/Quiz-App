import { useContext, useState, useEffect, useLayoutEffect } from "react";
import GameContext from "../../store/game-context.jsx";
import Button from "./Button.jsx";
import ProgressBar from "./ProgressBar.jsx";
import QUESTIONS from "../QUESTIONS.json";
const TIME = 10000;
export default function QuizScreen() {
  const {
    currentIndex,
    handleNextQuestion,
    handleChangeGameStatus,
    handleUpdateUserScore,
    questionLength,
    handleAddAnswer,
  } = useContext(GameContext);
  const [selected, setSelected] = useState("");
  const question = QUESTIONS[currentIndex];
  function handleSelect(answer) {
    const correct = answer === question.answer;
    setSelected(answer);
    handleAddAnswer(answer, correct, currentIndex + 1);
    if (correct) {
      handleUpdateUserScore();
    }
  }
  useLayoutEffect(() => {
    setSelected(null);
  }, [currentIndex]);
  useEffect(() => {
    const timer = setTimeout(() => {
      currentIndex + 1 === questionLength
        ? handleChangeGameStatus()
        : handleNextQuestion();
    }, TIME);
    return () => {
      clearTimeout(timer);
    };
  }, [
    currentIndex,
    handleChangeGameStatus,
    questionLength,
    handleNextQuestion,
  ]);

  return (
    <div className="p-4 rounded-lg  w-full">
      <h3 className="mb-4 text-2xl font-bold">{question.question}</h3>
      <ProgressBar time={TIME} />
      <div className="answers flex flex-col gap-2 mb-4 items-center">
        {question.options.map((questionOption) => {
          let styles =
            "bg-white md:hover:bg-stone-200 transition md:cursor-pointer";
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
              className={`p-1 border ${styles} w-3/4 md:w-1/2`}
              disabled={selected}
            >
              {questionOption}
            </button>
          );
        })}
      </div>
      <Button
        onClick={
          currentIndex + 1 === questionLength
            ? handleChangeGameStatus
            : handleNextQuestion
        }
      >
        {currentIndex + 1 === questionLength ? "End" : "Next"}
      </Button>
      <p className="pt-4">
        Questions: {currentIndex + 1}/{questionLength}
      </p>
    </div>
  );
}
