import Logo from "../assets/rocket.svg";
export function Header() {
  return (
    <header className="flex justify-center items-center bg-gray-700-figma p-21  gap-3">
      <img src={Logo} alt="rocket logo" />
      <h1 className="font-bold  text-4xll">
        <strong className="text-blue-figma">to</strong>
        <strong className="text-purple-dark-figma">do</strong>
      </h1>
    </header>
  );
}
