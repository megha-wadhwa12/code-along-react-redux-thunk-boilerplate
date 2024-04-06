import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";

export const fetchStore = createStore(reducer, applyMiddleware(logger, thunk));
//Apply Redux Devtools
import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger,thunk))
);
