import Clipboard from "../assets/Clipboard.svg";
export function EmptyList() {
  return (
    <div className="flex justify-center items-center flex-col my-16">
      <img src={Clipboard} alt="clipboard" />
      <h1 className="text-gray-400-figma leading-6 first-line:font-bold">
        Você ainda não tem tarefas cadastradas <br /> Crie tarefas e organize
        seus itens a fazer
      </h1>
    </div>
  );
}
