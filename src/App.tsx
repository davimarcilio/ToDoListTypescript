import { Header } from "./components/Header";
import More from "./assets/more.svg";
export function App() {
  return (
    <div>
      <Header />
      <form className="max-w-736 w-full flex justify-center items-center m-auto gap-2 -mt-8">
        <input
          className="flex-1 bg-gray-500-figma p-4 rounded-lg border box-border border-gray-700-figma focus:outline-none focus:border-purple-dark-figma text-gray-100-figma"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          className="bg-blue-dark-figma justify-center items-center gap-2 rounded-lg text-sm text-white flex p-4 font-bold hover:bg-blue-figma transition-colors"
          type="submit"
        >
          Criar <img src={More} alt="adicionar" />
        </button>
      </form>
    </div>
  );
}
