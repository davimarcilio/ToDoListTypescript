import { EmptyList } from "./EmptyList";
import { Item } from "./Item";
import { ListHeaderStatus } from "./ListHeaderStatus";

export function List() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between">
        <ListHeaderStatus switchColors text={"Tarefas criadas"} />
        <ListHeaderStatus text={"Concluídas"} />
      </header>
      <div className="flex flex-col justify-center">
        <Item />
        {/* <EmptyList /> */}
      </div>
    </div>
  );
}
