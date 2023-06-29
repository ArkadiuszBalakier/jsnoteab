import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { presistMiddlware } from "./middlewares/presist-middleware";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, presistMiddlware)
);
