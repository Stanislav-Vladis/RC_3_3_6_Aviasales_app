import { createReducer } from "@reduxjs/toolkit";
import { fetchTicketsFailure, fetchTicketsRequest, fetchTicketsSuccess } from "./ticketsAction";

const getInitialState = () => {
  return {
    tickets: [],
    loading: false,
    error: null,
  };
}

const ticketsReducer = createReducer(getInitialState(), (builder) => {
  builder
    .addCase(fetchTicketsRequest.type, (state, _) => {
      return { ...state, loading: true, error: null }
    })
    .addCase(fetchTicketsSuccess.type, (state, action) => {
      return { ...state, loading: false, tickets: action.payload }
  })
    .addCase(fetchTicketsFailure.type, (state, action) => {
    return { ...state, loading: false, error: action.payload }
  });
});

export default ticketsReducer;
