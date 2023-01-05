import { ListCounter } from "./ListHeaderStatusCounter";

interface ListHeaderStatusProps {
  text: String;
  switchColors?: boolean;
}

export function ListHeaderStatus({
  text,
  switchColors,
}: ListHeaderStatusProps) {
  return (
    <div className="flex gap-2 justify-center items-center text-sm font-bold mt-16">
      <strong
        className={switchColors ? "text-blue-figma" : "text-purple-figma"}
      >
        {text}
      </strong>
      <ListCounter count={0} />
    </div>
  );
}
