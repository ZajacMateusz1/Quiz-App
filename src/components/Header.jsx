import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <img
        className="object-cover w-1/4 md:w-1/6"
        src={logo}
        alt="Math Quiz logo"
      />
      <h1 className="text-2xl font-bold md:text-3xl">Math Quiz</h1>
    </header>
  );
}
