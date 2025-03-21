import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface Todo {
  id: number;
  text: string;
  description: string;
  category: string;
  completed: boolean;
}

// Load todos from local storage
const loadTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

// Save todos to local storage
const saveTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState: Todo[] = loadTodos(); // Load initial state from local storage

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        text: string;
        description: string;
        category: string;
      }>,
    ) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        description: action.payload.description,
        category: action.payload.category,
        completed: false,
      });
      toast("Todo added successfully.");
      saveTodos(state); //
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodos(state);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      toast("Todo removed successfully.");
      saveTodos(newState);
      return newState;
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; text: string; description: string }>,
    ) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.description = action.payload.description;
        toast("Todo updated successfully.");
      }
      saveTodos(state);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
