import { applyMiddleware, legacy_createStore } from "redux";
import rootreducer from "./redux/main";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {init} from './redux/Reducer'

const mdwl=[thunk]

const store = legacy_createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...mdwl))
);
export default store;
