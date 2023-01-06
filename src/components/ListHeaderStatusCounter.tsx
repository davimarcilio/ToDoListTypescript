interface ListCounterProps {
  count: Number | String;
}

export function ListCounter({ count }: ListCounterProps) {
  return (
    <span className="px-2 bg-gray-300-figma rounded-full text-xs text-gray-200-figma">
      {count.toString()}
    </span>
  );
}
