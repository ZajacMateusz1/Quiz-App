import Header from "./components/Header.jsx";
import StartScreen from "./components/StartScreen.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <StartScreen></StartScreen>
      </main>
    </>
  );
}

export default App;
