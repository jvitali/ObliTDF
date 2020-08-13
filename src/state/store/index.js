import { createStore, applyMiddleware, compose } from "redux";
// asynchronous
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

const initialState = {};

const middleware = [thunk];

// sacado de redux dev tools (documentacion)
const composed = [
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null,
].filter((x) => x);

const store = createStore(rootReducer, initialState, compose(...composed));

export default store;
