import { useState } from "react";
import Header from "./components/Header.jsx";
import StartScreen from "./components/StartScreen.jsx";
import QuizScreen from "./components/QuizScreen.jsx";
function App() {
  const [gameStastus, setGameStatus] = useState("start");
  function handleChangeGameStatus() {
    setGameStatus("inProgress");
  }
  return (
    <div className="min-h-screen max-w-7xl text-center">
      <Header />
      <main className="flex-1 flex flex-col gap-8 items-center">
        {gameStastus === "start" && (
          <StartScreen changeGameStatus={handleChangeGameStatus}></StartScreen>
        )}
        {gameStastus === "inProgress" && <QuizScreen></QuizScreen>}
      </main>
    </div>
  );
}

export default App;
