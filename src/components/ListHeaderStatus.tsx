import { useAppSelector } from "../redux/hooks";
import { ListCounter } from "./ListHeaderStatusCounter";

interface ListHeaderStatusProps {
  text: String;
  switchFunction?: boolean;
}

export function ListHeaderStatus({
  text,
  switchFunction,
}: ListHeaderStatusProps) {
  const listCount = useAppSelector((state) => state.todo.list);
  return (
    <div className="flex gap-2 justify-center items-center text-sm font-bold mt-16">
      <strong
        className={switchFunction ? "text-blue-figma" : "text-purple-figma"}
      >
        {text}
      </strong>
      <ListCounter
        count={
          switchFunction
            ? listCount.length
            : listCount.length !== 0
            ? `${listCount.filter((item) => item.isDone === true).length} de ${
                listCount.length
              }`
            : listCount.length
        }
      />
    </div>
  );
}
