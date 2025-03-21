import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/store/todoSlice";
import filterReducer from "@/store/filterSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
