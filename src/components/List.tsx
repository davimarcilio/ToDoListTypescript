import { useAppSelector } from "../redux/hooks";
import { EmptyList } from "./EmptyList";
import { Item } from "./Item";
import { ListHeaderStatus } from "./ListHeaderStatus";

export function List() {
  const list = useAppSelector((state) => state.todo.list);
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between">
        <ListHeaderStatus switchFunction text={"Tarefas criadas"} />
        <ListHeaderStatus text={"Concluídas"} />
      </header>
      <div className="flex flex-col justify-center gap-3 mb-6">
        {list.length <= 0 ? (
          <EmptyList />
        ) : (
          list.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                content={item.content}
                isDone={item.isDone}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
