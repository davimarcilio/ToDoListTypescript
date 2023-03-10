interface ListCounterProps {
  count: number | string;
}

export function ListCounter({ count }: ListCounterProps) {
  return (
    <span className="px-2 bg-gray-300-figma rounded-full text-xs text-gray-200-figma">
      {count}
    </span>
  );
}
