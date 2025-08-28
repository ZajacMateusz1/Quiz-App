import { useContext } from "react";
import GameContext from "../../store/game-context.jsx";
import Button from "./Button.jsx";
export default function ResultScreen() {
  const { userScore, questionLength, handleRestart, userAnswers } =
    useContext(GameContext);
  return (
    <div className=" p-8 rounded-b-md">
      <h2 className="font-bold text-3xl uppercase mb-4 md:text-5xl">
        Quiz Completed!
      </h2>
      <div className="stats flex justify-around mb-4 md:text-xl">
        <p className="flex flex-col text-green-500">
          <span>{(userScore / questionLength) * 100}%</span>
          <span>Correct</span>
        </p>
        <p className="flex flex-col text-red-500">
          <span>{((questionLength - userScore) / questionLength) * 100}%</span>
          <span>Incorrect</span>
        </p>
      </div>
      <Button onClick={handleRestart}>Restart</Button>
      {Object.keys(userAnswers).length > 0 && (
        <>
          <h3 className="text-xl mt-4 font-bold uppercase md:text-2xl">
            Your answers:
          </h3>
          <ol>
            {userAnswers.map((answerObj) => {
              return (
                <li className="md:text-lg" key={answerObj.number}>
                  <p className="mt-1">Question {answerObj.number}:</p>
                  <p
                    className={`${
                      answerObj.correct ? "text-green-500" : `text-red-500`
                    } text-bold`}
                  >
                    {answerObj.answer}
                  </p>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </div>
  );
}
