import { combineReducers, createStore } from "redux";
// import logger from "redux-logger";

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
