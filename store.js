import { legacy_createStore } from "redux";
import { reducer } from "./reducers/reducer";
export const store = legacy_createStore(reducer)