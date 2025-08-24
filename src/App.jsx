import GameContextProvider from "../store/GameContextProvider.jsx";
import Header from "./components/Header.jsx";
import QuizWrapper from "./components/QuizWrapper.jsx";

function App() {
  return (
    <div className="min-h-screen max-w-7xl text-center">
      <Header />
      <GameContextProvider>
        <QuizWrapper />
      </GameContextProvider>
    </div>
  );
}

export default App;
