import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer, { composerEnhancer } from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;