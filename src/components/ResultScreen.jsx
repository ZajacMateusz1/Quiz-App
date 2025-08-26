import { useContext } from "react";
import GameContext from "../../store/game-context.jsx";
import Button from "./Button.jsx";
export default function ResultScreen() {
  const { userScore, questionLength, handleRestart, userAnswers } =
    useContext(GameContext);
  return (
    <div className="bg-neutral-300 p-8 rounded-b-md">
      <h2 className="font-bold text-2xl uppercase mb-3">Quiz Completed!</h2>
      <div className="stats flex gap-4 mb-4">
        <p className="flex flex-col">
          <span>{(userScore / questionLength) * 100}%</span>
          <span>Answered correctly</span>
        </p>
        <p className="flex flex-col">
          <span>{((questionLength - userScore) / questionLength) * 100}%</span>
          <span>Answered incorrectly</span>
        </p>
      </div>
      <Button onClick={handleRestart}>Restart</Button>
      <ol>
        {userAnswers.map((answerObj) => {
          return <li key={answerObj.number}>{answerObj.answer}</li>;
        })}
      </ol>
    </div>
  );
}
