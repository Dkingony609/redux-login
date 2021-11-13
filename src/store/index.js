import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { STORAGE } from "./constants";
import rootReducer from "./reducers/root";

const store = () => {
  let initialState = localStorage.getItem(STORAGE);

  if (initialState) {
    initialState = JSON.parse(initialState);
  } else {
    initialState = {};
  }

  // Custom Middleware
  const persistStore = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();

    localStorage.setItem(STORAGE, JSON.stringify(state));

    return result;
  };

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, persistStore)
  );
};

export default store();
