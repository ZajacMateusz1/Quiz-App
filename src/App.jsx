import Header from "./components/Header.jsx";
import StartScreen from "./components/StartScreen.jsx";
function App() {
  return (
    <div className="min-h-screen max-w-7xl flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col  gap-8 items-center">
        <StartScreen></StartScreen>
      </main>
    </div>
  );
}

export default App;
