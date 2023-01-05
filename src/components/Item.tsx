import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";
import { useState } from "react";
export function Item() {
  const [isDone, setIsDone] = useState(false);

  function handleDone() {
    setIsDone((state) => !state);
  }

  return (
    <article
      className={`box-border flex items-start border ${
        isDone ? "border-gray-500-figma" : "border-gray-300-figma"
      } gap-3 bg-gray-500-figma p-4 rounded-lg text-gray-100-figma text-sm`}
    >
      <button
        onClick={handleDone}
        className="rounded text-0 p-checkbox"
        title="Marcar meta como concluida"
      >
        <span
          className={` border-2 relative ${
            isDone
              ? "border-purple-dark-figma bg-purple-dark-figma hover:border-purple-figma hover:bg-purple-figma"
              : "border-blue-figma hover:bg-blue-dark-transparent-figma"
          } p-6321 rounded-full text-0`}
        >
          {isDone ? (
            <Check
              weight="bold"
              size={12}
              className="absolute text-gray-100-figma top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          ) : (
            ""
          )}
        </span>
      </button>
      <h1
        className={
          isDone ? "line-through text-gray-400-figma" : "text-gray-100-figma"
        }
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </h1>
      <button
        className="p-1 group  hover:bg-gray-300-figma rounded"
        title="Apagar meta da lista"
      >
        <Trash
          className="text-gray-400-figma transition-colors group-hover:text-danger-figma"
          size={16}
        />
      </button>
    </article>
  );
}
