import { createAction } from "@reduxjs/toolkit";
import AviasalesService from "../../service/AviasalesService";

const aviasalesService = new AviasalesService();

export const fetchTicketsRequest = createAction('FETCH_TICKETS_REQUEST');

export const fetchTicketsSuccess = createAction('FETCH_TICKETS_SUCCESS');

export const fetchTicketsFailure = createAction('FETCH_TICKETS_FAILURE');

const getBasket = async (prevTickets) => {
  const tickets = prevTickets;
  let attempt = 0;
  const maxAttempts = 5;

  try {
    const response = await aviasalesService.getTickets(aviasalesService.searchId);
    console.log(response);
    if (!response.stop) tickets.push(...response.tickets);
  } catch (error) {
    if (error.status === 500 && attempt < maxAttempts) {
      attempt++;
      await getBasket();
    } else {
      throw new Error(error.message);
    }
  }

  return tickets;
}

export const fetchTickets = (prevTickets = []) => {
  return async (dispatch) => {
    dispatch(fetchTicketsRequest());

    try {
      await aviasalesService.getSearchId();
      const tickets = await getBasket(prevTickets);
      dispatch(fetchTicketsSuccess(tickets));
    } catch (error) {
      dispatch(fetchTicketsFailure(error.message));
    }
  }
}
