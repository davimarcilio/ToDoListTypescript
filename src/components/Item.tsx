import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { changeIsDone, deleteFromList, List } from "../redux/todoSlice";
export function Item({ id, content, isDone }: List) {
  const [isDon, setIsDone] = useState(false);
  const [itemId, setItemId] = useState(id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setIsDone(isDone);
  }, [isDone]);

  function handleDone() {
    dispatch(changeIsDone(itemId));
  }

  function handleDelete() {
    dispatch(deleteFromList(itemId));
  }

  return (
    <article
      id={id}
      className={`box-border flex items-start border justify-between ${
        isDon ? "border-gray-500-figma" : "border-gray-300-figma"
      } gap-3 bg-gray-500-figma p-4 rounded-lg text-gray-100-figma text-sm`}
    >
      <div className="flex gap-2 items-start justify-start">
        <button
          onClick={handleDone}
          className="rounded text-0 p-checkbox"
          title="Marcar meta como concluida"
        >
          <span
            className={` border-2 relative ${
              isDon
                ? "border-purple-dark-figma bg-purple-dark-figma hover:border-purple-figma hover:bg-purple-figma"
                : "border-blue-figma hover:bg-blue-dark-transparent-figma"
            } p-6321 rounded-full text-0`}
          >
            {isDon ? (
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
            isDon ? "line-through text-gray-400-figma" : "text-gray-100-figma"
          }
        >
          {content}
        </h1>
      </div>
      <button
        className="p-1 group  hover:bg-gray-300-figma rounded"
        title="Apagar meta da lista"
      >
        <Trash
          onClick={handleDelete}
          className="text-gray-400-figma transition-colors group-hover:text-danger-figma"
          size={16}
        />
      </button>
    </article>
  );
}
