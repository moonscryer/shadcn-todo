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

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
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
            <Badge>{todo.category}</Badge>
            <Pencil />
            <X onClick={() => dispatch(removeTodo(todo.id))} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
