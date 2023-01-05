import { EmptyList } from "./EmptyList";
import { ListHeaderStatus } from "./ListHeaderStatus";

export function List() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between">
        <ListHeaderStatus switchColors text={"Tarefas criadas"} />
        <ListHeaderStatus text={"Concluídas"} />
      </header>
      <div className="border-t border-gray-300-figma rounded-lg">
        <EmptyList />
      </div>
    </div>
  );
}
