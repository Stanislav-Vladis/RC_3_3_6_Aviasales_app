import { combineReducers } from "redux";
import checkboxReducer from "./checkbox/checkboxReducer";
import sortingReducer from "./sorting/sortingReducer";

const rootReducer = combineReducers({
  checkboxReducer: checkboxReducer,
  sortingReducer: sortingReducer
});

export default rootReducer;
