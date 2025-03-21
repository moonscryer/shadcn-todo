import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeTodo, toggleTodo, updateTodo } from "@/store/todoSlice";
import { Pencil, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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
  const { category, status } = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState<{
    id: number;
    text: string;
    description: string;
  } | null>(null);

  const handleSave = () => {
    if (editingTodo) {
      dispatch(updateTodo(editingTodo));
      setEditingTodo(null); // Close dialog
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  const filteredTodos = todos.filter((todo) => {
    const categoryMatch = category === "all" || todo.category === category;
    const statusMatch =
      status === "all" ||
      (status === "pending" && !todo.completed) ||
      (status === "done" && todo.completed);

    return categoryMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
  const startIndex = (currentPage - 1) * todosPerPage;
  const paginatedTodos = filteredTodos.slice(
    startIndex,
    startIndex + todosPerPage,
  );

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {paginatedTodos.map((todo) => (
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
                  {todo.description || `Add description for ${todo.text}.`}
                </CollapsibleContent>
              </Collapsible>
            </span>
            <span className="flex gap-5">
              <Badge className={getCategoryColor(todo.category)}>
                {todo.category}
              </Badge>
              <Dialog>
                <DialogTrigger asChild>
                  <span
                    className="group cursor-pointer"
                    onClick={() =>
                      setEditingTodo({
                        id: todo.id,
                        text: todo.text,
                        description: todo.description || "",
                      })
                    }
                  >
                    <Pencil className="text-gray-700 group-hover:text-green-500" />
                  </span>
                </DialogTrigger>
                {editingTodo && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Todo</DialogTitle>
                    </DialogHeader>
                    <Input
                      value={editingTodo.text}
                      onChange={(e) =>
                        setEditingTodo({ ...editingTodo, text: e.target.value })
                      }
                    />
                    <Textarea
                      value={editingTodo.description}
                      placeholder="Add a description..."
                      onChange={(e) =>
                        setEditingTodo({
                          ...editingTodo,
                          description: e.target.value,
                        })
                      }
                    />
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setEditingTodo(null)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleSave}>Save</Button>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
              <span
                className="group cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <X className="text-gray-700 group-hover:text-red-500" />
              </span>
            </span>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <button
                  className={`rounded-md px-3 py-1 ${currentPage === index + 1 ? "bg-gray-300" : "hover:bg-gray-100"}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default TodoList;
