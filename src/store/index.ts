import { combineReducers, createStore } from "redux";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({ reducer: { todos: todoReducer } });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
