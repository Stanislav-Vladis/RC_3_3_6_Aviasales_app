import { combineReducers } from "redux";
import checkboxReducer from "./checkbox/checkboxReducer";
import sortingReducer from "./sorting/sortingReducer";
import ticketsReducer from "./tickets/ticketsReducer";

const rootReducer = combineReducers({
  checkboxReducer: checkboxReducer,
  sortingReducer: sortingReducer,
  ticketsReducer: ticketsReducer
});

export default rootReducer;
