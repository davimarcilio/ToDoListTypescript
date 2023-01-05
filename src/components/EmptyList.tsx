import Clipboard from "../assets/Clipboard.svg";
export function EmptyList() {
  return (
    <div className="border-t border-gray-300-figma rounded-lg">
      <div className="clipboard my-16 mx-6 flex justify-center items-center flex-col gap-4">
        <img src={Clipboard} alt="clipboard" />
        <h1 className="text-gray-400-figma leading-6 first-line:font-bold">
          Você ainda não tem tarefas cadastradas <br /> Crie tarefas e organize
          seus itens a fazer
        </h1>
      </div>
    </div>
  );
}
