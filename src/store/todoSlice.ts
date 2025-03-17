import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, text: "Redux with Shadcn", completed: false }];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
