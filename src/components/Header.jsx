import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <img className="object-cover w-1/4" src={logo} alt="Math Quiz logo" />
      <h1 className="text-2xl font-bold">Math Quiz</h1>
    </header>
  );
}
