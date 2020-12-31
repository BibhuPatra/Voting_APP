import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers"; // Gets the State from the reducer(s)
import thunk from "redux-thunk";

const middleware = [thunk];	

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  composeEnhancer(
    applyMiddleware(...middleware), 
  ) // Creates the store from the State received from the reducer(s)
);
export default store;