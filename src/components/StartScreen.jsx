import Button from "./Button.jsx";
import startScreen from "../assets/StartScreen.png";
export default function StartScreen() {
  return (
    <>
      <img
        className="object-cover w-10/12 rounded-sm"
        src={startScreen}
        alt="Math Quiz image with clipboard, equation 12×3, and pencil on blue background"
      />
      <p className="text-sm text-center px-6 font-semibold">
        Challenge yourself with a fun math quiz full of calculations and logic
        puzzles to test your skills!
      </p>
      <Button>Start Quiz</Button>
    </>
  );
}
