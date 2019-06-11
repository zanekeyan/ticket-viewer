import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/Reducers";

// init initial store state
const initialState = {};

// create store
const store = createStore( reducer, initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    // tool used to make it easier to debug redux applications
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||  compose )
);

export default store;
