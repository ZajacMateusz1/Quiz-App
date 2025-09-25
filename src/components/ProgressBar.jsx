import { useEffect, useState, useContext } from "react";
import GameContext from "../../store/game-context.jsx";
export default function ProgressBar({ time }) {
  const { currentIndex } = useContext(GameContext);
  const [remainingTime, setRemainingTime] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(interval);
      setRemainingTime(time);
    };
  }, [currentIndex, time]);
  return <progress value={remainingTime} max={time}></progress>;
}
