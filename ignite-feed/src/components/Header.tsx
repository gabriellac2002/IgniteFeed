import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="bg-gray-800 flex justify-center items-center gap-2 px-0 py-5">
      <img src={logo} alt="Ignite Feed" className="h-8" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
