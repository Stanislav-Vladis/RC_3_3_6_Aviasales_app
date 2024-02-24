import React from "react";
import classes from "./flight-options-renderer.module.scss";
import TicketFiltering from "../ticket-filtering/TicketFiltering.jsx";
import FlightTicketsListingDisplay from "../flight-ticket/flight-tickets-listing-display/FlightTicketsListingDisplay.jsx";

export default class FlightOptionsRenderer extends React.Component /*({ flightTicketOptions })*/ {

  render() {
    return (
      <div className={classes.flightSearchResultsContainer}>
        <div className={classes.flightDetailsContainer}>
          <TicketFiltering />
        </div>
        <FlightTicketsListingDisplay flightTicketOptions={{/*flightTicketOptions*/}} />
      </div>
    );
  }
}
