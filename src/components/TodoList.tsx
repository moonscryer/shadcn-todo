import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store"; // Import RootState
import { removeTodo, toggleTodo } from "@/store/todoSlice";
import { Pencil, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const getCategoryColor = (category: string): string => {
  switch (category) {
    case "health":
      return "bg-red-500 text-white";
    case "personal":
      return "bg-blue-500 text-white";
    case "learning":
      return "bg-green-500 text-white";
    case "work":
      return "bg-yellow-500 text-black";
    case "shopping":
      return "bg-purple-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between gap-2 rounded-md border border-gray-400/30 p-4"
        >
          <span className="flex gap-5">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => dispatch(toggleTodo(todo.id))}
            />
            <Collapsible>
              <CollapsibleTrigger
                className={todo.completed ? "text-gray-500 line-through" : ""}
              >
                {todo.text}
              </CollapsibleTrigger>
              <CollapsibleContent>
                Add description for {todo.text}.
              </CollapsibleContent>
            </Collapsible>
          </span>
          <span className="flex gap-5">
            <Badge className={getCategoryColor(todo.category)}>
              {todo.category}
            </Badge>
            <Pencil className="cursor-pointer rounded-sm hover:bg-green-400/10" />
            <X
              className="cursor-pointer rounded-sm hover:bg-red-500/10"
              onClick={() => dispatch(removeTodo(todo.id))}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
