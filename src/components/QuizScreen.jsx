import ControlButton from "./ControlButton.jsx";
export default function QuizScreen() {
  return (
    <div className="bg-neutral-300 p-4 rounded-lg w-3/4">
      <h3 className="mb-4 text-2xl font-bold">Pytanie 1</h3>
      <div className="answers flex flex-col gap-2 mb-4">
        <button className="bg-neutral-100 p-1 border">Odp 1</button>
        <button className="bg-neutral-100 p-1 border">Odp 2</button>
        <button className="bg-neutral-100 p-1 border">Odp 3</button>
        <button className="bg-neutral-100 p-1 border">Odp 4</button>
      </div>
      <div className="controlButtons flex justify-between">
        <ControlButton>Prev</ControlButton>
        <ControlButton>Next</ControlButton>
      </div>
    </div>
  );
}
