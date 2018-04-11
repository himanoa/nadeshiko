import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { default as rootReducer } from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
