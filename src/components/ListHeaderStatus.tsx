import { useAppSelector } from "../redux/hooks";
import { ListCounter } from "./ListHeaderStatusCounter";

interface ListHeaderStatusProps {
  text: String;
  switchColors?: boolean;
}

export function ListHeaderStatus({
  text,
  switchColors,
}: ListHeaderStatusProps) {
  const listCount = useAppSelector((state) => state.todo.list.length);
  return (
    <div className="flex gap-2 justify-center items-center text-sm font-bold mt-16">
      <strong
        className={switchColors ? "text-blue-figma" : "text-purple-figma"}
      >
        {text}
      </strong>
      <ListCounter count={listCount} />
    </div>
  );
}
