import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <img className="object-cover w-1/5" src={logo} alt="Quiz app logo" />
      <h1 className="text-2xl font-bold">Quiz App</h1>
    </header>
  );
}
