import { createReducer } from "@reduxjs/toolkit";
import { sorting } from "./sortingAction";

const getInitialState = () => {
  return 'Самый дешевый';
}

const sortingReducer = createReducer(getInitialState(), (builder) => {
  builder
    .addCase(sorting.type, (_, action) => {
      return action.payload;
    });
});

export default sortingReducer;
