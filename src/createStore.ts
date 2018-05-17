import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { default as rootReducer } from "./reducers/index";
import { sagas } from "./sagas";

let _store;
let _sagaMiddleware;

export default () => {
  if (_store) {
    return _store;
  } else {
    _sagaMiddleware = createSagaMiddleware();
    _store = createStore(rootReducer, applyMiddleware(logger, _sagaMiddleware));
    _sagaMiddleware.run(sagas);
    return _store;
  }
};
