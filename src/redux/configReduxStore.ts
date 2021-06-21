// import { createHashHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from "./middlewares/apiMiddleware";
import rootReducer from "./reducers/rootReducer";

const middleWares = [thunkMiddleware, apiMiddleware].filter(Boolean);

export const configReduxStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middleWares));

  return { store };
};
